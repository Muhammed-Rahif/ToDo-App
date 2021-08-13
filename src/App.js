import React, { useState } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import ToDoCard from "./components/ToDoCard/ToDoCard";
import FAB from "./components/FAB/FAB";
import CreateToDoModal from "./components/CreateToDoModal/CreateToDoModal";
import { addNewToDo, getToDos } from "./helpers/helper";
import { Spring, animated, Transition } from "react-spring";
import { easeBackInOut } from "d3-ease";

function App() {
  const [createToDoModel, setCreateToDoModel] = useState(false);
  const [toDosList, setToDosList] = useState(getToDos());
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="container">
      {toDosList.length > 0 ? (
        <Transition
          items={toDosList}
          from={{
            scale: 0.7,
            opacity: 0,
            y: window.innerHeight * 0.7,
          }}
          enter={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}
          config={{ duration: 750, easing: easeBackInOut.overshoot(1.7) }}
          trail={100}
        >
          {(style, toDo) =>
            toDo && <ToDoCard style={{ ...style, zIndex: 30 }} {...toDo} />
          }
        </Transition>
      ) : (
        <Spring
          from={{
            scale: 0.7,
            opacity: 0,
          }}
          to={{ scale: 1, opacity: 1 }}
          config={{ duration: 500, easing: easeBackInOut.overshoot(1.7) }}
        >
          {styles => (
            <animated.article
              className="message mt-5 is-warning mr-5 ml-5"
              style={styles}
              onClick={() => setShowNotification(!showNotification)}
            >
              <div className="message-header">
                <p>You don't have any todos..!</p>
              </div>
              <div className="message-body">
                <strong>
                  You didn't created atleast one to do... Maybe you are first
                  time here.. Don't worry..!{" "}
                  <a
                    href="./"
                    onClick={e => {
                      e.preventDefault();
                      setCreateToDoModel(!createToDoModel);
                    }}
                  >
                    Create one
                  </a>{" "}
                  to do now..
                </strong>
              </div>
            </animated.article>
          )}
        </Spring>
      )}
      <Spring
        from={{ scale: 0.7, opacity: 0 }}
        to={{
          scale: createToDoModel ? 1 : 0.7,
          opacity: createToDoModel ? 1 : 0,
          zIndex: createToDoModel ? 99 : -99,
          y: createToDoModel ? 0 : 500,
        }}
        config={{ duration: 500, easing: easeBackInOut.overshoot(1.7) }}
      >
        {style => (
          <CreateToDoModal
            bgStyle={{
              opacity: style.opacity,
              zIndex: style.zIndex,
            }}
            modelStyle={style}
            onClose={() => setCreateToDoModel(false)}
            onSubmit={toDoData => {
              addNewToDo(toDoData);
              setCreateToDoModel(false);
              setToDosList(prev => [toDoData, ...prev]);
            }}
          />
        )}
      </Spring>
      <Spring
        from={{ scale: 0.7, opacity: 0 }}
        to={{ scale: 1, opacity: 1 }}
        delay={800}
        config={{
          duration: 500,
          easing: easeBackInOut.overshoot(2.5),
        }}
      >
        {styles => (
          <FAB
            style={{ ...styles, zIndex: createToDoModel ? 30 : 70 }}
            onClick={() => setCreateToDoModel(!createToDoModel)}
          />
        )}
      </Spring>
    </div>
  );
}

export default App;
