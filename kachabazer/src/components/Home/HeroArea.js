import React from "react";
const HeroArea = () => {
  return (
    <div className="container max-w-screen-2xl">
      <div className="flex w-full my-5">
        <div className="md:w-3/5 w-full bg-heroBg bg-no-repeat bg-cover h-96 rounded-lg flex items-center">
          <div className="grid grid-cols-3 px-8">
            <div className="col-span-3 md:col-span-2">
              <h1 className="text-lg md:text-3xl font-inter font-bold mb-1">
                The Best Quality Products Guaranteed!
              </h1>
              <p className="text-gray-600 text-sm md:text-md leading-6 mb-6 font-openSans">
                Intrinsicly fashion performance based products rather than
                accurate benefits...
              </p>
              <a
                href="/shop"
                className="bg-green-600 text-white font-xl px-4 py-2 rounded-md transition-all duration-200 hover:bg-green-700"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/5 hidden md:block rounded-lg ml-5">
          <div className="grid grid-col h-96 gap-4 overflow-hidden">
            <div className="hero-bg bg-freshBg"></div>
            <div className="hero-bg bg-tastBg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
