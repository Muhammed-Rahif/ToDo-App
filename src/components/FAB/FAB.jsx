import React from "react";
import "./FAB.css";
import { animated } from "react-spring";

function FAB({ onClick, style = {}, changeIcon = false }) {
  return (
    <animated.button style={style} className="button fab box is-primary" onClick={onClick}>
      <i className={`fas fa-${changeIcon ? "chevron-down" : "plus"}`}></i>
    </animated.button>
  );
}

export default FAB;
