import { createContext, useState } from "react";
export const TodoContext = createContext();
export default function TodoProvider({ children }) {
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
  const useCtx = {
    handleSort,
    filteredItems,
    updateHandler,
    editHandler,
    checkHandler,
    deleteHandler,
    createData,
    editMode,
    dataTitle,
    setDataTitle,
    data,
  };
  return <TodoContext.Provider value={useCtx}>{children}</TodoContext.Provider>;
}
