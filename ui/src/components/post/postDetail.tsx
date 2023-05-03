import * as React from "react";
import { useEffect } from "react";
import server from "./../../axios/server";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export interface IPostDetailProps {
  id?: string;
}

export default function PostDetail(props: IPostDetailProps) {
  const post = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  console.log(post?.post);
  // useEffect(() => {
  //   server.posts.getById(post?.post?.id).then((res) => {
  //     console.log(res);
  //   });
  // }, [post.post.id]);
  return <div>PostDetail</div>;
}
