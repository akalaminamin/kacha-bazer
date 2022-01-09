import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiAddBoxFill } from "react-icons/ri";
import { useParams, Link } from "react-router-dom";
const ShopProduct = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/isti2623/fake-data/main/product.json?fbclid=IwAR1bQgoOVMs8mObh-IL_PGaReSX-JEf9B1i02IL8uivthYwFaIF2lZ2emg4"
      )
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 relative">
        {products.map((product) => (
          <div key={product.id} className="shadow p-2  bg-white rounded-sm">
            <div className="overflow-hidden">
              <Link to={`/shop/${product.id}`}>
              <img
                className="cursor-pointer transition-all ease-in duration-200 hover:scale-110"
                src={product.img}
                alt="product"
              />
              </Link>
            </div>
            <span className="offet-btn absolute top-3 left-3 rounded-2xl text-xs">
              {product.stack ? product.stack : "stack Out"}
            </span>
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
    </>
  );
};

export default ShopProduct;
