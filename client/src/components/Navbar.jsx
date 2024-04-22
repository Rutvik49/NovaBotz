import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  return (
    <>
      <header className="shadow-lg sticky z-50 ">
        <nav className="flex sm:justify-center bg-mainBlue justify-between ">
          <NavLink to="/" className="sm:w-1/3">
            <img src="images/logo.svg" alt="logo" className="w-24 px-5 py-3" />
          </NavLink>
          <div className="hidden sm:w-1/2 sm:flex  sm:justify-between sm:items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-lightBlue px-3 underline" : "text-white px-3"
                } `
              }
            >
              Home
            </NavLink>
            <NavLink
              to="products"
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-lightBlue px-3 underline" : "text-white px-3"
                } `
              }
            >
              Products
            </NavLink>
            <NavLink
              to="blogs"
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-lightBlue px-3 underline" : "text-white px-3"
                } `
              }
            >
              Blogs
            </NavLink>
            <button
              type="button"
              className="text-btnText bg-lightBlue from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg  px-3 py-1 text-nowrap text-center"
            >
              Get Started
            </button>
          </div>
          <div className="sm:hidden flex  py-2 justify-between">
            <img src="images/cart.svg" alt="search" className="px-3 w-16" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
