import { createStore } from "redux";
import TodoReducer from "./Services/Reducers/TodoReducer";

const store = createStore(TodoReducer);
export default store;