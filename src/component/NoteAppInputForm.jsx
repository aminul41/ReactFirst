import { useContext } from "react";
import { TodoContext } from "./context/todoContext";
export default function NoteAppInputForm() {
  const { dispatch, todoStates, createData } = useContext(TodoContext);
  return (
    <div>
      <form
        onSubmit={(event) => {
          createData(event);
        }}
      >
        <input
          type="text"
          value={todoStates.dataTitle}
          onChange={(e) =>
            dispatch({ type: "change_todo_name", payload: e.target.value })
          }
          // onChange={(e) => todoStates.dataTitle(e.target.value)}
          placeholder="Add your notes..."
        />
        <button type="submit">
          {todoStates.editMode ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
}
