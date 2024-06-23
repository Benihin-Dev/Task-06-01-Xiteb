import React from "react";
import "./footer.css";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

export default function MiddleSection() {
  return (
    <div className=" w-full bg-[#287a72] py-10 mt-10">
      <div className="   w-full px-5 sm:px-0 sm:w-11/12   mx-auto sm:flex gap-5 md:gap-10">
        <div className=" sm:w-1/2 flex gap-5 justify-between">
          <div className=" text-sm text-gray-300">
            <p className=" text-xs text-gray-400 pb-3 cursor-default">
              HIFLE & INFORMATION
            </p>
            <ul className=" leading-5 pb-4">
              <li className=" footerli">
                FAQ edfuiwhrgw
              </li>
              <li className=" footerli">
                Patment Progress
              </li>
              <li className=" footerli">
                Shipping Infokhj
              </li>
            </ul>
            <ul className=" leading-5">
              <li className=" footerli">
                Widefawrjkfwer ewuorwe
              </li>
              <li className=" footerli">
                Direct Orderskhjn
              </li>
              <li className=" footerli">
                AGB Impression
              </li>
              <li className=" footerli">
                Impressionn rwtjhwower
              </li>
              <li className=" footerli">
                Sitemap BERIFIENCE
              </li>
            </ul>
          </div>
          <div className=" sm:pr-16 text-sm text-gray-300">
            <p className=" text-xs text-gray-400 pb-3 cursor-default">
              BERIFIENCE ERG IMPERISON
            </p>
            <ul className=" leading-5 pb-4">
              <li className=" footerli">
                Home Impression
              </li>
              <li className=" footerli">
                Producrt Impression
              </li>
              <li className=" footerli">
                Shipping Story Impression
              </li>
              <li className=" footerli">
                Widefa Impression
              </li>
              <li className=" footerli">
                Direct Orders Impression
              </li>
            </ul>

            <p className=" text-xs text-gray-400 pb-3 cursor-default">
              Account Impression
            </p>

            <ul className=" leading-5">
              <li className=" footerli">
                Widefa Impression
              </li>
              <li className=" footerli">
                Direct Orders Impression
              </li>
            </ul>
          </div>
        </div>
        <div className=" text-sm sm:w-1/2 pt-8 sm:pt-0">
          <div>
            <p className=" text-gray-400 cursor-default text-sm">
              {" "}
              SOCIAL MEDIA
            </p>
            <ul className=" text-gray-200 flex gap-3 mt-2">
              <li className="  footerSocialMediali">
                <FaFacebookF className=" size-6" />
              </li>
              <li className=" footerSocialMediali">
                <FaInstagram className=" size-6" />
              </li>
              <li className="  footerSocialMediali">
                <TfiYoutube className=" size-6" />
              </li>
              <li className="footerSocialMediali">
                <FaPinterestP className=" size-6" />
              </li>
            </ul>
            <p className=" text-gray-400 mt-5 pb-3 underline cursor-default  ">
              {" "}
              Sign-Up
            </p>
            <p className=" text-sm text-gray-300 sm:pr-16 cursor-default">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officiis, molestiae consequatur! Cum animi cumque molestias
              exercitationem vero temporibus sint velit aliquam minus accusamus,
              deserunt dolores laboriosam, asperiores tenetur explicabo modi!
            </p>
            <div className=" mt-5 flex items-end gap-3 sm:w-9/12">
              <input
                type="text"
                name=""
                className=" p-2 px-3 bg-gray-200 w-8/12 border outline-none"
                id=""
                placeholder="Email Address"
              />
              <button className=" text-gray-900 hover:text-black hover:bg-gray-200 duration-200 font-bold border border-gray-200 p-2 w-4/12">
                Sent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
