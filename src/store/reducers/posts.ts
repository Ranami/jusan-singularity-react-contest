const initState = {
  posts: [],
};

enum PostsActions {
  GET_POSTS = "GET_POSTS",
}

export function posts(state = initState, action: any) {
  const newState = { ...state };
  switch (action.type) {
    case PostsActions.GET_POSTS:
      newState.posts = action.payload;
      break;
  }
}
