import { createContext, useReducer } from "react";
import { initialState, todoReducer } from "./todoReducer";
export const TodoContext = createContext();
/* const initialState = {
  dataTitle: "",
  data: [],
  editingNow: null,
  editMode: false,
  filter: "all",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "change_todo_name": {
      return { ...state, dataTitle: action.payload };
    }
    case "create_todo": {
      const objData = {
        id: Date.now(),
        title: state.dataTitle,
        isCompleted: false,
        displayTitle: undefined,
      };
      return {
        ...state,
        data: [...state.data, objData],
        dataTitle: "",
      };
    }
    case "edit_todo": {
      const editing = state.data.find((item) => item.id === action.payload.id);
      return {
        ...state,
        editMode: true,
        editingNow: editing,
        dataTitle: editing.title,
        data: state.data.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, displayTitle: "Editing..." };
          }
          return item;
        }),
      };
    }
    case "update_todo": {
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === state.editingNow.id) {
            return { ...item, title: state.dataTitle, displayTitle: undefined };
          }
          return item;
        }),
        editMode: false,
        editingNow: null,
        dataTitle: "",
      };
    }
    case "remove_todo": {
      return {
        ...state,
        data: state.data.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    }
    case "change_iscompleted": {
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, isCompleted: !action.payload.isCompleted };
          }
          return item;
        }),
      };
    }
    case "change_filter": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
}; */
export default function TodoProvider({ children }) {
  const [todoStates, dispatch] = useReducer(todoReducer, initialState);

  const createData = (event) => {
    event.preventDefault();
    if (todoStates.dataTitle.trim("") === "") {
      return alert("Please write something");
    }
    todoStates.editMode
      ? dispatch({ type: "update_todo" })
      : dispatch({ type: "create_todo" });
  };

  // const deleteHandler = (noteId) => {
  //   const newData = data.filter((item) => {
  //     return item.id !== noteId;
  //   });

  //   setData(newData);
  // };
  // const checkHandler = (itemId) => {
  //   const newData = data.map((el) => {
  //     if (el.id === itemId) {
  //       return { ...el, isCompleted: !el.isCompleted };
  //     }
  //     return el;
  //   });
  //   setData(newData);
  // };
  /* const editHandler = (noteId) => {
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
  }; */
  // const updateHandler = (event) => {
  //   event.preventDefault();
  //   dispatch({ type: "update_todo" });
  //   // setData(
  //   //   data.map((item) => {
  //   //     if (item.id === editingNow.id) {
  //   //       item.title = dataTitle;
  //   //     }
  //   //     return item;
  //   //   })
  //   // );
  //   // setEditMode(false);
  //   // setEditingNow(null);
  //   // setDataTitle("");
  // };
  const filteredItems = todoStates.data.filter((item) => {
    if (todoStates.filter === "complete") return item.isCompleted == true;
    if (todoStates.filter === "incomplete") return item.isCompleted == false;
    return true; // 'all'
  });

  // const handleSort = (filterType) => {
  //   setFilter(filterType);
  //   console.log(data);
  // };
  const useCtx = {
    dispatch,
    todoStates,
    filteredItems,
    createData,
  };
  return <TodoContext.Provider value={useCtx}>{children}</TodoContext.Provider>;
}
