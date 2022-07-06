import { useDispatch } from "react-redux";
import { deleteTodo, todoDoneAction } from "../../Services/Actions/TodoAction";
import store from "../../store";
const TodoRow = ({ id, date, text, isDone, setIsUpdate, ind }) => {
  const dispatch = useDispatch(store);
  /* Handle Todo Delete  */
  const handleDeleteTodo = (id) => {
    const isConfirm = window.confirm("Are you sure to delete this todo?");
    if (isConfirm) {
      dispatch(deleteTodo(id));
    }
  };

  /* Handle Todo Update  */
  const handleTodoUpdate = ({ id, text }) => {
    setIsUpdate({ id, text });
  };

  /* Handle Done Todo */
  const handleDone = (id) => {
    const isConfirm = window.confirm("Are you sure to done this todo?");
    if (isConfirm) {
      dispatch(todoDoneAction(id));
    }
  };

  return (
    <tr className={isDone ? "done" : ""}>
      <td>{ind + 1}</td>
      <td>{date}</td>
      <td>{text}</td>
      <td>
        <small>{isDone ? "Completed" : "Pending.."}</small>
      </td>
      <td>
        <button
          onClick={() => handleDone(id)}
          className={`done-btn ${isDone ? "pointer-none" : ""}`}
        >
          ✔️
        </button>
      </td>
      <td>
        <button
          onClick={() => handleTodoUpdate({ id, text })}
          className={`edit-btn ${isDone ? "pointer-none" : ""}`}
        >
          ✏️
        </button>
      </td>
      <td>
        <button onClick={() => handleDeleteTodo(id)} className="delete-btn">
          ❌
        </button>
      </td>
    </tr>
  );
};

export default TodoRow;
