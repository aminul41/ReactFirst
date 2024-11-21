import { useContext } from "react";
import { TodoContext } from "./context/todoContext";

export default function NoteAppListing() {
  const { filteredItems, dispatch } = useContext(TodoContext);
  return (
    <>
      <ul className="noteListWrapper">
        {filteredItems?.map((item) => (
          <li key={item.id} className="list-item">
            <label className="checkbox-container">
              <input
                type="checkbox"
                name="checkBox"
                checked={item.isCompleted}
                onChange={() =>
                  dispatch({ type: "change_iscompleted", payload: item })
                }
                className="checkbox-input"
              />
              <span className="checkbox"></span>
            </label>
            <span
              className={`item-title ${item.isCompleted ? "completed" : ""}`}
            >
              {item.displayTitle || item.title}
            </span>
            <div className="actions">
              <button
                onClick={() => dispatch({ type: "edit_todo", payload: item })}
                className="edit-btn"
              >
                Edit
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "remove_todo", payload: item.id })
                }
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
