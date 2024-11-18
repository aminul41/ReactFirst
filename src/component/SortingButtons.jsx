import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
function SortingButtons() {
  const { handleSort } = useContext(TodoContext);
  return (
    <div>
      <button onClick={() => handleSort("all")}>All</button>
      <button onClick={() => handleSort("complete")}>Complete</button>
      <button onClick={() => handleSort("incomplete")}>Incomplete</button>
    </div>
  );
}

export default SortingButtons;
