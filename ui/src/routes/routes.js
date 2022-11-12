import React, { lazy } from "react";
import Posts from "../page/post/posts";

// const Posts = lazy(() => import("../page/post/posts"));
import BasicLayout from "./../layout/basicLayout";

const routes = [{ path: "/", component: Posts, layout: BasicLayout }];

export default routes;
