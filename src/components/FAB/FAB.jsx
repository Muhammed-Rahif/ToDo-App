import React from "react";
import "./FAB.css";
import { animated, Spring } from "react-spring";
import { easeBackInOut } from "d3-ease";

function FAB({ onClick, style = {}, createToDoActive = false }) {
  return (
    <animated.button style={style} className="button fab box is-primary" onClick={onClick}>
      <Spring
        from={{ rotate: 0 }}
        to={{ rotate: createToDoActive ? 180 : 0 }}
        config={{
          duration: 1500,
          easing: easeBackInOut.overshoot(2.5),
        }}
      >
        {style => (
          <animated.i
            style={style}
            className={`fas fa-${createToDoActive ? "chevron-down" : "plus"}`}
          ></animated.i>
        )}
      </Spring>
    </animated.button>
  );
}

export default FAB;
