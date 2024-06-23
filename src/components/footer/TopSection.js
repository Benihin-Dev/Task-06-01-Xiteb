import React from 'react'
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa6";
import { FaCcApplePay } from "react-icons/fa";
import { AiOutlineSlack } from "react-icons/ai";

export default function TopSection() {
  return (
    <div className=" cursor-default text-sm w-full px-5 sm:px-0 sm:w-11/12   mx-auto sm:flex gap-5 md:gap-10">
    <div>
      <p className=" text-gray-300 font-bold">Lorem, ipsum dolor.</p>
      <div className=" flex items-end gap-2 text-gray-50">
        <FaCcVisa className=" size-8" />
        <FaCcMastercard className=" size-8" />
        <FaCcPaypal className=" size-8" />
        <FaCcAmex className=" size-8" />
        <FaCcApplePay className=" size-8" />
      </div>
      <p className=" text-xs sm:w-3/5  text-gray-200 pt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea
        quisquam debitis perferendis dolorem ut.
      </p>
    </div>
    <div className=" ">
      <p className=" text-gray-300 font-bold pb-5">AIURHSFA SIUASHDFAFUD</p>
      <div className=" sm:flex gap-10">
        <AiOutlineSlack className=" text-gray-300 size-20 w-3/12 " />
        <p className=" text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          molrem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          molestias?
        </p>
      </div>{" "}
    </div>
  </div>
  )
}
