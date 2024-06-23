import React, { useState } from "react";
import "./navBar.css";
import logoImg from "./img/logo.png";
import { CiSearch } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { PiShoppingCartLight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars2 } from "react-icons/hi2";

export default function NavBar() {
  const [navItemStateForSmallScreen, setNavItemStateForSmallScreen] =
    useState(false);
  const [searchBoxState, setSearchBoxState] = useState(false);
  const [signUpBannerState, setSignUpBannerState] = useState(true);
  function NavItems() {
    return (
      <ul className=" sm:flex gap-5 lg:gap-8 space-y-3 sm:space-y-0 w-full text-center ">
        <li className="NavItemli">
          Home
        </li>
        <li className="NavItemli">
          Shop
        </li>
        <li className="NavItemli">
          Blog
        </li>
        <li className="NavItemli">
          Contact
        </li>
      </ul>
    );
  }

  return (
    <>
      {signUpBannerState && (
        <div className=" hidden sm:block w-full py-2 bg-[#2f9f94] ">
          <div className=" relative text-xs text-gray-200 w-full sm:w-11/12   mx-auto px-5 sm:px-0 sm:flex items-center justify-between  ">
            <p className="  cursor-default  px-2"> Support (+94)1145 54588</p>
            <p className=" cursor-default px-3">
              Sign up and GET 20% OFF tot your first order.{" "}
              <span className=" underline cursor-pointer">Sign up now</span>
            </p>
            <RxCross2
              onClick={() => {
                setSignUpBannerState(!signUpBannerState);
              }}
              className=" cursor-pointer"
            />
          </div>
        </div>
      )}
      <div className=" w-full border-b relative">
        <div className=" relative w-full sm:w-11/12  mx-auto px-5 sm:px-0 flex items-center justify-between py-2 ">
          <div className=" ">
            <img src={logoImg} alt="" className=" cursor-pointer h-10 object-cover " />
          </div>
          <div className=" hidden sm:block">
            {" "}
            <NavItems />
          </div>
          <ul className=" flex gap-3 text-gray-600">
            <li className=" ">
              <CiSearch
                onClick={() => {
                  setSearchBoxState(~searchBoxState);
                }}
                className=" size-5 text-gray-600 hover:text-[#3bc5ac] cursor-pointer duration-200"
              />
            </li>
            <li>
              <PiShoppingCartLight className=" size-5 text-gray-600 hover:text-[#3bc5ac] cursor-pointer duration-200" />
            </li>
            <li>
              <PiUserLight className=" size-5 text-gray-600 hover:text-[#3bc5ac] cursor-pointer duration-200" />
            </li>
            <li
              onClick={() => {
                setNavItemStateForSmallScreen(!navItemStateForSmallScreen);
              }}
            >
              <HiMiniBars2 className=" block sm:hidden size-5 text-gray-600 hover:text-[#3bc5ac] cursor-pointer duration-200" />
            </li>
          </ul>
          {navItemStateForSmallScreen && (
            <div
              onClick={() => {
                setNavItemStateForSmallScreen(!navItemStateForSmallScreen);
              }}
              className=" sm:hidden absolute top-[100%] left-0 right-0  border-b-2 w-full h-screen pb-40 "
            >
              <div className=" bg-[#fffffff9] py-5">
                {" "}
                <NavItems />
              </div>
            </div>
          )}
        </div>
        {searchBoxState && (
          <div className=" absolute top-0 right-0 w-full h-screen pb-20 ">
            <div className=" bg-[#ffffffd3] flex py-3 sm:py-2 justify-center ">
              <div className="slideDown shadow-sm w-10/12 sm:w-9/12 md:w-8/12 lg:w-6/12 border h-8 sm:h-10 flex items-center border-gray-400 hover:border-[#2f9f94] rounded-2xl overflow-hidden bg-white pr-5">
                <input
                  placeholder="what are you looking for"
                  type="text"
                  className="w-full h-full px-5 outline-none "
                  name=""
                  id=""
                />
                <CiSearch className=" size-5 sm:size-6 text-gray-600 hover:text-[#3bc5ac] cursor-pointer duration-200" />
              </div>
            </div>
            <div
              onClick={() => {
                setSearchBoxState(!searchBoxState);
              }}
              className="  h-full"
            ></div>
          </div>
        )}
      </div>
    </>
  );
}
