import * as React from "react";
import { useEffect } from "react";
import server from "./../../axios/server";
import { useState } from "react";

export interface IPostDetailProps {
  id: string;
}

export default function PostDetail(props: IPostDetailProps) {
  const { id } = props;
  const [post, setPost] = useState({});
  useEffect(() => {
    server.posts.getById(id).then((res) => {
      console.log(res);
    });
  }, [id]);
  return <div></div>;
}
