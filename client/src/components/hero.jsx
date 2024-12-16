import React from "react";
import Heroİmg from "../assets/images/HeroImage.svg";
import Search from "../assets/icons/global/Search.svg";

const Hero = () => {
  return (
    <>
      <section className="w-full flex justify-between items-center px-28  bg-neutralBlack-100 h-screen">
        <div>
          <h1 className="text-neutralBlack-900 font-bold text-3xl  tracking-wide">Fresh Arrivals Online</h1>
          <p className="text-neutralBlack-600 text-sm">Discover Our Newest Collection Today.</p>
          <button className=" flex gap-2 bg-neutralBlack-900 px-3 py-2 text-sm rounded-sm text-neutralWhite-100">View Collection <img className="w-5" src={Search} alt="" /></button>
        </div>
        <img className="h-[350px]" src={Heroİmg} alt="Heroİmg" />
      </section>
    </>
  );
};

export default Hero;
