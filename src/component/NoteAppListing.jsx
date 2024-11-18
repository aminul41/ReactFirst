import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
export default function NoteAppListing() {
  const { editHandler, deleteHandler, checkHandler, filteredItems } =
    useContext(TodoContext);
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
                onChange={() => checkHandler(item.id)}
                className="checkbox-input"
              />
              <span className="checkbox"></span>
            </label>
            <span
              className={`item-title ${item.isCompleted ? "completed" : ""}`}
            >
              {item.title}
            </span>
            <div className="actions">
              <button onClick={() => editHandler(item.id)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => deleteHandler(item.id)}
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
