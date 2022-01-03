import React, { useEffect, useState } from "react";

const Featured = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/isti2623/fake-data/main/categories.json?fbclid=IwAR3NZDDqcrBkMU3p5dlDlnuqW-ZWO4rKAymxDbNaKzXC_H6bZ5rMcmwM7z0"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <>
      <div className="container my-14">
        <div className="text-center">
          <h2 className="section-title">
            Featured Categories
          </h2>
          <p className="section-disc">
            Choose your necessary products from this feature categories.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-3 mt-10">
          {categories.map((cate) => (
            <div className="group" key={cate.id}>
              <div className="cate-item">
                <span className="w-10 mr-3">
                  <img src={cate.img} alt="categories" />
                </span>
                <h4 className="text-paragraph text-sm">{cate.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
