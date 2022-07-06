import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../Services/Actions/TodoAction";
import store from "../../store";
const TodoField = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch(store);
  const toDos = useSelector((state) => state);
  /* Handle Todo  */
  const handleTodo = () => {
    if (!todo) return alert("Please enter todo");
    const isHas = toDos.find((todoText) => todoText.text === todo);
    if (isHas) return alert("Todo already exists");

    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 100000) + 4,
        text: todo,
        date: new Date().toLocaleString(),
        completed: false,
      })
    );
    setTodo("");
  };
  return (
    <TodoFieldStyled>
      <div className="todoField">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Add Todo"
        />
        <button onClick={handleTodo}>Add</button>
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
