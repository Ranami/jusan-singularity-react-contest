import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { posts } from "./reducers/posts";

export const store = configureStore({
  reducer: combineReducers({
    posts,
  }),
});
