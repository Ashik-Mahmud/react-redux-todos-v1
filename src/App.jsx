import styled from "styled-components";
import "./App.css";
import TodoContainer from "./Components/Todo/TodoContainer";

function App() {
  return (
    <AppContainer className="App">
      <header className="App-header">
        <div className="title">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2599/2599636.png"
            alt="notesImage"
            width={100}
          />
          <h1>Create Your Todo</h1>
          <span>Make Plan to todo something </span>
        </div>
        <TodoContainer />
      </header>
    </AppContainer>
  );
}

const AppContainer = styled.section`
  position: relative;
  width: 1270px;
  margin: 1rem auto;
  font-family: "Poppins", sans-serif;
  .title {
    margin: 1rem 0rem;
    text-align: center;
    span {
      font-size: 0.9rem;
      color: #444;
    }
    h1 {
      margin: 0px;
    }
  }
`;
export default App;
