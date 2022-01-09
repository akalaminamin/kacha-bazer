import React, { useEffect } from "react";
import { RiAddBoxFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import discountAction from "../../../Redux/actions/discountAction";
const DiscountedProduct = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const { discountProducts, loading } = useSelector((state) => state.discount);
  useEffect(() => {
    dispatch(discountAction());
  }, []);
  return (
    <div className="bg-gray-50 py-14">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Latest Discounted Products</h2>
          <p className="section-disc">
            See Our latest discounted products below. Choose your daily <br />
            needs from here and get a special discount with free shipping.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
          {loading
            ? "loading..."
            : discountProducts.map((discountProduct) => (
                <div
                  key={discountProduct.id}
                  className="shadow p-2 relative bg-white rounded-sm"
                >
                  <span className="bg-orange-500 px-2 py-1 text-white text-xs absolute top-3 right-3 z-30 rounded-sm font-openSans">
                    {discountProduct.price} % off
                  </span>
                  <div className="overflow-hidden">
                    <Link to={`/shop/${discountProduct.id}`}>
                    <img
                      className="cursor-pointer transition-all ease-in duration-200 hover:scale-110 "
                      src={discountProduct.img}
                      alt="product"
                    />
                    </Link>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">
                    each
                  </span>
                  <h2 className="text-paragraph font-medium text-sm font-openSans">
                    {discountProduct.name}
                  </h2>
                  <div className="flex items-center justify-between font-openSans my-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold font-inter text-xl">{`$${discountProduct.price}`}</h3>
                      <span className="font-inter text-gray-400 text-sm">
                        <del>$19.00</del>
                      </span>
                    </div>
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

export default DiscountedProduct;
