import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../Images/footer-logo.svg";
import paymentLogo from "../../Images/payment-logo.png";
const footerItems = [
  {
    id: 1,
    title: "Company",
    link1: "About Us",
    link2: "Latest News",
    link3: "Latest Discount",
    link4: "careers",
    link5: "contact us",
  },
  {
    id: 2,
    title: "Top Category",
    link1: "Fish & Meat",
    link2: "Soft Drinks",
    link3: "Baby Care",
    link4: "Beauty & Health",
    link5: "Fruits & Vegetable",
  },
  {
    id: 4,
    title: "My Account",
    link1: "Dashboard",
    link2: "My Orders",
    link3: "Recent Orders",
    link4: "Updated Profile",
    link5: "Change Password",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="md:w-2/5 w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
              <img className="w-32" src={footerLogo} alt="footer logo" />
            </a>
            <p className="mt-2 text-paragraph leading-7 font-openSans text-md">
              There are many popular products you will find our shop, Choose
              your daily necessary product from our KachaBazar shop and get some
              special offer.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center md:w-3/5 w-full">
            {footerItems.map((item) => (
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="font-openSans font-semibold text-gray-900 text-lg mb-3">
                  {item.title}
                </h2>
                <nav className="list-none mb-10 space-y-2 text-sm font-semibold font-openSans">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-green-600">
                      {item.link1}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-green-600">
                      {item.link2}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-green-600">
                      {item.link3}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-green-600">
                      {item.link4}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-green-600">
                      {item.link5}
                    </Link>
                  </li>
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left font-openSans font-semibold">
              Copyright 2022
              <a
                href="https://www.linkedin.com/in/mdalaminamin/"
                className="text-green-600 ml-1"
                target="_blank"
              >
                @Team Work.
              </a>
              &nbsp; All rights reserved.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <div className="">
                <img src={paymentLogo} alt="payment logo" />
              </div>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
