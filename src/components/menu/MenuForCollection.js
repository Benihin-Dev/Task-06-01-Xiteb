import React from 'react'

export default function MenuForCollection({menuData}) {
  return (
    <div className=" mt-16 sm:mt-0  sm:w-1/2 sm:h-80 sm:grid grid-cols-2 rounded-xl overflow-hidden gap-3 space-y-3 sm:space-y-0">
          {menuData.itemMenuData.map((item, index) => (
            <div
              key={index}
              className=" relative  sm:h-40   bg-[#efefef]  flex items-end justify-end overflow-hidden hover:shadow-lg shadow rounded-2xl sm:rounded-none "
            >
              <img
                src={item.image}
                alt=""
                className="w-[60%] pt-4 scale-125 duration-200 object-contain"
              />
              <div className=" absolute w-full top-0 left-0 right-0 bottom-0 bg-[#f9f9f900] px-4 pt-3 cursor-pointer ">
                <p className=" text-lg font-semibold ">{item.name}</p>
                <p className=" text-xs pb-5 text-[#51b3a4]">
                  {item.availableProducts}
                </p>
                <ul className=" text-gray-500 text-sm">
                  {item.items.map((listItem, index) => (
                    <li key={index} className=" hover:text-black duration-200">
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
  )
}
