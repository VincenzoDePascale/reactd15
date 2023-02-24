import { configureStore, combineReducers } from "@reduxjs/toolkit";

import basicRed from "../reducers";

const rootReducer = combineReducers({
  redBasic: basicRed,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
