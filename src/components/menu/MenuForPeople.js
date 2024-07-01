import React from "react";
import { useInView } from "react-intersection-observer";

export default function MenuForPeople({ menuData }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`component2Up ${
        inView ? "is-visible" : ""
      }  sm:w-1/2   sm:h-80 sm:flex rounded-xl overflow-hidden gap-3 space-y-3 sm:space-y-0 `}
    >
      <div className="relative h-full sm:w-1/2 bg-[#efefef]   flex justify-end items-end overflow-hidden shadow rounded-2xl sm:rounded-none hover:shadow-gray-300">
        <img
          src={menuData.personMenuData[0].image}
          alt=""
          className="  scale-125 duration-200 rotate-[3deg] object-contain w-[60%]"
        />
        <div className=" absolute w-full top-0 left-0 right-0 bottom-0 bg-[#f9f9f900] px-4 pt-5 cursor-pointer ">
          <p className=" text-lg font-semibold ">
            {menuData.personMenuData[0].name}
          </p>
          <p className=" text-xs pb-5 text-[#51b3a4]">
            {menuData.personMenuData[0].availableProducts}
          </p>
          <ul className=" text-gray-500 space-y-1 text-sm">
            {menuData.personMenuData[0].items.map((listItem, i) => (
              <li key={i} className=" hover:text-black duration-200">
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="  sm:w-1/2  ">
        {menuData.personMenuData.map((item, index) => (
          <div
            key={index}
            className={` ${index === 0 ? "hidden" : ""} ${
              index === 2 ? "mt-3" : ""
            } relative  sm:h-1/2  bg-[#efefef] flex items-end justify-end overflow-hidden shadow rounded-2xl sm:rounded-none `}
          >
            <img
              src={item.image}
              alt=""
              className="w-[50%]  scale-125 duration-200 object-contain"
            />
            <div className=" absolute w-full top-0 left-0 right-0 bottom-0 bg-[#f9f9f900] px-4 pt-3 cursor-pointer ">
              <p className=" text-lg font-semibold ">{item.name}</p>
              <p className=" text-xs pb-3 text-[#51b3a4]">
                {item.availableProducts}
              </p>
              <ul className=" text-gray-500 text-sm">
                {item.items.map((listItem, i) => (
                  <li key={i} className=" hover:text-black duration-200">
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
