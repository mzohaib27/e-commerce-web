import { useState, useEffect } from "react";
import React from "react";
import FakeStoreapi from "../../Services/FakeStoreapi";
import item from "../../item/item";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryValue = queryParams.get("q");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (queryValue) {
      FakeStoreapi.fetchProductsBySearchQuery(queryValue).then((result) =>
        setProducts(result)
      );
    } else {
      FakeStoreapi.fetchAllProducts().then((result) => setProducts(result));
    }
  }, [queryValue]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          &#9733;
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="text-yellow-400">
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <>
      <div>products goes here</div>
      <div className="grid md:grid-cols-3 grid-col-1 gap-3">
        {products.map((product) => (
          <div
            className="bg-white rounded-lg shadow-md p-4 h-100"
            key={product?.id}
          >
            <img
              className="w-24 h-24 mx-auto"
              src={product.image}
              alt={product?.title}
            />
            <p className="font-bold mt-2">{product?.title}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-gray-700 mt-2">${product.price}</p>
            <div className="flex items-center justify-center mt-1">
              {renderStars(product.rating.rate)}
              <span className="text-gray-700 ml-1">
                ({product.rating.count})
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { Products };
