import styled from "styled-components";
import TodoRow from "./TodoRow";

const TodoList = () => {
  return (
    <TodoListStyled>
      <div className="table-action"></div>
      <div className="table-container">
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
            <TodoRow />
            <TodoRow />
            <TodoRow />
            <TodoRow />
          </tbody>
        </table>
      </div>
    </TodoListStyled>
  );
};
const TodoListStyled = styled.div`
  position: relative;
  margin: 1rem 0rem;
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
`;
export default TodoList;
