import { useEffect, useState } from "react";
import server from "../../axios/server";
import FilterTop from "../../components/post/filter";
import { Post } from "../../components/post/post";

export interface IPostsProps {}

export default function Posts(props: IPostsProps) {
  const [params, setParams] = useState({ page: 0, pageSize: 20 });
  const [posts, setPosts] = useState<Array<Object>>([]);
  useEffect(() => {
    getPosts(params);
  }, [params]);
  const getPosts = (params: object) => {
    server.posts.get(0, 20).then((res: any) => {
      setPosts(res.data);
    });
  };
  console.log(posts);
  return (
    <div>
      <FilterTop />
      {posts?.length > 0 &&
        posts?.map((post: any) => (
          <Post
            title={post.title}
            tags={post.tags}
            createdAt={post.createdAt}
          />
        ))}
    </div>
  );
}
