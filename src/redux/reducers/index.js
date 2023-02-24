const initialState = {
  song: [],
  rockClassic: ["queen", "metallica", "oasis", "acdc"],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IN_MAIN":
      return {
        ...state,
        song: action.paylod,
      };

    default:
      return state;
  }
};

export default MainReducer;
