import React, { useEffect } from "react";
import RelatedProduct from "./RelatedProduct";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import detailsProducts from "../../Redux/actions/productDetailAction";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.details.detailsProducts);
  useEffect(() => {
    dispatch(detailsProducts(productId));
  }, []);
  return (
    <section className="container">
      <div className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center font-semibold">
                  Category: Water
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s cursor-pointer text-3xl">
                  <Link to="#" className="text-green-700">
                    <AiFillFacebook />
                  </Link>
                  <Link to="#" className="text-green-700">
                    <AiFillTwitterSquare />
                  </Link>
                  <Link to="#" className="text-green-700">
                    <AiFillLinkedin />
                  </Link>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex ml-6 items-center"></div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct />
    </section>
  );
};

export default ProductDetail;
