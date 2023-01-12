import React, { useState } from "react";
import { Social } from "./social";
import server from "./../../axios/server";

export interface ILoginProps {
  email: string;
  passWord: string;
}

export default function Login(props: any) {
  const [user, setUser] = useState<ILoginProps>({
    email: "",
    passWord: "",
  });
  const applyChange = (prop: any, value: any) => {
    const _user = structuredClone(user);
    _user[prop] = value;
    setUser(_user);
  };
  const login = () => {
    server.user.login(user);
  };
  return (
    <div className="sm:my-6">
      <Social
        login={true}
        children={
          <div className="w-full">
            <input
              value={user.email}
              onChange={(e) => applyChange("email", e.target.value)}
              className="w-full border mt-2 p-2 rounded"
              placeholder="Email"
            />
            <input
              value={user.passWord}
              onChange={(e) => applyChange("passWord", e.target.value)}
              className="w-full border mt-2 p-2 rounded"
              placeholder="PassWord"
            />
            <button
              onClick={login}
              className="p-2 bg-indigo-500 text-white w-full mt-3 rounded"
            >
              Login
            </button>
          </div>
        }
      />
    </div>
  );
}
