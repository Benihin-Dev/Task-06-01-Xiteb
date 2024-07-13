import React from "react";

import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";

export default function Footer() {
  return (
    <div className=" w-full bg-[#25645e]">
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f9feff"
            fillOpacity="1"
            d="M0,128L60,154.7C120,181,240,235,360,240C480,245,600,203,720,165.3C840,128,960,96,1080,96C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}
