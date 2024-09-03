import React from "react";
import LoadingGif from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="fixed inset-0 grid place-items-center bg-white z-30">
      <img className='w-[20rem]' src={LoadingGif} alt="loading" />
    </div>
  );
};

export default Loading;