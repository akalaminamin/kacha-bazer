import React from "react";
import TopNavbar from "./TopNavbar";

const NavBar = () => {
  return (
    <>
    <TopNavbar />
      <header class="text-gray-600 body-font bg-white border-b h-12 px-3 flex items-center">
        <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <nav class="md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
            <a class="nav-link">Categories</a>
            <a class="nav-link">About Us</a>
            <a class="nav-link">Contact Us</a>
            <a class="nav-link">Shop</a>
          </nav>
          <a class="text-red-600 bg-red-100 text-sm font-medium px-3 py-1 rounded-sm cursor-pointer">
            Offers 
          </a>
        </div>
      </header>
    </>
  );
};

export default NavBar;
