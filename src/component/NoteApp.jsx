import NoteAppListing from "./NoteAppListing";
import "./noteStyle.css";
import SortingButtons from "./SortingButtons";
import { useContext } from "react";
import { TodoContext } from "./context/todoContext";
import NoteAppInputForm from "./NoteAppInputForm";
export default function NoteApp() {
  const { filteredItems, todoStates } = useContext(TodoContext);

  return (
    <>
      <NoteAppInputForm />
      {filteredItems.length === 0 ? <p>Nothing found</p> : <NoteAppListing />}
      <SortingButtons />
      <p>Total todo: {todoStates.data.length}</p>
    </>
  );
}
