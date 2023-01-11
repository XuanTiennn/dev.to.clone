import * as React from "react";
import { Community } from "../community/community";
import LeftConstant from "./../../util/leftListConstant";
import { useNavigate } from 'react-router-dom';

export interface ICategoriesProps {}

export function Categories(props: ICategoriesProps) {
  const history=useNavigate()
  return (
    <div className="">
      <div className="bg-white p-2 rounded">
        <Community />
      </div>
      <div>
        <ul>
          {LeftConstant.list.map((i, index) => (
            <li
              className="flex items-center my-2 cursor-pointer hover:bg-purple-lighting p-1 rounded "
              key={index}
              onClick={()=>history(`${i.to}`)}
            >
              <span>{i.icon}</span>
              <span className="ml-2 hover:underline">{i.name}</span>
            </li>
          ))}
        </ul>
        <h4 className="font-bold">Other</h4>
        <ul>
          {LeftConstant.other.map((i, index) => (
            <li
              className="flex items-center my-2 cursor-pointer hover:bg-purple-lighting p-1 rounded"
              key={index}
            >
              <span>{i.icon}</span>
              <span className="ml-2 hover:underline">{i.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
