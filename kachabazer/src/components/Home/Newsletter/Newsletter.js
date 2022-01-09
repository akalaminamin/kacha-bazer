import React from "react";
import playstore from "../../../Images/play-store.svg";
import appstore from "../../../Images/app-store.svg";
import fruits from "../../../Images/fruits.png";
const Newsletter = () => {
  return (
    <div className="bg-indigo-50 bg-repeat bg-center overflow-hidden mt-14">
      <div className="container px-4 sm:px-10 flex flex-col md:flex-row lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-2/5 md:w-3/6 py-10 lg:py-0">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-inter mb-3">
            Get Your Daily Needs From Our KachaBazar Store
          </h3>
          <p className="text-base opacity-90 leading-7 font-openSans">
            There are many products you will find our shop, Choose your daily
            necessary product from our KachaBazar shop and get some special
            offer.
          </p>
          <div className="flex mt-5 space-x-3">
            <img src={playstore} alt="playstore" />
            <img src={appstore} alt="appstore" />
          </div>
        </div>
        <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
          <img src={fruits} alt="fruits" />
        </div>
      </div>
    </div>
  );
};


export default Newsletter;
