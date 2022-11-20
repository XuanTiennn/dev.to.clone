import Posts from "../page/post/posts";

// const Posts = lazy(() => import("../page/post/posts"));
import { Social } from "../components/login/social";
import AccountLayout from "./../layout/accountLayout";
import BasicLayout from "./../layout/basicLayout";

const routes = [
  { path: "/", component: Posts, layout: BasicLayout },
  { path: "/create", component: Social, layout: AccountLayout },
];

export default routes;
