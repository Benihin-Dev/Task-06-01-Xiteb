import React, { useEffect } from "react";
import logoImg from "../navBar/img/logo.png";

export default function LoadingAnimation() {
 
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-30 bg-[#fff] ">
      <div className=" relative  flex  items-center justify-center w-full h-full">
        <div>
          <div className=" absolute top-5 left-0 right-0 w-full flex items-start justify-start px-5 sm:px-0 mx-auto sm:w-11/12">
            <img src={logoImg} alt="" className="h-10" />
          </div>

          <div className=" w-full flex items-center justify-center">
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
