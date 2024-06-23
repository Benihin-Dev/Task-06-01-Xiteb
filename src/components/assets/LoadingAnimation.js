import React, { useEffect } from "react";
import logoImg from "../navBar/img/logo.png";

export default function LoadingAnimation() {
  useEffect(() => {
    // Ensure the script is only added once
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-30 bg-[#ffffff] ">
      <div className=" relative  flex  items-center justify-center w-full h-full">
        <div>
          <div className=" absolute top-5 left-0 right-0 w-full flex items-start justify-start px-5 sm:px-0 mx-auto sm:w-11/12">
            <img src={logoImg} alt="" className=" w-32" />
          </div>
          <dotlottie-player
            src="https://lottie.host/040da07e-bd8c-4442-b407-48774c102123/q4vQTNVr0Q.json"
            background="#FFFFFF"
            speed="1"
            style={{ width: "400px", height: "400px" }}
            direction="1"
            playMode="normal"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}
