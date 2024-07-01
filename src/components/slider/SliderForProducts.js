import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

export default function SliderForProducts({ data }) {
  //using custom data for slider
  const products = [
    {
      id: 1,
      title: "Orange Lycra",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image:
        "https://www.perfectpanache.com/cdn/shop/products/Orange_Lycra_Dress_with_Multi_Colour_Flowers-1_1024x1024@2x.png?v=1553349302",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 2,
      title: "White Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image:
        "https://ae01.alicdn.com/kf/S6be8c9e0f4484fa88b8cd592a2d5dc30F.png_640x640.png_.webp",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/1/376254172/VA/KH/AM/102578689/34-500x500.png",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Women Casual Tops",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image:
        "https://www.klarna.com/sac/product/232x232/3106618201/Shein-EZwear-4pcs-Slim-Fit-Women-s-Camisole-Tops-Casual-And-Suitable-For-Summer.jpg?ph=true",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title: "Kids Sun Glasses",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image:
        "https://cdn11.bigcommerce.com/s-bb2b7/images/stencil/1280x1280/products/9239/23793/kids_sunglasses-removebg-preview__49926.1655997945.png?c=2&imbypass=on",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Indian Sarees ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image:
        "https://www.southindiaeshop.com/wp-content/uploads/2023/11/work-sarees.webp",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: " Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://store.badenstock.com/cdn/shop/files/spod-567190894-370-1_1500x.png?v=1692890271",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 8,
      title: "Make-Up Tools",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image:
        "https://png.pngtree.com/png-vector/20240219/ourmid/pngtree-an-elegant-display-of-professional-decorative-cosmetics-makeup-tools-png-image_11751191.png",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "Cross Back Dress",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image:
        "https://assets.theplace.com/image/upload/t_pdp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3046468/3046468_BQ.png",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "White Runnig Shoe",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        "https://images.ctfassets.net/hnk2vsx53n6l/2zCvBd8ynhY470i5fJuyjD/fb503b3f4b99bad85e148f1e581edc03/xnbo3i31fluiqwrd3cwh.png?fm=webp",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },

    {
      id: 11,
      title: "Stylish Purple Dress",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image:
        "https://s.alicdn.com/@sc04/kf/H1b5447b87e334832ae9d9a65f76e83beK.png_300x300.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title: "Jacket for Men",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image:
        "https://images-cdn.ubuy.co.in/6589072193debd18fa681056-mens-fleece-jacket-american-flag.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
  ];
  const slides = products.map((item) => item);
  const sliderRef = useRef(null);

  //next btn function
  const handleNextSlide = (event) => {
    event.stopPropagation();
    sliderRef.current.slickNext();
  };

  //previous btn function
  const handlePrevSlide = (event) => {
    event.stopPropagation();
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slideUp w-full bg-[#f9feff] py-10">
      <div className=" py-3 w-full sm:px-0 sm:w-11/12 mx-auto flex items-end justify-between gap-5">
        <div className=" w-full gap-5 relative">
          <div className=" px-4 sm:px-0 cursor-default">
            <p className={` text-3xl pb-3  `}>
              Discover the Perfect Addition to Your Life
            </p>
            <p className={`  sm:w-4/5 text-gray-500 leading-4 sm:pr-20 pb-10`}>
              Treat yourself to the experiences you deserve. Explore our
              collection and unlock a world of possibilities. Add these amazing
              products to your cart today and start living your best life!
            </p>
          </div>

          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            slidesToShow={5.4}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            speed={500}
            responsive={[
              {
                breakpoint: 940,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                },
              },
            ]}
          >
            {slides.map((item, index) => (
              <div key={index} className=" px-2 sm:px-3 ">
                <div className="border cursor-pointer  bg-[#f9f9f9] overflow-hidden rounded-md shadow-sm hover:shadow-gray-300 hover:border-[#47b7a8] border-[#eaeaea] duration-200">
                  <div className="flex items-center justify-center h-[15vh] sm:h-[20vh] md:h-[23vh] pt-4  lg:h-[30vh] overflow-hidden rounded-sm shadow-sm">
                    <img
                      src={item.image}
                      alt=""
                      className=" h-full hover:scale-150 p-5 scale-125 duration-200  object-contain"
                    />
                  </div>
                  <div className="bg-white pt-2 flex flex-col">
                    <div className="px-1 mt-auto">
                      <div className="flex items-end justify-center">
                        <div className="flex">
                          {Array.from({ length: 5 }, (_, index) =>
                            index < item.rating.rate ? (
                              <HiStar
                                key={index}
                                className="text-[#ffad33d5] size-[15px]"
                              />
                            ) : (
                              <HiOutlineStar
                                key={index}
                                className="text-gray-400 size-[15px]"
                              />
                            )
                          )}
                        </div>
                        <p className="text-gray-500 text-[10px]">
                          ({item.rating.count})
                        </p>
                      </div>
                      <p className="w-full text-center sm:text-sm text-indigo-500">
                        {item.title}
                      </p>
                      <p className="font-semibold w-full text-center text-sm text-[#f86561] pb-2">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div
            className="  absolute top-[60%] sm:top-[55%] left-1 py-3  pl-1 hover:text-white hover:bg-gray-200 hover:left-0 border border-[#65e4e9]  duration-200 rounded-sm bg-[#cbfdff6c]"
            onClick={handlePrevSlide}
          >
            <IoIosArrowForward className="text-gray-400 rotate-180 size-5" />
          </div>
          <div
            className="  absolute top-[60%] sm:top-[55%] right-1 py-3 pl-1 duration-200   hover:bg-gray-200 hover:right-0 border border-[#65e4e9] rounded-sm bg-[#cbfdff6c]"
            onClick={handleNextSlide}
          >
            <IoIosArrowForward className="text-gray-400 size-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
