export const initialState = {
  dataTitle: "",
  data: [],
  editingNow: null,
  editMode: false,
  filter: "all",
};

export const todoReducer = (state, action) => {
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
};
