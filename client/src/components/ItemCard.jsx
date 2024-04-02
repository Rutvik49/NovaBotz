import React from "react";

function ItemCard() {
  return (
    <div className="bg-aliceBlue rounded-xl sm:w-7/8 my-2 sm:mx-auto">
      <a href="#" className="flex flex-col p-3 justify-center">
        <div className="m-auto">
          <img src="images/item_1.png" className="" alt="" />
        </div>
        <div className="p-1">
          <h2 className="font-medium text-mainBlue">Line Follower Bot</h2>
          <p className="text-sm text-mainBlue">with extra speed..!</p>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-mainBlue">$39</div>
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-mainBlue p-2 hover:bg-lightBlue hover:text-black">
              <span className="text-white hover:text-black text-3xl">+</span>
            </div>
          </div>
        </div>
      </a>
    </div>
    // <div className="">
    //   <article class="w-44 rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
    //     <a href="">
    //       <div class="relative flex items-end overflow-hidden rounded-xl">
    //         <img src="/images/item_1.png" className="" alt="Hotel Photo" />
    //         <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 class="h-5 w-5 text-yellow-400"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //               >
    //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //               </svg>
    //               <span class="text-slate-400 ml-1 text-sm">4.9</span>
    //             </div>
    //       </div>

    //       <div class="mt-1 p-2">
    //         <h2 class="text-slate-700">Line Follower bot</h2>
    //         <p class="text-slate-400 mt-1 text-sm">with extra speed..!</p>
    //         <div class="flex items-center justify-between ">
    //           <span class="text-2xl font-bold text-mainBlue">$39</span>
    //           <div class="w-12 flex items-center justify-center rounded-full bg-mainBlue p-2 hover:bg-lightBlue hover:text-black">
    //             <span className="text-white hover:text-black text-3xl">+</span>
    //           </div>
    //         </div>
    //       </div>
    //     </a>
    //   </article>
    // </div>
  );
}

export default ItemCard;
