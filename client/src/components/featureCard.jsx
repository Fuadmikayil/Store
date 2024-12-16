import React from "react";
import Delivery from "../assets/icons/global/Delivery.svg";
import ShieldCheck from "../assets/icons/global/shieldCheck.svg";
import SatarBadge from "../assets/icons/global/satarBadge.svg";

const FeatureCard = () => {
  return (
    <section className="flex justify-between py-20 px-20 gap-44">
      <div className="flex flex-col gap-2">
        <div className="w-10  h-10 flex justify-center items-center rounded-full bg-neutralWhite-100">
          <img src={Delivery} alt="" />
        </div>
        <h5 className="text-base font-bold tracking-wide">Free Shipping</h5>
        <p className="text-sm tracking-wide  text-neutralBlack-300">
          Upgrade your style today and get FREE shipping on all orders! Don't
          miss out.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-neutralWhite-100">
          <img src={ShieldCheck} alt="" />
        </div>
        <h5 className="text-base font-bold tracking-wide">Satisfaction Guarantee</h5>
        <p className="text-sm tracking-wide  text-neutralBlack-300">
        Shop confidently with our Satisfaction Guarantee: Love it or get a refund.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-neutralWhite-100">
          <img src={SatarBadge} alt="" />
        </div>
        <h5 className="text-base font-bold tracking-wide">Secure Payment</h5>
        <p className="text-sm tracking-wide  text-neutralBlack-300">
        Your security is our priority. Your payments are secure with us.
        </p>
      </div>
    </section>
  );
};

export default FeatureCard;
