const TodoRow = () => {
  return (
    <tr>
      <td>1</td>
      <td>13 Jan, 2022</td>
      <td>Bangladesh Hero</td>
      <td>
        <small>Pending.</small>
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
