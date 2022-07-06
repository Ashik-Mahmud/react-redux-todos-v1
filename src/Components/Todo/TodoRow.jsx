import { useDispatch } from "react-redux";
import { deleteTodo } from "../../Services/Actions/TodoAction";
import store from "../../store";
const TodoRow = ({ id, date, text, completed, setIsUpdate, ind }) => {
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

  return (
    <tr>
      <td>{ind + 1}</td>
      <td>{date}</td>
      <td>{text}</td>
      <td>
        <small>{completed ? "Completed" : "Pending.."}</small>
      </td>
      <td>
        <button className="isComplete-btn">✔️</button>
      </td>
      <td>
        <button
          onClick={() => handleTodoUpdate({ id, text })}
          className="edit-btn"
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
