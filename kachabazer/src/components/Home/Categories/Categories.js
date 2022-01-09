import React from "react";
import { Link } from "react-router-dom";

const categoriesItems = [
  {
    id: 1,
    subtitle: "Taste of",
    title: "Fresh & Natural",
    offer: "Weekend discount offer",
    bg: "bg-cateBg1",
  },
  {
    id: 1,
    subtitle: "Taste of",
    title: "Fish & Meat",
    offer: "Weekend discount offer",
    bg: "bg-cateBg2",
  },
  {
    id: 1,
    subtitle: "Taste of",
    title: "Bread & Bakery",
    offer: "Weekend discount offer",
    bg: "bg-cateBg3",
  },
];
const Categories = () => {
  return (
    <div className="bg-gray-50">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categoriesItems.map((item) => (
            <div
              key={item.id}
              className={`${item.bg} cursor-pointer bg-no-repeat bg-cover py-5 px-10 rounded-md shadow-md hover:shadow-xl`}
            >
              <h2 className="font-inter font-semibold text-lg">
                {item.subtitle}
                <span className="block font-bold text-2xl text-green-600">
                  {item.title}
                </span>
              </h2>
              <p className="font-openSans text-sm mb-5">{item.offer}</p>
              <Link to="/shop" className="shop-btn">
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
