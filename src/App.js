import React, { useEffect, useState } from "react";
import moment from "moment";
import store from "store";
import "./App.css";
const storeKey = "ToDo-App-Key"

function App() {
  const [textField, setTextField] = useState("");
  const [toDos, setToDos] = useState([]);
  const [removedToDos, setRemovedToDos] = useState([]);

  useEffect(() => {
    setToDos(store.get(storeKey).toDos);
    setRemovedToDos(store.get(storeKey).removedToDos);
  }, []);

  useEffect(() => {
    store.set(storeKey, { toDos: toDos, removedToDos: removedToDos })
  }, [toDos, removedToDos]);

  return (
    <div className="container">
      <div className="row mt-5 ">
        <form>
          <div className="shadow-3 input-group input-group-lg">
            <span className="shadow-3 input-group-text">To Do :</span>
            <input
              type="text"
              className="shadow-3 form-control"
              id="textInput"
              value={textField}
              onChange={(e) => {
                setTextField(e.target.value);
              }}
            />
            <button
              type="submit"
              className="shadow-3 btn btn-primary"
              onSubmit={e => {
                e.preventDefault();
              }}
              onClick={(e) => {
                e.preventDefault();
                if (textField === null || textField === " " || textField === "") {
                  document.getElementById("textInput").focus();
                } else {
                  var newToDo = {
                    content: textField,
                    time: moment().format("LLLL"),
                    id: new Date().getTime(),
                    status: false,
                  };
                  setToDos([...toDos, newToDo]);
                  setTextField("");
                  document.getElementById("textInput").focus();
                }
              }}
            >
              Add
          </button>
          </div>
        </form>
        <div className="col-md-12 mt-3 mb-3">
          {toDos.map((itm) => {
            return (
              <div key={itm.id} className="shadow-3 mt-2 card border">
                <div className="shadow-3 card-body">
                  {itm.content}
                  <div className="float-end">
                    <input type="checkbox" className="btn-check" id={`btn-check-${itm.id}`} autoComplete="off"
                      onChange={(e) => {
                        setToDos(toDos.filter(obj => {
                          if (obj.id === itm.id) {
                            obj.status = e.target.checked;
                          }
                          return obj;
                        }))
                      }}
                    />
                    <label className="btn btn-success mr-1" htmlFor={`btn-check-${itm.id}`}><i className="shadow-3 fas fa-check"></i></label>
                    <button type="button" className="btn btn-danger"
                      onClick={() => {
                        if (window.confirm("Are you sure you want to remove this ?")) {
                          setRemovedToDos((removedToDos) => [...removedToDos, itm]);
                          setToDos(toDos.filter(obj => {
                            if (obj.id !== itm.id) {
                              return obj;
                            }
                            return null;
                          }))
                        }
                      }}
                    ><i className="fas fa-trash"></i></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-12">
          <h4 className="text-center">Active ToDos</h4>
          <hr className="hr" />
          <table className="shadow-1-strong table table-hover table-responsive table-bordered mt-2 mb-5">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">To Do</th>
                <th scope="col">Completed</th>
              </tr>
            </thead>
            <tbody>
              {
                toDos.length !== 0 ?
                  toDos.map((itm) => {
                    return (
                      <tr key={itm.id}>
                        <th scope="row">{itm.time}</th>
                        <td>{itm.content}</td>
                        <td>
                          {itm.status ? (
                            <i className="shadow-3 fas fa-check text-success"></i>
                          ) : (
                            <i className="shadow-3 fas fa-times text-danger"></i>
                          )}
                        </td>
                      </tr>
                    );
                  }) : <tr><td colSpan={3} className="text-center">Empty</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
      <div className="shadow-3 row">
        <div className="shadow-3 col-md-12">
          <div className="shadow-1-strong accordion mb-5" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="shadow-3 accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Removed To Dos
                </button>
              </h2>
              <div
                id="collapseOne"
                className="shadow-3 accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-mdb-parent="#accordionExample"
              >
                <div className="shadow-3 accordion-body">
                  <table className="shadow-1 table table-hover table-responsive table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Time</th>
                        <th scope="col">To Do</th>
                        <th scope="col">Completed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {removedToDos.map((itm) => {
                        return (
                          <tr key={itm.id}>
                            <th scope="row">{itm.time}</th>
                            <td>{itm.content}</td>
                            <td>
                              {itm.status ? (
                                <i className="shadow-3 fas fa-check text-success"></i>
                              ) : (
                                <i className="shadow-3 fas fa-times text-danger"></i>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
