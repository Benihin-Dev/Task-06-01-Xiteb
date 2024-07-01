import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Timer from "./Timer";
import { useInView } from "react-intersection-observer";

export default function OfferSliderBanner() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const endDate = new Date(2024, 6, 22, 18, 1);
  return (
    <div
      ref={ref}
      className={`component2Right ${
        inView ? "is-visible" : ""
      } w-full pb-20 overflow-hidden  `}
    >
      <div className=" w-full overflow-hidden  ">
        <div className="  mx-5  sm:w-11/12 sm:mx-auto rounded-xl sm:flex overflow-hidden border cursor-pointer ">
          <div className="  sm:w-5/12 bg-[#e9e9e9]   overflow-hidden  flex items-end justify-center">
            <img
              src="https://static.wixstatic.com/media/3bbbda_e5b3c76a4ae14a5097db6138b6cd0e2c~mv2.png/v1/crop/x_0,y_0,w_844,h_840/fill/w_223,h_222,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Capa%205%20copia%205%20(7).png"
              alt=""
              className=" scale-125 hover:scale-150 duration-200 pt-3 h-full object-cover"
            />
          </div>
          <div className="  sm:w-7/12 themeColorForBG p-5 flex items-end">
            <div>
              {" "}
              <p className=" text-white text-3xl pb-6 sm:pr-16 font-semibold">
                10% Discount on your Dream Clothes:
              </p>
              <p className=" text-sm text-gray-100  leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                aspernatur accusamus odio ea iste harum consectetur adipisicing
                elit. Debitisipsum dolor sits odio ea iste harum consectetur
                adipisicing elit. Debitis aspernatur accusamus odio ea
              </p>
              <Timer endDate={endDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
