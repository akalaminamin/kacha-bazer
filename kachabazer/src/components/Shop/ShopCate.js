import React, { useState, useEffect } from "react";
import ShopProduct from "./ShopProduct";
const ShopCate = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/isti2623/fake-data/main/categories.json?fbclid=IwAR3NZDDqcrBkMU3p5dlDlnuqW-ZWO4rKAymxDbNaKzXC_H6bZ5rMcmwM7z0"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="container py-10 lg:py-14">
      <div className="flex">
        <div className="flex-col w-80 mr-0 lg:mr-4 hidden md:flex">
          <h3 className="text-md font-inter font-medium text-gray-700 mb-3">
            Categories
          </h3>
          <ul className="bg-white px-4 py-4">
            {categories.map((cate) => (
              <div className="flex py-3">
                <img className="w-5 mr-2" src={cate.img} alt="category img" />
                <a
                  className="font-openSans text-sm font-medium hover:text-green-600 cursor-pointer"
                  role="button"
                >
                  {cate.name}
                </a>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex justify-between px-3 py-2 mb-3">
            <h3 className="font-inter text-sm">
              Total <span className="font-semibold">21</span> items Found
            </h3>
            <select
              name="filter"
              id=""
              className="outline-none font-inter text-sm font-medium"
            >
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
          <ShopProduct />
        </div>
      </div>
    </div>
  );
};

export default ShopCate;
