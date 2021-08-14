import React, { useState } from "react";
import "./CreateToDoModal.css";
import moment from "moment";
import { animated } from "react-spring";
import { bgColors } from "../../helpers/constants";
import { v4 as uuidv4 } from "uuid";

function CreateToDoModal({ onClose, onSubmit, modelStyle = {}, bgStyle = {} }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="modal is-active is-clipped">
      <animated.div style={bgStyle} className="modal-background"></animated.div>
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
          });
          setTitle("");
          setDescription("");
        }}
      >
        <animated.div style={modelStyle} className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              <b>Create To Do</b>
            </p>
            <button
              className="delete"
              onClick={onClose}
              aria-label="close"
              type="button"
            ></button>
          </header>
          <section className="modal-card-body">
            <input
              className="input"
              type="text"
              placeholder="Title..."
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            <textarea
              className="textarea mt-5"
              placeholder="Description..."
              rows="12"
              onChange={e => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </section>
          <footer className="modal-card-foot is-flex is-justify-content-flex-end">
            <button
              className="button"
              onClick={() => {
                onClose();
                setTitle("");
                setDescription("");
              }}
              type="reset"
            >
              Cancel
            </button>
            <button className="button is-primary" type="submit">
              Save To Do
            </button>
          </footer>
        </animated.div>
      </form>
    </div>
  );
}

export default CreateToDoModal;
