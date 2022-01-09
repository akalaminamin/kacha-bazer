import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import featuredAction from "../../../Redux/actions/featuredAction";
import { Link } from "react-router-dom";
const Featured = () => {
  const dispatch = useDispatch();
  const { featureds, loading } = useSelector((state) => state.featured);
  console.log(featureds);
  useEffect(() => {
    dispatch(featuredAction());
  }, []);
  return (
    <>
      <div className="container my-14">
        <div className="text-center">
          <h2 className="section-title">Featured Categories</h2>
          <p className="section-disc">
            Choose your necessary products from this feature categories.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-3 mt-10">
          {loading
            ? "loading..."
            : featureds.map((featured) => (
                <Link to="/shop" key={featured.id}>
                  <div className="cate-item">
                    <span className="w-10 mr-3">
                      <img src={featured.img} alt="categories" />
                    </span>
                    <h4 className="text-paragraph text-sm">{featured.name}</h4>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
