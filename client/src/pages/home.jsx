import React from "react";
import logo from "../assets/logo/Logomark.svg";
import Search from "../assets/icons/global/Search.svg";
const HomePages = () => {
  return (
    <div>
      <div className="w-full py-2 flex justify-center bg-neutral-900  items-center ">
        <p className="text-neutralWhite-900 text-sm ">
          Get 25% OFF on your first order.
        </p>
        <p className="text-neutralWhite-900 text-sm">Order Now</p>
      </div>
      <header className="pt-10 px-20 flex items-center gap-20 justify-between" >
        <div className="flex gap-2 items-center">
          <img src={logo} alt="" />
          <h4 className="text-neutralBlack-900 font-bold text-2xl  ">
            Ecommerce
          </h4>
        </div>
        <nav >
          <ul className="flex gap-5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact </a>
            </li>
          </ul>
        </nav>
        <div >
        <label for="Search" className="shadow-lg border   px-2 py-2
         rounded-lg flex  gap-1">
        <img src= {Search} className="text-emerald-500" alt="Search  " />
        <input id="Search"  type="text" placeholder="Search products" className="outline-none  " />
        </label>
        </div>
      </header>
    </div>
  );
};

export default HomePages;
