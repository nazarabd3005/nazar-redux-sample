
//types
export const todos = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  CLEAR: "CLEAR"
};

//
export const initialState = {
  list: [] as any[]
};

//
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case todos.ADD:
      return {
        ...state,
        list: state.list.concat(action.payload)
      };
    case todos.UPDATE:
      return {
        ...state,
        list: state.list.map((item: any) => {
          if (item.id == action.payload.id) {
            item = action.payload;
          }
          return item;
        })
      };
    case todos.DELETE:
      return {
        ...state,
        list: state.list.filter((item: any) => item.id !== action.payload.id)
      };
    case todos.CLEAR:
      return {
        ...state,
        list: []
      };
    default:
      return state;
  }
};

export default rootReducer;
