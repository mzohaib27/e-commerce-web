import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const item = (datas, addToCart) => {
  let data;
  const { image, title, id, price } = data;
  return (
    <div>
      <div className="card">
        <div className="grid">
          <div>
            <img src={image} alt="image" />
          </div>
          <div>
            <Link to={`/product/${id}`}>{title}</Link>
          </div>
          <div className="flex">
            <span>{price}</span>
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default item;
