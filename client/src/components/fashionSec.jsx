import React from 'react'
import CategoryImage from "../assets/images/CategoryImage.svg";
import ArrowRight from "../assets/icons/global/ArrowRight.svg";

const FashionSec = () => {
  return (
    <div className='bg-fasionbg flex   justify-between items-center  px-28  bg-neutral-100 '>
         <div className="flex flex-col gap-4 py-14">
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
        <img src={CategoryImage} alt="" />
    </div>
  )
}

export default FashionSec