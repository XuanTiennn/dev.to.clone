import * as React from "react";
import { Categories } from "../components/categories/categories";
import { Header } from "../components/header/header";
import { Listing } from "../components/listing/listing";
import Posts from "../page/post/posts";

export default function BasicLayout({
  topContent = <Header />,
  leftContent = <Categories />,
  rightContent = <Listing />,
  centerContent = <Posts />,
  ...props
}: any) {
  return (
    <div>
      <div>{topContent}</div>
      <div className="grid grid-cols-custom-grid gap-3">
        <div>{leftContent}</div>
        <div>{centerContent}</div>
        <div>{rightContent}</div>
      </div>
    </div>
  );
}
