import * as React from "react";

export interface IFilterTopProps {}

function FilterTop(props: IFilterTopProps) {
  return (
    <div className="">
      <button className="hover:bg-white hover:text-color-main active:font-semibold ">
        Relevant
      </button>
      <button className="mx-3 hover:bg-white hover:text-color-main active:font-semibold">
        Latest
      </button>
      <button className="mx-3 hover:bg-white hover:text-color-main active:font-semibold">
        Top
      </button>
    </div>
  );
}
export default React.memo(FilterTop);
