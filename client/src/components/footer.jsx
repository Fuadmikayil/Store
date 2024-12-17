import React from "react";
import LogomarkWhite from "../assets/logo/LogomarkWhite.svg";
import Githubİcon from "../assets/icons/social/Github.svg";
import İnstagramİcon from "../assets/icons/social/Instagram.svg";
import Youtubeİcon from "../assets/icons/social/Youtube.svg";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-20">
      <div className="flex flex-col gap-3">
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
      <div>
        <nav></nav>
      </div>
    </footer>
  );
};

export default Footer;
