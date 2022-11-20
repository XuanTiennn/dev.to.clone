import { useEffect, useState, useRef } from "react";
import server from "../../axios/server";
import FilterTop from "../../components/post/filter";
import { Post } from "../../components/post/post";
import { TagDTO } from "./../../interface/tag.interface";

export interface IPostsProps {}

export default function Posts(props: IPostsProps) {
  const [posts, setPosts] = useState<Array<Object>>([]);
  let page = 0;
  const refMounted = useRef<any>(null);
  useEffect(() => {
    if (refMounted.current) {
      getPosts(page);
    } else {
      refMounted.current = true;
    }
  }, []);
  const getPosts = (page: number) => {
    server.posts.get(page, 20).then((res: any) => {
      setPosts((prev) => [...prev, ...res.data]);
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      page += 1;
      getPosts(page);
    }
  };

  return (
    <div>
      <FilterTop />
      {posts?.length > 0 &&
        posts?.map((post: any) => (
          <Post
            likes={post.likes?.length}
            title={post.title}
            tags={post.tags}
            createdAt={post.createdAt}
            authorImg={post.author?.image?.url || undefined}
            authorName={post.author?.fullName || undefined}
          />
        ))}
    </div>
  );
}
