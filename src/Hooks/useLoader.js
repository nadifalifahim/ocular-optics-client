import React from "react";
import Loader from "react-loader-spinner";

const useLoader = () => {
  return (
    <div className="loader">
      <Loader type="Grid" color="#000000" height={80} width={80} />
    </div>
  );
};

export default useLoader;
