import React, { useState } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import ToDoCard from "./components/ToDoCard/ToDoCard";
import FAB from "./components/FAB/FAB";
import CreateToDoModal from "./components/CreateToDoModal/CreateToDoModal";
import { addNewToDo, getToDos } from "./helpers/helper";
import { Spring, animated, Transition } from "react-spring";
import { easeBackInOut } from "d3-ease";

function App({ background = "" }) {
  const [createToDoModel, setCreateToDoModel] = useState(false);
  const [toDosList, setToDosList] = useState(getToDos());

  const onToDoDeleteHandler = id => {
    setToDosList(toDosList.filter(toDo => toDo.id !== id));
  };

  return (
    <div className="container">
      {toDosList.length > 0 ? (
        <Transition
          items={toDosList}
          initial={{ zIndex: "99" }}
          from={{
            scale: 0.7,
            opacity: 0,
            y: -window.innerHeight * 0.7,
            height: "0px",
          }}
          enter={{
            scale: 1,
            opacity: 1,
            y: 0,
            height: "auto",
          }}
          leave={{
            scale: 0.7,
            opacity: 0,
            filter: "blur(4px)",
            height: "min-content",
            y: window.innerHeight * 1.7,
            zIndex: "-99",
          }}
          config={{ duration: 750, easing: easeBackInOut.overshoot(1.7) }}
          trail={100}
        >
          {(style, toDo, t, indx) =>
            toDo && (
              <ToDoCard
                style={{ ...style, zIndex: 30 }}
                {...toDo}
                key={indx}
                onRemove={onToDoDeleteHandler}
                delay={250 * indx + 500}
              />
            )
          }
        </Transition>
      ) : (
        <Spring
          from={{
            fontSize: "0.7rem",
            opacity: 0,
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          to={{
            fontSize: "1.4rem",
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          config={{ duration: 750, easing: easeBackInOut.overshoot(1.7) }}
        >
          {styles => (
            <strong
              className=" mt-5 is-warning mr-5 ml-5 has-text-centered is-capitalized"
              style={{
                fontSize: "1.2rem",
                textAlign: "center",
                margin: "0 !important",
                height: "100vh",
                display: "black",
                top: "38vh",
                position: "relative",
              }}
            >
              <animated.p style={styles}>
                No to-do found!{"\t"}
                <a
                  href="./"
                  onClick={e => {
                    e.preventDefault();
                    setCreateToDoModel(!createToDoModel);
                  }}
                  style={{ textDecoration: "underline" }}
                >
                  Create one
                </a>
              </animated.p>
            </strong>
          )}
        </Spring>
      )}
      <Spring
        from={{ scale: 1, opacity: 0, y: 550 }}
        to={{
          opacity: createToDoModel ? 1 : 0,
          y: createToDoModel ? 0 : 550,
        }}
        config={{ duration: 500, easing: easeBackInOut.overshoot(1.7) }}
      >
        {style => (
          <CreateToDoModal
            bgStyle={{
              opacity: style.opacity,
            }}
            modelStyle={style}
            onClose={() => setCreateToDoModel(false)}
            onSubmit={toDoData => {
              addNewToDo(toDoData);
              setCreateToDoModel(false);
              setToDosList(prev => [toDoData, ...prev]);
            }}
            background={background}
            active={createToDoModel}
          />
        )}
      </Spring>
      <Spring
        from={{ scale: 0.7, opacity: 0 }}
        to={{ scale: 1, opacity: 1 }}
        delay={toDosList.length === 0 ? 500 : 1450}
        config={{
          duration: 500,
          easing: easeBackInOut.overshoot(2.5),
        }}
      >
        {styles => (
          <FAB
            changeIcon={createToDoModel}
            style={styles}
            onClick={() => setCreateToDoModel(!createToDoModel)}
          />
        )}
      </Spring>
    </div>
  );
}

export default App;
