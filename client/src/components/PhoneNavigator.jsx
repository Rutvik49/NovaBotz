import React from "react";
import { NavLink } from "react-router-dom";

function PhoneNavigator() {
  return (
    <div className="sm:hidden sticky  z-50 bottom-0 shadow-2xl shadow-mainBlue">
      <nav className="bg-white w-dvw">
        <div className="w-screen flex flex-row justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-bottomWhite rounded-full w-1/6 flex flex-col py-4 my-1 m-auto"
                  : "bg-white w-1/6 flex flex-col py-4 m-auto my-1"
              }`
            }
          >
            <img src="images/home.svg" alt="" className="w-7 m-auto" />
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-bottomWhite rounded-full w-1/6 flex flex-col py-4 my-1 m-auto"
                  : "bg-white w-1/6 flex flex-col py-4 my-1 m-auto"
              }`
            }
          >
            <img src="images/product.svg" alt="" className="w-7 m-auto" />
          </NavLink>
          <NavLink
            to="blogs"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-bottomWhite rounded-full w-1/6 flex flex-col py-4 my-1 m-auto"
                  : "bg-white w-1/6 flex flex-col py-4 m-auto my-1"
              }`
            }
          >
            <img src="images/blog.svg" alt="" className="w-7 m-auto" />
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-bottomWhite rounded-full w-1/6 flex flex-col py-4 my-1 m-auto"
                  : "bg-white w-1/6 flex flex-col py-4 my-1 m-auto"
              }`
            }
          >
            <img src="images/profile.svg" alt="" className="w-7 m-auto" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default PhoneNavigator;
