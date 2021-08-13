import React from "react";
import "./FAB.css";
import {animated} from "react-spring";

function FAB({onClick, style = {}}) {
  return (
    <animated.button
      style={style}
      className="button fab box is-primary"
      onClick={onClick}
    >
      <i className="fas fa-plus"></i>
    </animated.button>
  );
}

export default FAB;
