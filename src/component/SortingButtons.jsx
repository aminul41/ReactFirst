import { useContext } from "react";
import { TodoContext } from "./context/todoContext";
function SortingButtons() {
  const { dispatch } = useContext(TodoContext);
  console.log("I am from sorting buttons");

  return (
    <div>
      {/* <button onClick={() => handleSort("all")}>All</button> */}
      <button
        onClick={() => dispatch({ type: "change_filter", payload: "all" })}
      >
        All
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "change_filter",
            payload: "complete",
          })
        }
      >
        Complete
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "change_filter",
            payload: "incomplete",
          })
        }
      >
        Incomplete
      </button>
    </div>
  );
}

export default SortingButtons;
