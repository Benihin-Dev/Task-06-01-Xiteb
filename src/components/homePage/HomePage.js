import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../navBar/NavBar";
import OfferBanner from "../offerBanner/OfferBanner";
import Menu from "../menu/Menu";
import OfferSliderBanner from "../offerSliderBanner/OfferSliderBanner";
import SliderForProducts from "../slider/SliderForProducts";
import Footer from "../footer/Footer";
import LoadingAnimation from "../assets/LoadingAnimation";

export default function HomePage() {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);

  // just fetch 20 product details using fake api, but not use them for any development:(

  const getProductDetails = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        setProductData(response.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <div className=" w-full overflow-hidden customScrollBar">
      <NavBar />
      <OfferBanner />
      <Menu />
      <OfferSliderBanner />
      <SliderForProducts />
      <Footer />
      {loading && <LoadingAnimation />}
    </div>
  );
}
