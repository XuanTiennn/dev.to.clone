import * as React from "react";

export interface ICommunityProps {}

export function Community(props: ICommunityProps) {
  return (
    <div>
      <h3 className="xs:text-xs sm:text-xl font-bold">
        DEV Community 👩‍💻👨‍💻 is a community of 960,002 amazing developers
      </h3>
      <p>
        We're a place where coders share, stay up-to-date and grow their
        careers.
      </p>
      <div className="mt-2 flex justify-center items-center flex-col">
        <button className="w-full rounded p-2 hover:bg-emerald-300 hover:text-indigo-500 border border-cyan-500 rounded text-cyan-500 ">
          Create account
        </button>
        <button className="rounded mt-2 w-full hover:bg-color-main p-2">Login</button>
      </div>
    </div>
  );
}
