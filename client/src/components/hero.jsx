import React from "react";
import Heroİmg from "../assets/images/HeroImage.svg";
import ArrowRight from "../assets/icons/global/ArrowRight.svg";

const Hero = () => {
  return (
    <>
      <section className="w-full flex   justify-between items-center px-28  bg-neutral-100 pt-14 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-neutral-900 font-bold text-3xl  tracking-wide">
            Fresh Arrivals Online
          </h1>
          <p className="text-neutral-600 text-sm">
            Discover Our Newest Collection Today.
          </p>
          <button className=" mt-5 flex w-[170px] gap-2 bg-neutral-900 px-3 py-2 text-sm rounded-sm text-neutral-100  ">
            View Collection
            <img src={ArrowRight} className="w-5"  />
          </button>
        </div>
        <img className="h-[350px] " src={Heroİmg} alt="Heroİmg" />
      </section>
    </>
  );
};

export default Hero;
