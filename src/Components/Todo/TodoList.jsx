import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoRow from "./TodoRow";

const TodoList = ({ setIsUpdate }) => {
  const todoList = useSelector((state) => state).sort((a, b) => a.id - b.id);
  const incompleteToDos = todoList.filter((todo) => todo.isDone === false);
  const completeToDos = todoList.filter((todo) => todo.isDone === true);

  return (
    <TodoListStyled>
      <div className="table-action">
        <ul>
          <li>
            Incomplete Todo <strong>{incompleteToDos.length}</strong>
          </li>
          <li>
            Complete Todo <strong>{completeToDos.length}</strong>
          </li>
        </ul>
      </div>
      <div className="table-container">
        {todoList.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>ToDo</th>
                <th width="80">Status</th>
                <th width="80">Done</th>
                <th width="80">Edit</th>
                <th width="80">Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((todo, ind) => (
                <TodoRow
                  key={todo.id}
                  {...todo}
                  setIsUpdate={setIsUpdate}
                  ind={ind}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-todo">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_330914.png"
              alt="noTodo"
              width={50}
            />
            <h3>No Todo Found</h3>
          </div>
        )}
      </div>
    </TodoListStyled>
  );
};
const TodoListStyled = styled.div`
  position: relative;
  margin: 1rem 0rem;
  .table-action {
    position: relative;
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
      li {
        background: #f8f8f8;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 0.8rem;
      }
    }
  }
  .table-container {
    position: relative;
    overflow: hidden;
    overflow-x: auto;
    width: 100%;

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      th,
      td {
        position: relative;
        border-bottom: 1px solid #ddd;
        padding: 0.8rem;
        &:last-child {
          text-align: center;
        }
        button {
          cursor: pointer;
          background: none;
          border: none;
          outline: none;
          text-align: center;
        }
      }
    }
  }
  .no-todo {
    text-align: center;
    margin: 1rem 0rem;
    h3 {
      margin: 0rem;
    }
  }
  .done {
    opacity: 0.6;
    background: #f8f8f8;
  }
  .pointer-none {
    pointer-events: none;
  }
`;
export default TodoList;
