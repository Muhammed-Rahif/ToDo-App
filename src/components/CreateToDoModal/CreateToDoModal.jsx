import React, { useState } from "react";
import "./CreateToDoModal.css";
import moment from "moment";
import { animated } from "react-spring";
import { bgColors } from "../../helpers/constants";
import { v4 as uuidv4 } from "uuid";

function CreateToDoModal({
  onClose,
  onSubmit,
  modelStyle = {},
  bgStyle = {},
  background = "",
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
            <b>Create To-Do</b>
          </div>
          <input
            className="input"
            type="text"
            placeholder="Title..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            maxLength={120}
          />
          <textarea
            className="textarea mt-5"
            placeholder="Description..."
            rows="12"
            onChange={e => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
          <div className="modal-card-footer mt-3 is-flex is-flex-direction-row is-justify-content-flex-end">
            <button
              type="reset"
              className="button box mb-0"
              onClick={() => {
                onClose();
                setTitle("");
                setDescription("");
              }}
            >
              Cancel
            </button>
            <button type="submit" className="button is-primary box mb-0 ml-2">
              Save ToDo
            </button>
          </div>
        </animated.div>
      </form>
    </div>
  );
}

export default CreateToDoModal;
