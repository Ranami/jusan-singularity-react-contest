import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { instance } from "../axios-instance";
import { Post } from "../components/Post";
// import { PostsActions } from "../store/reducers/posts";
import { IPost } from "../types/post";

const FlexWrapper = styled("div")`
  margin: 25px 0 0 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  //   const dispatch = useDispatch();

  const getData = async () => {
    const data = await instance.get("/posts");
    // dispatch({ type: PostsActions.GET_POSTS });
    setPosts(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FlexWrapper>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </FlexWrapper>
  );
};
