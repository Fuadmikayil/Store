import React from "react";
import Pr1 from "../assets/images/cover.png";

const BestSelling = () => {
  return (
    <section>
      <div className="flex flex-col  items-center py-16  gap-5">
        <div>
          <span className="text-neutral-300 text-sm">Shop Now</span>
          <h3 className="text-neutral-900 font-bold text-xl">Best Selling</h3>
        </div>
        <section className=" flex  justify-between gap-16">
          <div className="flex flex-col gap-1">
            <div className="w-[264px] h-[350px] bg-[#ECECEC] flex  justify-center items-start">
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
          <div className="flex flex-col gap-1">
            <div className="w-[264px] h-[350px] bg-[#ECECEC] flex  justify-center items-start">
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
          <div className="flex flex-col gap-1">
            <div className="w-[264px] h-[350px] bg-[#ECECEC] flex  justify-center items-start">
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
          <div className="flex flex-col gap-1">
            <div className="w-[264px] h-[350px] bg-[#ECECEC] flex  justify-center items-start">
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

export default BestSelling;
