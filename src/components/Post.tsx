import { styled } from "@mui/material";
import React, { FC } from "react";
import { IPost } from "../types/post";

const Wrapper = styled("div")`
  border: 2px solid black;
  box-sizing: border-box;
  width: 500px;
  padding: 10px;
`;

type PostType = {
  post: IPost;
};

export const Post: FC<PostType> = ({ post }) => {
  return (
    <Wrapper>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </Wrapper>
  );
};
