import React from "react";

const Subscribe = () => {
  return (
    <section className=" w-full bg-neutral-100 px-28 flex justify-between items-center py-10">
      <div className="flex flex-col gap-4 py-14">
        <h1 className="text-neutral-900 font-bold text-3xl  tracking-wide">
        Join Our Newsletter

        </h1>
        <p className="text-neutral-600 text-sm">
        We love to surprise our subscribers with occasional gifts.
        </p>
      </div>
      <div className=" space-x-3">
        <input type="text" placeholder="Your email addres"  className="px-3 py-2 outline-none text-neutral-400 rounded-md w-[320px]"/>
        <button type="submit" className="px-4 py-2 bg-slate-900 text-neutral-100 rounded-lg w-[116px]"> Subscribe</button>
      </div>
    </section>
  );
};

export default Subscribe;
