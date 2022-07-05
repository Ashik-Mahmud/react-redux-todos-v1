import styled from "styled-components";

const TodoField = () => {
  return (
    <TodoFieldStyled>
      <div className="todoField">
        <input type="text" placeholder="Add Todo" />
        <button>Add</button>
      </div>
    </TodoFieldStyled>
  );
};

const TodoFieldStyled = styled.div`
  position: relative;
  text-align: center;
  .todoField {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: min(500px, 100% - 2rem);
    margin: 2rem auto;
    background: #f8f8f8;
    padding: 0.6rem;
    border-radius: 6px;
    input {
      padding: 0.8rem 1rem;
      border: 1px solid #ccc;
      font-family: "Poppins", sans-serif;
      background: none;
      border: none;
      outline: none;
      width: 100%;
      border-radius: 6px;
    }
    button {
      padding: 0rem 1rem;
      background: #19c281;
      font-family: "Poppins", sans-serif;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: 6px;
    }
  }
`;
export default TodoField;
