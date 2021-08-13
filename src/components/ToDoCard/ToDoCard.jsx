import React from "react";
import "./ToDoCard.css";
import { animated } from "react-spring";

function ToDoCard({
  title = "",
  description = "",
  style = {},
  boxColor = "#fff",
}) {
  return (
    <animated.section
      style={style}
      className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-5 is-relative"
    >
      <div
        style={{ background: boxColor }}
        className="is-light is-relative tile box is-flex is-justify-content-center is-align-items-flex-start is-flex-direction-column"
      >
        <h1 className="title is-4">{title}</h1>
        <h2 className="subtitle is-5">{description}</h2>
      </div>
    </animated.section>
  );
}

export default ToDoCard;
