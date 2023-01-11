// import { lazy } from "react";
// const Posts = lazy(() => import("../page/post/posts"));
// const AccountLayout = lazy(() => import("./../layout/accountLayout"));
// const BasicLayout = lazy(() => import("./../layout/basicLayout"));
// const Login = lazy(() => import("../components/login/login"));

import Login from "../components/login/login";
import SignUp from "../components/login/signUp";
import Contact from "../page/contact/contact";
import Posts from "../page/post/posts";

// const SignUp = lazy(() => import("../components/login/signUp"));
import AccountLayout from "./../layout/accountLayout";
import BasicLayout from "./../layout/basicLayout";
import NoLayout from './../layout/noLayout';
const routes = [
  { path: "/", component: Posts, layout: BasicLayout },
  { path: "/create", component: SignUp, layout: AccountLayout },
  { path: "/login", component: Login, layout: AccountLayout },
  { path: "/contact", component: Contact, layout: NoLayout },
];

export default routes;
