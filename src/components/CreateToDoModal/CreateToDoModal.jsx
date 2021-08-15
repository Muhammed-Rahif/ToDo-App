import React, { useState } from "react";
import "./CreateToDoModal.css";
import moment from "moment";
import { animated, Spring, Transition } from "react-spring";
import { bgColors } from "../../helpers/constants";
import { v4 as uuidv4 } from "uuid";
import { easeBackInOut } from "d3-ease";

function CreateToDoModal({
  onClose,
  onSubmit,
  modelStyle = {},
  bgStyle = {},
  background = "",
  active,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="modal is-active is-clipped">
      <animated.div
        style={{ ...bgStyle, background }}
        className="modal-background"
      ></animated.div>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit({
            title,
            description,
            modified: new Date(),
            formatedModDate: moment().format("lll"),
            boxColor: bgColors[Math.floor(Math.random() * bgColors.length)],
            id: uuidv4(),
            finished: false,
          });
          setTitle("");
          setDescription("");
        }}
      >
        <animated.div style={modelStyle} className="modal-card box">
          <div className="modal-card-title mb-4">
            <Spring
              from={{ opacity: 0, y: 180 }}
              to={{ opacity: active ? 1 : 0, y: active ? 0 : 180 }}
              config={{
                duration: 1500,
                easing: easeBackInOut.overshoot(1.7),
              }}
              delay={150}
            >
              {style => (
                <>
                  <animated.p style={style}>
                    <b style={{ display: "flex", justifyContent: "space-between" }}>
                      Create ToDo
                      <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: active ? 1 : 0 }}
                        config={{
                          duration: 500,
                          easing: easeBackInOut.overshoot(1.7),
                        }}
                        delay={1950}
                      >
                        {style => (
                          <animated.button
                            style={style}
                            type="button"
                            className="delete"
                            aria-label="close"
                            onClick={onClose}
                          ></animated.button>
                        )}
                      </Spring>
                    </b>
                  </animated.p>
                </>
              )}
            </Spring>
          </div>
          <Spring
            from={{ opacity: 0, y: 400 }}
            to={{ opacity: active ? 1 : 0, y: active ? 0 : 400 }}
            config={{
              duration: 1500,
              easing: easeBackInOut.overshoot(1.7),
            }}
            delay={350}
          >
            {style => (
              <animated.input
                style={style}
                className="input"
                type="text"
                placeholder="Title..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                maxLength={120}
              />
            )}
          </Spring>
          <Spring
            from={{ opacity: 0, y: 400 }}
            to={{ opacity: active ? 1 : 0, y: active ? 1 : 400 }}
            config={{
              duration: 1500,
              easing: easeBackInOut.overshoot(1.7),
            }}
            delay={550}
          >
            {style => (
              <animated.textarea
                style={style}
                className="textarea mt-5"
                placeholder="Description..."
                rows="12"
                onChange={e => setDescription(e.target.value)}
                value={description}
                required
              ></animated.textarea>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0, scale: 0.7 }}
            to={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.7 }}
            config={{
              duration: 1500,
              easing: easeBackInOut.overshoot(1.7),
            }}
            delay={750}
          >
            {style => (
              <animated.div
                style={style}
                className="modal-card-footer mt-3 is-flex is-flex-direction-row is-justify-content-flex-end"
              >
                <Spring
                  from={{ opacity: 0, scale: 0.7 }}
                  to={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.7 }}
                  config={{
                    duration: 1500,
                    easing: easeBackInOut.overshoot(1.7),
                  }}
                  delay={1150}
                >
                  {style => (
                    <animated.button
                      style={style}
                      type="reset"
                      className="button box mb-0"
                      onClick={() => {
                        onClose();
                        setTitle("");
                        setDescription("");
                      }}
                    >
                      Cancel
                    </animated.button>
                  )}
                </Spring>
                <Spring
                  from={{ opacity: 0, scale: 0.7 }}
                  to={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.7 }}
                  config={{
                    duration: 1500,
                    easing: easeBackInOut.overshoot(1.7),
                  }}
                  delay={1350}
                >
                  {style => (
                    <animated.button
                      style={style}
                      type="submit"
                      className="button is-primary box mb-0 ml-2"
                    >
                      Save ToDo
                    </animated.button>
                  )}
                </Spring>
              </animated.div>
            )}
          </Spring>
        </animated.div>
      </form>
    </div>
  );
}

export default CreateToDoModal;
