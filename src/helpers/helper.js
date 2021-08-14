import store from "store";
import operationsPlugin from "store/plugins/operations";
import defaultsPlugin from "store/plugins/defaults";

// Localstorage key
const TODOS_LOCALSTORAGE_KEY = "toDosList";

// Local storage configurations
store.addPlugin([operationsPlugin, defaultsPlugin]);
store.defaults(TODOS_LOCALSTORAGE_KEY, []);

// Helper functions

const addNewToDo = toDoData => {
  store.unshift(TODOS_LOCALSTORAGE_KEY, toDoData);
};

const getToDos = () => store.get(TODOS_LOCALSTORAGE_KEY) || [];

const dltToDo = id =>
  store.set(
    TODOS_LOCALSTORAGE_KEY,
    getToDos().filter(toDo => toDo.id !== id)
  );

const changeToDoFinished = (id, finished) =>
  store.update(TODOS_LOCALSTORAGE_KEY, toDos =>
    toDos.map(toDo => (toDo.id === id ? { ...toDo, finished } : toDo))
  );

export { addNewToDo, getToDos, dltToDo, changeToDoFinished };
