import React, { useState } from "react";
import "./menu.css";
import MenuForCollection from "./MenuForCollection";
import MenuForPeople from "./MenuForPeople";

export default function Menu() {
  const [menuData, setMenuData] = useState({
    personMenuData: [
      {
        name: "Men's Fashion",
        availableProducts: "250+ Products",
        items: [
          "Shirts",
          "Jeans",
          "Jackets & Coats",
          "Shoes",
          "Glasses",
          "T-Shirts",
        ],
        image:
          "https://firebasestorage.googleapis.com/v0/b/pepz-2ae36.appspot.com/o/product%2Fe20a64b5-f019-4a3c-841a-f68cc587ab7bScreenshot_2024-06-20_205732-removebg-preview.png?alt=media&token=03f6a1e4-6a55-48e4-8b89-214a64ba36aa",
      },
      {
        name: "Women's Fashion",
        availableProducts: "350+ Products",
        items: ["Sharees", "Knit", "Sun Cream", "Earings"],
        image:
          "https://firebasestorage.googleapis.com/v0/b/pepz-2ae36.appspot.com/o/product%2Fdc65155f-8697-4d01-bece-dd6c1eff37d3Screenshot_2024-06-20_205858-removebg-preview.png?alt=media&token=2b97acce-2832-46e1-ba92-739d8690d043",
      },
      {
        name: "Kids's Fashion",
        availableProducts: "300+ Products",
        items: ["Dresses", "Shoes", "Caps"],
        image:
          "https://firebasestorage.googleapis.com/v0/b/pepz-2ae36.appspot.com/o/product%2F83b3cc93-0168-446c-b4c3-3af7e38db2eaScreenshot_2024-06-20_210139-removebg-preview.png?alt=media&token=510b75da-67ea-4d4c-943b-c770880e6615",
      },
    ],
    itemMenuData: [
      {
        name: "Jeans Collection",
        availableProducts: "3500+ Products",
        items: ["Slim-Fit", "Beggy", "Wide-Leg"],
        image:
          "https://cloutcollection.shop/cdn/shop/products/CLOUT_COLLECTION_image2_Vintage-Blue-Loose-Denim-Pants-Men-Retro-Straight-Baggy-Jeans-2023-Wide-Leg-Casual-Black-Jeans_2400x.png?v=1708304156",
      },
      {
        name: "Top Fashions",
        availableProducts: "5000+ Products",
        items: ["Plane Design", "Short", "Vintage"],
        image:
          "https://www.perfectpanache.com/cdn/shop/products/DarkBlueOrganzaTopwithBrocadeLehenga-3_1024x1024@2x.png?v=1610371118",
      },
      {
        name: "Sarees",
        availableProducts: "2050+ Products",
        items: ["Paddu", "Pattern", "Hand-made"],
        image:
          "https://kasthuribaicompany.com/wp-content/uploads/2021/03/silk-saree.png",
      },
      {
        name: "Accessories",
        availableProducts: "2000+ Products",
        items: ["Make-up Sets", "Hand Bags", "Jewells"],
        image:
          "https://parfumdrops.com/wp-content/uploads/2020/08/makeup-kit-products-png-png-all-makeup-products-png-1417_1063.png",
      },
    ],
  });
  return (
    <div className=" w-full pb-10">
      <div className=" w-full mx-auto px-5 sm:px-0 sm:w-11/12 py-16 sm:flex items-center gap-16">
        <MenuForPeople menuData={menuData} />
        <MenuForCollection menuData={menuData} />
      </div>
    </div>
  );
}
