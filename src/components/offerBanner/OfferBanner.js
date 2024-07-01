import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function OfferBanner() {
  return (
    <div className=" w-full bg-[#f4f4f4] sm:flex items-end pt-16  ">
      <div className=" slideFromLeft sm:w-1/2 flex items-end pl-5 md:pl-16 sm:pb-20">
        <div className=" ">
          <p className="  cursor-default">50% OFF Summer super sale</p>
          <p className="  cursor-default font-bold text-5xl">
            Unleash Your Street Style with Our New Collectoin
          </p>
          <p className=" text-[#a9b5cd] cursor-default">
            {" "}
            NEW ARIVALS JUST FOR YOU!.
          </p>
          <div className=" cursor-pointer mt-5 flex   w-fit py-1 items-center border  px-5 rounded-md text-gray-100 bg-[#56c5b4] hover:bg-[#51b3a4] duration-200 ">
            <p>Shop Now</p>
            <IoIosArrowRoundForward className=" text-white size-4" />
          </div>
        </div>
      </div>
      <div className=" slideFromRight sm:px-5 sm:h-[75vh] flex items-end justify-center  ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/pepz-2ae36.appspot.com/o/product%2F53e55909-34a3-4418-bb48-a7ba808ae8deScreenshot_2024-06-20_012827-removebg-preview.png?alt=media&token=6fbb0fec-929e-462f-9686-66eba067e5a5"
          alt=""
          className=" h-full object-cover"
        />
      </div>
    </div>
  );
}
