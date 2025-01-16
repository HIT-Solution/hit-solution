import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-teal-500 border-solid"></div>
      <span className="ml-2 text-teal-700 font-medium">Loading...</span>
    </div>
  );
};

export default Loading;
