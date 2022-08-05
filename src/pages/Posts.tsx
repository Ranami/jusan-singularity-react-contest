import axios from "axios";
import React, { useEffect, useState } from "react";
import { instance } from "../axios-instance";
import { Post } from "../types/post";

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getData = async () => {
    const data = await instance.get("/posts");
    setPosts(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Posts</div>;
};
