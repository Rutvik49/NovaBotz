import React from "react";
import { NavLink } from "react-router-dom";

function PhoneNavigator() {
  return (
    <div className="sm:hidden shadow sticky  z-50 bottom-0 ">
      <nav className="bg-bottomWhite ">
        <div className="w-screen flex flex-row justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-lightBlue rounded-full w-1/5 flex flex-col py-2 m-auto"
                  : "bg-bottomWhite w-1/5 flex flex-col py-2 m-auto"
              }`
            }
          >
            <img src="images/home.svg" alt="" className="w-10 m-auto" />
            <span className="m-auto text-mainBlue">Home</span>
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-lightBlue rounded-full w-1/5 flex flex-col py-2 m-auto"
                  : "bg-bottomWhite w-1/5 flex flex-col py-2 m-auto"
              }`
            }
          >
            <img src="images/product.svg" alt="" className="w-10 m-auto" />
            <span className="m-auto text-mainBlue">Products</span>
          </NavLink>
          <NavLink
            to="blogs"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-lightBlue rounded-full w-1/5 flex flex-col py-2 m-auto"
                  : "bg-bottomWhite w-1/5 flex flex-col py-2 m-auto"
              }`
            }
          >
            <img src="images/blog.svg" alt="" className="w-10 m-auto" />
            <span className="m-auto text-mainBlue">Blogs</span>
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-lightBlue rounded-full w-1/5 flex flex-col py-2 m-auto"
                  : "bg-bottomWhite w-1/5 flex flex-col py-2 m-auto"
              }`
            }
          >
            <img src="images/profile.svg" alt="" className="w-10 m-auto" />
            <span className="m-auto text-mainBlue">Profile</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default PhoneNavigator;
