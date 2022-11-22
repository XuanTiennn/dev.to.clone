import * as React from "react";
import { Social } from "./social";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  return (
    <div className="sm:my-6">
      <Social
        login={true}
        children={
          <div className="w-full">
            <input
              className="w-full border mt-2 p-2 rounded"
              placeholder="Email"
            />
            <input
              className="w-full border mt-2 p-2 rounded"
              placeholder="PassWord"
            />
            <button className="p-2 bg-indigo-500 text-white w-full mt-3 rounded">
              Login
            </button>
          </div>
        }
      />
    </div>
  );
}
