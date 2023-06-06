import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ({ cartItemsCount, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = () => {
    if (searchQuery.trim().length) {
      onSearch(searchQuery.trim());
    }
    setSearchQuery("");
  };

  return (
    <div>
      <div className="flex justify-between items-center h-20 bg-blue-600 text-white px-16">
        <div className="pl-20">
          <Link to={"/"}>
            <h1 className="text-3xl font-extrabold italic">E-Commerce</h1>
          </Link>
        </div>
        <div className="flex space-x-5 ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Products..."
            className="px-4 py-2 rounded-full text-black"
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-full bg-white text-gray-400"
          >
            Search
          </button>
        </div>
        <div className="relative text-4xl pt-5 pr-3">
          <Link to={"/cart"}>
            <AiOutlineShoppingCart />

            <p className="text-base absolute top-0 right-0 z-10 px-3 rounded-full bg-red-600 w-auto text-white py-1">
              {cartItemsCount > 0 && cartItemsCount < 10
                ? cartItemsCount
                : cartItemsCount > 9
                ? `${9}+`
                : 0}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
