import NoteAppInputForm from "./NoteApp-input-form";
import NoteAppListing from "./NoteAppListing";
import "./noteStyle.css";
import { useState } from "react";
import SortingButtons from "./SortingButtons";
export default function NoteApp() {
  const [dataTitle, setDataTitle] = useState("");
  const [data, setData] = useState([]);
  const [editingNow, setEditingNow] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [filter, setFilter] = useState("all");
  const createData = (event) => {
    event.preventDefault();
    const objData = {
      id: Date.now(),
      title: dataTitle,
      isCompleted: false,
    };
    if (dataTitle.trim("")) {
      setData([...data, objData]);
    }
    setDataTitle("");
  };

  const deleteHandler = (noteId) => {
    const newData = data.filter((item) => {
      return item.id !== noteId;
    });

    setData(newData);
  };
  const checkHandler = (itemId) => {
    const newData = data.map((el) => {
      if (el.id === itemId) {
        return { ...el, isCompleted: !el.isCompleted };
      }
      return el;
    });
    setData(newData);
  };
  const editHandler = (noteId) => {
    const editing = data.find((item) => item.id == noteId);
    setEditMode(true);
    setEditingNow(editing);
    setDataTitle(editing.title);
    setData(
      data.map((item) => {
        if (item.id === noteId) {
          item.title = "Editing...";
        }
        return item;
      })
    );
  };
  const updateHandler = (event) => {
    event.preventDefault();
    setData(
      data.map((item) => {
        if (item.id === editingNow.id) {
          item.title = dataTitle;
        }
        return item;
      })
    );
    setEditMode(false);
    setEditingNow(null);
    setDataTitle("");
  };
  const filteredItems = data.filter((item) => {
    if (filter === "complete") return item.isCompleted == true;
    if (filter === "incomplete") return item.isCompleted == false;
    return true; // 'all'
  });

  const handleSort = (filterType) => {
    setFilter(filterType);
    console.log(data);
  };

  return (
    <>
      <NoteAppInputForm
        editMode={editMode}
        dataTitle={dataTitle}
        setDataTitle={setDataTitle}
        createData={createData}
        updateHandler={updateHandler}
      />
      {filteredItems.length === 0 ? (
        <p>Nothing found</p>
      ) : (
        <NoteAppListing
          editHandler={editHandler}
          deleteHandler={deleteHandler}
          checkHandler={checkHandler}
          filteredItems={filteredItems}
        />
      )}
      <SortingButtons handleSort={handleSort} />
      <p>Total todo: {data.length}</p>
    </>
  );
}
