import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiAddBoxFill } from "react-icons/ri";
const Popular = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/isti2623/fake-data/main/product.json?fbclid=IwAR1bQgoOVMs8mObh-IL_PGaReSX-JEf9B1i02IL8uivthYwFaIF2lZ2emg4"
      )
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div className="bg-gray-50 py-14">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Popular Products for Daily Shopping</h2>
          <p className="section-disc">
            See all our popular products in this week. You can choose your daily
            <br />
            needs products from this list and get some special offer with free
            <br />
            shipping.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10 relative">
          {products.map((product) => (
            <div key={product.id} className="shadow p-2  bg-white rounded-sm">
              <div className="overflow-hidden">
                <img className="cursor-pointer transition-all ease-in duration-200 hover:scale-110 " src={product.img} alt="product" />
              </div>

              <span className="offet-btn absolute top-3 left-3 rounded-2xl text-xs">{product.stack ? product.stack : "stack Out"}</span>
              <span className="text-xs text-gray-400 font-medium">each</span>
              <h2 className="text-paragraph font-medium text-sm font-openSans">
                {product.name}
              </h2>
              <div className="flex items-center justify-between font-openSans my-1">
                <h3 className="font-bold font-inter text-xl">{`$${product.price}`}</h3>
                <div className="add-icon">
                  <RiAddBoxFill />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
