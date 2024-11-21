import "./App.css";
import NoteApp from "./component/NoteApp";
import TodoProvider from "./component/context/todoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <NoteApp />
      </TodoProvider>
    </>
  );
}
export default App;
