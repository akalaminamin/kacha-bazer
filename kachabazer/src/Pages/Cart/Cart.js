import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="container my-5 space-y-3">
      <div className="grid grid-cols-6 space-x-3">
        <div className="col-span-4 h-32 justify-center mt-3 space-y-3">
          <div className="flex justify-between border-2 border-gray-300 p-3">
            <div className="flex justify-between items-center">
              <img
                src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=48&q=75"
                className="mr-5 w-24"
                alt="card item"
              />
              <div className="flex flex-col font-openSans font-semibold text-gray-900">
                <h1 className="text-2xl uppercase">Title</h1>
                <h4 className="text-green-700 text-md">$46.00</h4>
                <span className="text-md">Size: M</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-5 font-openSans font-semibold">
              <div className="border-2 flex p-1 items-center justify-center space-x-3 px-2">
                <span className="mr-3 cursor-pointer text-xl font-bold">-</span>
                4<span className="cursor-pointer text-xl font-bold">+</span>
              </div>
              <h2 className="font-openSans font-semibold">Total $44.00</h2>
              <span className="text-xl text-red-700 cursor-pointer">
                <AiFillDelete />
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2 border-2 border-gray-200 p-4">
          <h2 className="text-gray-800 font-inter font-bold text-xl mb-2">
            Order Summary
          </h2>
          <div className="flex flex-col space-y-3 font-openSans font-semibold">
            <div className="flex justify-between">
              <span>SubTotal</span>
              <span>$300</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200">
              <span>Tax</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-gray-800 font-inter font-bold text-xl">
              <span>Total</span>
              <span>$320</span>
            </div>
            <div className="flex justify-between border-2 border-gray-200 pl-2 font-semibold">
              <input
                type="text"
                className="outline-none"
                placeholder="apply coupon"
              />
              <button className="bg-green-600 text-white font-xl px-4 py-2 rounded-md transition-all duration-200 hover:bg-green-700">
                Apply
              </button>
            </div>
            <Link
              to="/checkout"
              className="bg-green-600 text-white font-xl px-4 py-2 rounded-md transition-all duration-200 hover:bg-green-700 uppercase"
            >
              Proccess to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
