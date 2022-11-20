import * as React from "react";
import { FcGoogle } from "react-icons/fc";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
export interface ICreateAccountProps {}

export function Social(props: ICreateAccountProps) {
  return (
    <div className="p-8 bg-white flex flex-col items-center justify-center">
      <h2>Welcome to DEV Community 👩‍💻👨‍💻</h2>
      <p>DEV Community 👩‍💻👨‍💻 is a community of 960,002 amazing developers</p>
      <div className="flex flex-col w-full mt-4">
        <button className="flex items-center justify-center rounded p-3 bg-blue-500 text-white">
          <FcGoogle />
          <span className="ml-2"> Sign up with Google</span>
        </button>
        <button className="rounded bg-[#1DA1F2] my-2 text-white p-3 flex items-center justify-center">
          <TfiTwitterAlt /> <span className="ml-2">Sign up with Twitter</span>
        </button>
        <button className="rounded bg-[#24292E] text-white p-3 flex items-center justify-center">
          <FaGithub />
          <span className="ml-2">Sign up with Github</span>
        </button>
      </div>
      <legend>Already have an account? Log in.</legend>
    </div>
  );
}
