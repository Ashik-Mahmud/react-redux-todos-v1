import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../Constant/TodoConstant";

const initTodo = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
    date: new Date().toLocaleString(),
  },
];

const TodoReducer = (state = initTodo, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case EDIT_TODO:
      const totalTodoExceptEdited = state.filter(
        (todo) => todo.id !== action.payload.id
      );
      const updatedTodo = state.find((todo) => todo.id === action.payload.id);
      updatedTodo.text = action.payload.text;
      return [...totalTodoExceptEdited, updatedTodo];

    case DELETE_TODO:
      const totalTodoExceptDeleted = state.filter(
        (todo) => todo.id !== action.payload
      );
      return totalTodoExceptDeleted;

    default:
      return state;
  }
};

export default TodoReducer;
