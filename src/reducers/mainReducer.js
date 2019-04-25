const initialState = {
  name: ""
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MAIN_NAME":
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};

export default mainReducer;
