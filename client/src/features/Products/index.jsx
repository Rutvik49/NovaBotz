import React from "react";
// import Lottie from "react-lottie";
// import animationData from "../lotties/soon.json";
import ItemCard from "../../components/ItemCard";

function Products() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="mt-2">
      <div>
        <form className="flex items-center w-80 sm:w-96 mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray text-mainBlue text-sm rounded-lg focus:outline-mainBlue focus:ring-mainBlue focus:border-lightBlue block w-full ps-3 p-2.5"
              placeholder="Search projects..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-3 ms-2 text-sm font-medium text-white bg-mainBlue rounded-lg hover:bg-lightBlue hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </form>
        <div className="flex flex-wrap justify-center items-center mb-5">
          {a.map((a) => (
            <div className="mx-2 w-40 sm:w-1/4" key={a}>
              <ItemCard />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mb-5">
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 text-sm font-bold text-mainBlue bg-white border rounded-lg hover:bg-lightBlue hover:text-black "
          >
            &lt; Previous
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-bold text-mainBlue bg-white border rounded-lg hover:bg-lightBlue hover:text-black"
          >
            Next &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Products;
