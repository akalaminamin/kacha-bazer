import React from "react";
import logo from "../../Images/logo-light.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const TopNavbar = () => {
  return (
    <div className="bg-green-600">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} className="w-36 flex-none" alt="logo" />
          </Link>
          <div className="w-full max-w-3xl px-5 relative hidden md:block">
            <input
              type="text"
              placeholder="Search for product (e.g. fish, apple, oil)"
              className="search-input "
            />
            <span className="absolute text-xl top-4 right-8 cursor-pointer text-gray-400">
              <AiOutlineSearch />
            </span>
          </div>
          <div className="flex-none">
            <div className="icons cursor-pointer flex items-center justify-between">
              <span className="icon">
                <IoMdNotificationsOutline />
              </span>
              <span className="icon relative">
                <FiShoppingCart />
                <span className="bg-red-500 w-4 h-4 absolute rounded-full flex items-center justify-center text-xs p-1 top-0 right-0">
                  0
                </span>
              </span>
              <span className="icon">
                <Link to="/">
                  <RiAccountCircleLine />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
