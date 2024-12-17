import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import FeatureCard from "../components/featureCard";
import BestSelling from "../components/bestSelling";
import FashionSec from "../components/fashionSec";
const HomePages = () => {
  return (
   <>
    <Header/>
    <Hero/>
    <FeatureCard/>
    <BestSelling/>
    <FashionSec/>
    </>
  );
};

export default HomePages;
