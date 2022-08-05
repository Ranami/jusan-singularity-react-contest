import { IPost } from "./../../types/post";

interface IInitState {
  posts: IPost[];
}

const initState: IInitState = {
  posts: [],
};

export enum PostsActions {
  GET_POSTS = "GET_POSTS",
}

export const posts = (state = initState, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case PostsActions.GET_POSTS:
      newState.posts = action.payload;
      console.log(newState.posts);
      break;
  }
};
