import { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "./../../types/post";

interface IInitState {
  posts: IPost[];
}

const initState: IInitState = {
  posts: [],
};

export enum PostsActions {
  FETCH_POSTS = "FETCH_POSTS",
}

export const posts = (state = initState, action: PayloadAction<IPost[]>) => {
  const newState = { ...state };
  switch (action.type) {
    case PostsActions.FETCH_POSTS:
      newState.posts = action.payload;
      break;
    default:
      return newState;
  }

  return newState;
};
