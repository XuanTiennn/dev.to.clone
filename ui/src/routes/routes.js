import React, { lazy } from "react";

const Posts = lazy(() => import("../page/post/posts"));

const Routes = [{ path: "/", component: <Posts /> }];

export default Routes;
