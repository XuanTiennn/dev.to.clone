import { combineReducers } from "@reduxjs/toolkit";
import reducer from "../page/post/postSlice";

const rootReducer = combineReducers({
  posts: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
