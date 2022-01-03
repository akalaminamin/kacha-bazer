import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import { FiMenu } from "react-icons/fi";
const NavBar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="sticky top-0 z-50">
      <TopNavbar />
      <div className="text-xl pl-4 py-3 bg-white md:hidden block">
        <span onClick={() => setShow(!show)}>
          <FiMenu />
        </span>
      </div>
      <header
        class={`text-gray-600 body-font ${
          !show ? "hidden" : ""
        } bg-white border-b h-44 md:h-12 px-3 md:flex items-start !pl-0 md:items-center transition-all origin-left duration-300 ease-in`}
      >
        <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-start md:items-center">
          <nav class="md:mr-auto flex flex-wrap text-base justify-start cursor-pointer flex-col md:flex-row space-y-4 md:space-y-0">
            <a class="nav-link mt-3 md:mt-0" onClick={() => setShow(!show)}>Categories</a>
            <a class="nav-link" onClick={() => setShow(!show)}>About Us</a>
            <a class="nav-link" onClick={() => setShow(!show)}>Contact Us</a>
            <a class="nav-link" onClick={() => setShow(!show)}>Shop</a>
          </nav>
          <a class="offet-btn">
            Offers
          </a>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
