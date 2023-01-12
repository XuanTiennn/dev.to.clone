import React, { useState } from "react";
import server from "../../axios/server";
import { Social } from "./social";

export interface ISignUpProps {
  email: string;
  name: string;
  passWord: string;
}

export default function SignUp(props: any) {
  const [user, setUser] = useState<ISignUpProps>({
    email: "",
    name: "",
    passWord: "",
  });
  const applyChange = (prop: any, value: any) => {
    const _user = structuredClone(user);
    _user[prop] = value;
    setUser(_user);
  };
  const submit = async () => {
    console.log(user);
    await server.user.register(user);
  };
  return (
    <div className="sm:my-6">
      <Social
        login={false}
        children={
          <div className="w-full">
            <input
              value={user?.email}
              className="w-full border mt-2 p-2 rounded"
              placeholder="Email"
              onChange={(e) => applyChange("email", e.target.value)}
            />
            <input
              value={user?.name}
              className="w-full border mt-2 p-2 rounded"
              placeholder="Name"
              onChange={(e) => applyChange("name", e.target.value)}
            />
            <input
              value={user?.passWord}
              className="w-full border mt-2 p-2 rounded"
              placeholder="PassWord"
              onChange={(e) => applyChange("passWord", e.target.value)}
            />
            <button
              onClick={submit}
              className="p-2 bg-indigo-500 text-white w-full mt-3 rounded"
            >
              Sign Up
            </button>
          </div>
        }
      />
    </div>
  );
}
