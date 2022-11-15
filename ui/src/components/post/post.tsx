import * as React from "react";

export interface IPostProps {
  title: String;
  createdAt: Date;
  tags: Array<number>;
}

export function Post({ title, createdAt, tags }: IPostProps) {
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}
