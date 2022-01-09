import React from "react";
import { MdOutlineLocalShipping, MdOutlinePayment } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BsGift } from "react-icons/bs";
import { Link } from "react-router-dom";
const HeroArea = () => {
  const supports = [
    {
      id: 1,
      title: "Free Shipping",
      subtitle: "From $20.00",
      icon: <MdOutlineLocalShipping />,
      bg: "bg-yellow-200",
    },
    {
      id: 1,
      title: "Support 24/7",
      subtitle: "At anytime",
      icon: <MdOutlineWifiCalling3 />,
      bg: "bg-blue-200",
    },
    {
      id: 1,
      title: "Secure Payment",
      subtitle: "Totally Safe",
      icon: <MdOutlinePayment />,
      bg: "bg-red-200",
    },
    {
      id: 1,
      title: "Latest Offer",
      subtitle: "Upto 20% Off",
      icon: <BsGift />,
      bg: "bg-green-200",
    },
  ];
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
              <Link
                to="/shop"
                className="bg-green-600 text-white font-xl px-4 py-2 rounded-md transition-all duration-200 hover:bg-green-700"
              >
                Shop Now
              </Link>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {supports.map((support) => (
          <div
            key={support.id}
            className={`${support.bg} p-5 rounded-md flex items-center`}
          >
            <div className="support-icon mr-4 text-red-600 text-2xl">
              {support.icon}
            </div>
            <div>
              <h3 className="text-base font-semibold leading-5 font-inter">
                {support.title}
              </h3>
              <p className="text-gray-600 text-sm font-openSans">
                {support.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroArea;
