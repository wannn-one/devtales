import React from "react";
import { discoverContent, discoverAction } from "../../data/data";

const Discover = () => {
  return (
    <div className="sticky top-[6rem]">
      <div className="border-b border-gray-400 pb-7">
        <h2 className="font-semibold">Discover more of what matters to you</h2>
        <div className="my-2 flex items-center gap-3 flex-wrap">
          {discoverContent.map((item, i) => (
            <button
              key={i}
              className="bg-gray-200 py-2 px-3 text-sm rounded-full hover:text-white hover:bg-customblack hover:duration-300">
              {item}
            </button>
          ))}
        </div>
        <button className="text-green-600 text-sm py-3 hover:underline">
          See more topics
        </button>
      </div>
      <div className="flex items-center flex-wrap gap-3 leading-3 pt-8">
        {discoverAction.map((item, i) => (
          <button key={i} className="text-md text-customblack hover:underline">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Discover;
