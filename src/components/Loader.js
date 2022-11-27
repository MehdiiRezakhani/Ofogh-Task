import React from "react";
import ReactDOM from "react-dom";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Loader = () => {
  const { isLoading } = useSelector((state) => state.ui);

  const loader = ReactDOM.createPortal(
    <div className="fixed flex justify-center items-center z-20 h-full w-full">
      <TailSpin color="#333" />
    </div>,
    document.getElementById("loader")
  );

  return <>{isLoading ? loader : null}</>;
};

export default Loader;
