import React from "react";
import LogomarkWhite from "../assets/logo/LogomarkWhite.svg";
import Githubİcon from "../assets/icons/social/Github.svg";
import İnstagramİcon from "../assets/icons/social/Instagram.svg";
import Youtubeİcon from "../assets/icons/social/Youtube.svg";
import Masterİcon from "../assets/icons/colored/Mastercard.svg";
import Amexİcon from "../assets/icons/colored/Amex.svg";
import Visaİcon from "../assets/icons/colored/Visa.svg";

const Footer = () => {
  return (
    <footer className="w-full">
     <section className="w-full py-10 px-20 flex justify-between">
     <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <img src={LogomarkWhite} alt="logo" className="" />
          <h4 className="text-neutral-900 font-bold text-xl  ">Ecommerce</h4>
        </div>
        <p className="text-sm max-w-[250px] text-neutral-400">
          DevCut is a YouTube channel for practical project-based learning.
        </p>
        <div className=" flex gap-5">
          <img src={Githubİcon} />
          <img src={İnstagramİcon} />
          <img src={Youtubeİcon} />
        </div>
      </div>
      <div className="flex   gap-24">
        <ul>
            <li><a href="#" className="text-neutral-400 text-sm ">SUPPORT</a></li>
            <ul className="mt-6 space-y-3">
            <li><a href="#" className=" text-sm">FAQ</a></li>
            <li><a href="#"  className=" text-sm">Terms of use</a></li>
            <li><a href="#"  className=" text-sm">Privacy Policy</a></li>
            </ul>
        </ul>
        <ul>
            <li ><a href="#" className="text-neutral-400 text-sm ">COMPANY</a></li>
            <ul  className="mt-6 space-y-3">
            <li><a href="#"  className=" text-sm">About us</a></li>
            <li><a href="#"  className=" text-sm">Contact</a></li>
            <li><a href="#"  className=" text-sm">Careers</a></li>
            </ul>
        </ul>
        <ul>
            <li><a href="#" className="text-neutral-400 text-sm ">SHOP</a></li>
            <ul  className="mt-6 space-y-3">
            <li><a href="#"  className=" text-sm">My Account</a></li>
            <li><a href="#"  className=" text-sm">Checkout</a></li>
            <li><a href="#"  className=" text-sm">Cart</a></li>
            </ul>
        </ul>
      </div>
      <div className="space-y-6">
        <h4 className="text-neutral-400">ACCEPTED PAYMENTS</h4>
        <div className=" flex gap-5">
          <img src={Masterİcon} />
          <img src={Amexİcon} />
          <img src={Visaİcon} />
        </div>
      </div>
     </section>
      <h4 className="text-neutral-500 text-sm text-center pt-5 pb-8">© 2023 DevCut. All rights reserved.</h4>
    </footer>
  );
};

export default Footer;
