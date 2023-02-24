const initialState = {
  song: [],
  rockClassic: ["queen", "metallica", "oasis", "acdc"],
  popCulture: ["madonna", "mannarino", "jovanotti", "adele"],
  hipHop: ["eminem", "rihanna", "snoopdog", "celeste"],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IN_MAIN":
      return {
        ...state,
        song: [...state.song, action.paylod],
      };

    default:
      return state;
  }
};

export default MainReducer;
