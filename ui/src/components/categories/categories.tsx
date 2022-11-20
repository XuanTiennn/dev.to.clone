import * as React from "react";
import { Community } from "../community/community";

export interface ICategoriesProps {}

export function Categories(props: ICategoriesProps) {
  return (
    <div className="">
      <div className="bg-white p-2 rounded">
        <Community />
      </div>
    </div>
  );
}
