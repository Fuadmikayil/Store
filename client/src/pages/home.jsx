import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import FeatureCard from "../components/featureCard";
import BestSelling from "../components/bestSelling";
import FashionSec from "../components/fashionSec";
import FeaturedCard2 from "../components/FeaturedCard2";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
const HomePages = () => {
  return (
   <>
    <Header/>
    <Hero/>
    <FeatureCard/>
    <BestSelling/>
    <FashionSec/>
    <FeaturedCard2/>
    <Subscribe/>
    <Footer/>
    </>
  );
};

export default HomePages;
