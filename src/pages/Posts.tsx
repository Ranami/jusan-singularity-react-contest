import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { instance } from "../axios-instance";
import { Post } from "../components/Post";
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

  const getData = async () => {
    const data = await instance.get("/posts");
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
