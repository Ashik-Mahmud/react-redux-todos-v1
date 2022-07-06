const TodoRow = ({ id, date, text, completed }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{date}</td>
      <td>{text}</td>
      <td>
        <small>{completed ? "Completed" : "Pending.."}</small>
      </td>
      <td>
        <button className="isComplete-btn">✔️</button>
      </td>
      <td>
        <button className="edit-btn">✏️</button>
      </td>
      <td>
        <button className="delete-btn">❌</button>
      </td>
    </tr>
  );
};

export default TodoRow;
