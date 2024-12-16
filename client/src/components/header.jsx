import React from 'react'
import logo from "../assets/logo/Logomark.svg";
import Search from "../assets/icons/global/Search.svg";
import Vector from "../assets/icons/global/Vector.svg";
import User from "../assets/icons/global/User-1.svg";
const Header = () => {
  return (
    <>
      <div className="w-full py-2 flex justify-center bg-neutral-900  items-center ">
        <p className="text-neutralWhite-900 text-xs ">
          Get 25% OFF on your first order.
        </p>
        <p className="text-neutralWhite-900 text-xs">Order Now</p>
      </div>
      <header className="pt-10 px-20 flex items-center gap-20 justify-between">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="" />
          <h4 className="text-neutralBlack-900 font-bold text-xl  ">
            Ecommerce
          </h4>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li>
              <a className="text-sm text-neutralBlack-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-sm" href="#">
                Categories
              </a>
            </li>
            <li>
              <a className="text-sm" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-sm" href="#">
                Contact{" "}
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5">
          <label
            for="Search"
            className="shadow-lg border   px-2 py-[5px]
         rounded-lg flex  gap-1"
          >
            <img src={Search} className="text-emerald-500 w-4" alt="Search  " />
            <input
              id="Search"
              type="text"
              placeholder="Search products"
              className="outline-none  text-sm "
            />
          </label>
          <img className="cursor-pointer" src={Vector}/>
          <img className="cursor-pointer" src={User}/>
        </div>
      </header>
    </>
  )
}

export default Header