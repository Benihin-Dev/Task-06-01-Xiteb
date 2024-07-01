import React from "react";

export default function Card() {
  const cardData = [
    {
      image:
        "https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/blog/blog2.png",
      date: "March 18, 2024",
      text: " Meet the Woman Stay ahead of the fashion curve with exclusive  Behind Cool Ethical Label Reformation",
    },
    {
      image:
        "https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/blog/blog3.png",
      date: "July 23, 2024",
      text: " Lauryn Stay ahead of the fashion curve with exclusiveHill Could Make Tulle Skirt and Cowboy",
    },
    {
      image:
        "https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/blog/blog4.png",
      date: "May 13, 2024",
      text: " ConsecteturStay ahead of the fashion curve with exclusive adipisicing. magnam   Colors, Accessories",
    },
    {
      image:
        "https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/blog/blog1.png",
      date: "February 03, 2024",
      text: " Fashion Trends In 2024 Styles,Stay ahead of the fashion curve with exclusive Colors, Accessories",
    },
  ];
  return (
    <div className=" w-full py-10">
      <div className=" px-5 sm:px-0 mx-auto w-full sm:w-11/12 ">
        <p className=" text-[#000000] w-full text-center  d text-3xl">
          Trendsetting Fashion Insights
        </p>
        <p className=" w-full text-[#8789f4] mx-auto text-center sm:w-2/3 md:w-1/2  leading-4 mt-1">
          Stay ahead of the fashion curve with exclusive insights from our top
          fashion experts, and explore the newest designs handpicked just for
          you.
        </p>
        <div className=" mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
          {cardData.map((item, index) => (
            <div
              key={index}
              className=" w-full shadow shadow-[#1a898b5e] border overflow-hidden cursor-pointer hover:border-[#8789f49b]"
            >
              <div className=" w-full  overflow-hidden  aspect-square ">
                <img
                  src={item.image}
                  className=" w-full h-full object-cover hover:scale-110 duration-200"
                  alt=""
                />
              </div>
              <div className=" p-4 space-y-3">
                <p className=" text-[#2ba28f] text-sm   pb-1 cursor-default">
                  {item.date}
                </p>
                <p className=" pb-2 text-lg leading-5 text-gray-500 hover:text-[rgb(159,106,251)] cursor-pointer duration-200">
                  {item.text}
                </p>
                <button className="hover:bg-[#34b5a0] duration-200 w-full border py-[5px]  shadow-md px-4  hover:text-white">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
