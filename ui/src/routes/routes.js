// import { lazy } from "react";
// const Posts = lazy(() => import("../page/post/posts"));
// const AccountLayout = lazy(() => import("./../layout/accountLayout"));
// const BasicLayout = lazy(() => import("./../layout/basicLayout"));
// const Login = lazy(() => import("../components/login/login"));

import Login from "../components/login/login";
import SignUp from "../components/login/signUp";
import Posts from "../page/post/posts";

// const SignUp = lazy(() => import("../components/login/signUp"));
import AccountLayout from "./../layout/accountLayout";
import BasicLayout from "./../layout/basicLayout";
const routes = [
  { path: "/", component: Posts, layout: BasicLayout },
  { path: "/create", component: SignUp, layout: AccountLayout },
  { path: "/login", component: Login, layout: AccountLayout },
];

export default routes;
