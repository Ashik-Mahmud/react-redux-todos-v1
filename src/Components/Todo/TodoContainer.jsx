import { useState } from "react";
import styled from "styled-components";
import TodoField from "./TodoField";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [isUpdate, setIsUpdate] = useState({});

  return (
    <TodoStyled>
      <TodoField isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
      <TodoList setIsUpdate={setIsUpdate} />
    </TodoStyled>
  );
};

const TodoStyled = styled.section`
  position: relative;
`;
export default TodoContainer;
