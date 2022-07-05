import styled from "styled-components";
import TodoField from "./TodoField";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <TodoStyled>
      <TodoField />
      <TodoList />
    </TodoStyled>
  );
};

const TodoStyled = styled.section`
  position: relative;
`;
export default TodoContainer;
