import React, { useState } from "react";

export interface IFilterTopProps {
  tabSelected: number;
  setTabSelected: Function;
}

function FilterTop(props: IFilterTopProps) {
  const { tabSelected, setTabSelected } = props;
  return (
    <div className="">
      <button
        onClick={() => setTabSelected(0)}
        style={{ fontWeight: tabSelected === 0 ? "600" : "" }}
        className="p-2 rounded hover:bg-white hover:text-color-main active:font-semibold "
      >
        Relevant
      </button>
      <button
        onClick={() => setTabSelected(1)}
        style={{ fontWeight: tabSelected === 1 ? "600" : "" }}
        className="p-2 rounded mx-3 hover:bg-white hover:text-color-main active:font-semibold"
      >
        Latest
      </button>
      <button
        onClick={() => setTabSelected(2)}
        style={{ fontWeight: tabSelected === 2 ? "600" : "" }}
        className="p-2 rounded mx-3 hover:bg-white hover:text-color-main active:font-semibold"
      >
        Top
      </button>
    </div>
  );
}
export default React.memo(FilterTop);
