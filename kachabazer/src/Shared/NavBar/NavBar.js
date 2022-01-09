import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <TopNavbar />
      <div className="text-xl pl-4 py-3 bg-white md:hidden block">
        <span onClick={() => setShow(!show)}>
          <FiMenu />
        </span>
      </div>
      <header
        className={`text-gray-600 body-font ${
          !show ? "hidden" : ""
        } bg-white border-b h-44 md:h-12 px-3 md:flex items-start !pl-0 md:items-center transition-all origin-left duration-300 ease-in`}
      >
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-start md:items-center">
          <nav className="md:mr-auto flex flex-wrap text-base justify-start cursor-pointer flex-col md:flex-row space-y-4 md:space-y-0">
            <Link to="/shop" className="nav-link mt-3 md:mt-0" onClick={() => setShow(!show)}>Categories</Link>
            <Link to="/about" className="nav-link" onClick={() => setShow(!show)}>About Us</Link>
            <Link to="/contact" className="nav-link" onClick={() => setShow(!show)}>Contact Us</Link>
            <Link to="/shop" className="nav-link" onClick={() => setShow(!show)}>Shop</Link>
          </nav>
          <a className="offet-btn">
            Offers
          </a>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
