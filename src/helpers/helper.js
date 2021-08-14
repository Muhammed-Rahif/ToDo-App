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

export { addNewToDo, getToDos };
