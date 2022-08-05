import { configureStore, createStore } from "@reduxjs/toolkit";
import { posts } from "./reducers/posts";

export const store = createStore(posts);
