import * as React from "react";
import { IoSearchOutline } from "react-icons/io5";
export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <div className="header flex justify-between items-center p-2">
      <div className="header_left flex items-center">
        <img
          className="w-10"
          src="https://res.cloudinary.com/duxzkjxo5/image/upload/v1668239915/dev.to/resized_logo_UQww2soKuUsjaOGNB38o_v7nn3l.png"
        />
        <div className="flex items-center relative">
          <input className="p-1 border rounded ml-2" />
          <IoSearchOutline className="absolute top-2.5 right-2.5"/>
        </div>
      </div>
      <div className="header_right">
        <button className="mr-4 hover:bg-indigo-300 hover:text-indigo-500 p-2 rounded">Login</button>
        <button className="border font-medium p-1 border-cyan-500 rounded text-cyan-500	">
          Create account
        </button>
      </div>
    </div>
  );
}
