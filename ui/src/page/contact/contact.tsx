import * as React from "react";
import { useQuery } from '@tanstack/react-query';

export interface IAppProps {}

export default function Contact(props: IAppProps) {
const a=  useQuery({
    queryKey: ["posts"],
    // queryFn: () => getPosts(page),
  });
  console.log(a);
  return (
    <div className="p-8 rounded-md" style={{ border: "1px solid #ccc" }}>
      <h1 className="ml-4 text-4xl font-bold">Contacts</h1>
      <div className="ml-4 mt-2">
        <p className="leading-loose text-lg">
          {" "}
          DEV Community 👩‍💻👨‍💻 would love to hear from you!
        </p>
        <p className="leading-loose text-lg">
          Email:{" "}
          <a
            className="text-sky-600 underline  decoration-1 ml-1"
            href="mailto:yo@dev.to"
          >
            yo@dev.to 😁
          </a>
        </p>
        <p className="leading-loose text-lg">
          Twitter:
          <a href="#" className="text-sky-600 underline  decoration-1 ml-1">
            @thepracticaldev 👻
          </a>
        </p>
        <p className="leading-loose text-lg">
          Report a vulnerability:{" "}
          <a href="#" className="text-sky-600 underline  decoration-1 ml-1">
            {" "}
            dev.to/security 🐛
          </a>
        </p>
        <p className="leading-loose text-lg">
          To report a bug, please create{" "}
          <a href="#" className="text-sky-600 underline  decoration-1 ml-1">
            a bug report
          </a>{" "}
          in our open source repository.
        </p>
        <p className="leading-loose text-lg">
          To request a feature, please{" "}
          <a href="#" className="text-sky-600 underline  decoration-1 ml-1">
            start a new GitHub Discussion{" "}
          </a>
          in the Forem repo!
        </p>
      </div>
    </div>
  );
}
