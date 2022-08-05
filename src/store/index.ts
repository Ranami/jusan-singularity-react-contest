import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { posts } from "./reducers/posts";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: combineReducers({
    posts,
  }),
  middleware: [sagaMiddleware],
});

// sagaMiddleware.run(rootSaga)
