const initialState = {
  song: [],
  playerSong: {},
  rockClassic: ["queen", "metallica", "oasis", "coldpaly"],
  popCulture: ["madonna", "mannarino", "jovanotti", "adele"],
  hipHop: ["eminem", "rihanna", "snoopdog", "celeste"],
  like: [],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IN_MAIN":
      return {
        ...state,
        song: [...state.song, action.paylod],
      };

    case "ADD_TO_PLAYER":
      return {
        ...state,
        playerSong: action.payload,
      };

    case "LIKE":
      return {
        ...state,
        like: [...state.like, action.payload],
      };

    default:
      return state;
  }
};

export default MainReducer;
