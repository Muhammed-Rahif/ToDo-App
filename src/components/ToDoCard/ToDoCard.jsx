import React, { useState } from "react";
import "./ToDoCard.css";
import { animated, Spring, Transition, useSprings } from "react-spring";
import { easeBackInOut } from "d3-ease";
import { changeToDoFinished, dltToDo } from "../../helpers/helper";

function ToDoCard({
  id,
  title = "",
  description = "",
  finished,
  style = {},
  boxColor = "#fff",
  onRemove,
  delay = 500,
}) {
  const [toDoFinished, setToDoFinished] = useState(finished);
  console.log({ finished, toDoFinished });
  const btns = [
    { btnColor: "success", delay: delay + 250 },
    { btnColor: "danger", delay: delay + 500 },
  ];

  const btnAnimations = useSprings(
    2,
    btns.map(btn => ({
      from: { scale: 0.7, opacity: 0 },
      to: {
        scale: 1,
        opacity: 1,
      },
      config: { duration: 750, easing: easeBackInOut.overshoot(1.7) },
      delay: btn.delay,
    }))
  );

  return (
    <animated.section
      style={{ ...style, opacity: toDoFinished ? 0.45 : 1 }}
      className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-5 is-relative"
    >
      <div
        style={{ background: boxColor }}
        className="is-light is-relative tile box is-flex is-justify-content-center is-align-items-flex-start is-flex-direction-column"
      >
        <h1 className="title is-4">
          <Transition
            items={title.split("")}
            initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
            enter={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              textDecoration: toDoFinished && "line-through",
              filter: toDoFinished ? "blur(1.5px)" : "blur(0px)",
            }}
            update={{
              textDecoration: toDoFinished && "line-through",
              filter: toDoFinished ? "blur(1.5px)" : "blur(0px)",
            }}
            delay={delay}
            trail={25}
            keys={(item, key) => key}
            config={{ easing: easeBackInOut.overshoot(1.7) }}
          >
            {(style, letter, trans, indx) => (
              <animated.span key={indx} style={style}>
                {letter}
              </animated.span>
            )}
          </Transition>
        </h1>
        <h2 className="subtitle is-5 description">
          <Transition
            items={description.split("")}
            initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
            enter={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              textDecoration: toDoFinished && "line-through",
              filter: toDoFinished ? "blur(1.5px)" : "blur(0px)",
            }}
            update={{
              textDecoration: toDoFinished && "line-through",
              filter: toDoFinished ? "blur(1.5px)" : "blur(0px)",
            }}
            delay={delay}
            trail={5}
            keys={(item, key) => key}
            config={{ easing: easeBackInOut.overshoot(1.7) }}
          >
            {(style, letter, trans, indx) => (
              <animated.span key={indx} style={style}>
                {letter}
              </animated.span>
            )}
          </Transition>
        </h2>
        <Spring
          from={{ height: "0px" }}
          to={{ height: "40px" }}
          config={{ duration: 1000, easing: easeBackInOut.overshoot(1.7) }}
          delay={delay}
        >
          {style => (
            <animated.div
              style={style}
              className="is-flex is-justify-content-flex-end is-flex-direction-row columns w-100"
            >
              {btnAnimations.map((style, indx) => (
                <animated.button
                  style={style}
                  className={`button is-${indx === 0 ? "danger" : "success"} ml-1`}
                  onClick={() => {
                    if (indx === 0) {
                      onRemove(id);
                      dltToDo(id);
                    } else {
                      changeToDoFinished(id, !toDoFinished);
                      setToDoFinished(!toDoFinished);
                    }
                  }}
                  key={indx}
                >
                  <i
                    className={`fas fa-${
                      indx === 0 ? "trash" : toDoFinished ? "undo" : "check"
                    }`}
                  ></i>
                </animated.button>
              ))}
            </animated.div>
          )}
        </Spring>
      </div>
    </animated.section>
  );
}

export default ToDoCard;
