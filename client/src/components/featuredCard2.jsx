import React from "react";
import Pr1 from "../assets/images/cover.png";

const FeaturedCard2 = () => {
  return (
    <section className="">
      <div className="flex flex-col  items-center py-16  gap-5 ">
        <div className=" flex gap-2">
          <button className="text-xs border border-gray-400 font-bold tracking-wide text-neutral-900 px-2 py-1 rounded-xl">
          Featured
          </button>
          <button className="text-xs  text-neutral-900 px-2 py-1 tracking-wide rounded-xl">
          Latest
          </button>
        </div>
        <section className=" flex  justify-between w-[80%] gap-10  mt-6">
          <div className="flex flex-col gap-1 w-full">
            <div className="max-w-[274px]  max-h-[350px] bg-[#ECECEC] flex  justify-center items-start">
              <img src={Pr1} alt="" className="cover " />
            </div>
            <p className="text-neutral-900 text-sm">Classic Monochrome Tees</p>
            <div className=" space-x-2">
              <button className="text-xs border border-gray-400 text-neutral-900 px-2 py-1 rounded-xl">
                IN STOCK
              </button>
              <span className="text-neutral-600 text-sm">$35.00</span>
            </div>
          </div>
          <div className="flex flex-col gap-1  w-full">
            <div className="max-w-[274px] max-h-[350px] bg-[#ECECEC] flex  justify-center items-start">
              <img src={Pr1} alt="" className="cover " />
            </div>
            <p className="text-neutral-900 text-sm">Classic Monochrome Tees</p>
            <div className=" space-x-2">
              <button className="text-xs border border-gray-400 text-neutral-900 px-2 py-1 rounded-xl">
                IN STOCK
              </button>
              <span className="text-neutral-600 text-sm">$35.00</span>
            </div>
          </div>
          <div className="flex flex-col gap-1  w-full">
            <div className="max-w-[274px] max-h-[350px] bg-[#ECECEC] flex  justify-center items-start">
              <img src={Pr1} alt="" className="cover " />
            </div>
            <p className="text-neutral-900 text-sm">Classic Monochrome Tees</p>
            <div className=" space-x-2">
              <button className="text-xs border border-gray-400 text-neutral-900 px-2 py-1 rounded-xl">
                IN STOCK
              </button>
              <span className="text-neutral-600 text-sm">$35.00</span>
            </div>
          </div>
          <div className="flex flex-col gap-1  w-full">
            <div className="max-w-[274px] max-h-[350px] bg-[#ECECEC] flex  justify-center items-start">
              <img src={Pr1} alt="" className="cover " />
            </div>
            <p className="text-neutral-900 text-sm">Classic Monochrome Tees</p>
            <div className=" space-x-2">
              <button className="text-xs border border-gray-400 text-neutral-900 px-2 py-1 rounded-xl">
                IN STOCK
              </button>
              <span className="text-neutral-600 text-sm">$35.00</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FeaturedCard2;
