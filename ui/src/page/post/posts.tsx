import { useEffect, useRef, useState } from "react";
import server from "../../axios/server";
import FilterTop from "../../components/post/filter";
import { Post } from "../../components/post/post";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setPosts } from "./postSlice";
export interface IPostsProps {}

export default function Posts(props: IPostsProps) {
  // const [posts, setPosts] = useState<Array<Object>>([]);
  const [tabSelected, setTabSelected] = useState(0);
  const [page, setPage] = useState<number>(0);
  const post = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  // let page = 0;
  const refMounted = useRef<any>(null);
  // useEffect(() => {
  //   if (refMounted.current) {
  //     getPosts(page);
  //   } else {
  //     refMounted.current = true;
  //   }
  // }, []);
  const data = useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPosts(page),
    staleTime: 5 * 60 * 1000,
  });
  // console.log({ posts });
  const getPosts = async (page: number) => {
    const _posts = await server.posts.get(page, 20);
    // setPosts((prev) => [...prev, ..._posts.data]);
    dispatch(setPosts(_posts.data));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      // page += 1;
      setPage((prev) => prev + 1);
      // getPosts(page);
    }
  };

  return (
    <div>
      <FilterTop tabSelected={tabSelected} setTabSelected={setTabSelected} />
      {post?.posts?.length > 0 &&
        post?.posts?.map((post: any, index) => (
          <Post
            likes={post.likes?.length}
            title={post.title}
            tags={post.tags}
            createdAt={post.createdAt}
            authorImg={post.author?.image?.url || undefined}
            authorName={post.author?.fullName || undefined}
            slug={post.slug}
            post={post}
            key={index}
          />
        ))}
    </div>
  );
}
