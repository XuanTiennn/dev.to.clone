import { useEffect, useRef, useState } from "react";
import server from "../../axios/server";
import FilterTop from "../../components/post/filter";
import { Post } from "../../components/post/post";
// import { useQuery } from "@tanstack/react-query";
export interface IPostsProps {}

export default function Posts(props: IPostsProps) {
  const [posts, setPosts] = useState<Array<Object>>([]);
  const [tabSelected, setTabSelected] = useState(0);

  let page = 0;
  const refMounted = useRef<any>(null);
  useEffect(() => {
    if (refMounted.current) {
      getPosts(page);
    } else {
      refMounted.current = true;
    }
  }, []);
  // const { data, isLoading } = useQuery({
  //   queryKey: ["posts", 0],
  //   queryFn: () => server.posts.get(0, 20),
  // });
  // console.log({data,isLoading});
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
      <FilterTop tabSelected={tabSelected} setTabSelected={setTabSelected} />
      {posts?.length > 0 &&
        posts?.map((post: any) => (
          <Post
            likes={post.likes?.length}
            title={post.title}
            tags={post.tags}
            createdAt={post.createdAt}
            authorImg={post.author?.image?.url || undefined}
            authorName={post.author?.fullName || undefined}
            slug={post.slug}
          />
        ))}
    </div>
  );
}
