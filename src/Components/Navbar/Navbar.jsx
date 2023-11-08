import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigation = useNavigate("");

  const handleManScreenNav = () => {
    navigation("men");
  };
  const handleWomenScreenNav = () => {
    navigation("women");
  };
  const handleAcessoriesScreenNav = () => {
    navigation("accessories");
  };
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="/" className="text-2xl font-bold">
          E-Commerce Store
        </a>

        {/* Navigation Links */}
        <div className="space-x-4">
          <a
            style={{ cursor: "pointer" }}
            onClick={handleManScreenNav}
            className="hover:text-gray-300">
            Men
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={handleWomenScreenNav}
            className="hover:text-gray-300">
            Women
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={handleAcessoriesScreenNav}
            className="hover:text-gray-300">
            Accessories
          </a>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search products"
            className="pl-8 pr-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none"
          />
          <i className="absolute top-3 left-4 fas fa-search"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
