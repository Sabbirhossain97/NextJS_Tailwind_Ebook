import React from 'react'
import { useState, useEffect } from "react";

export default function Search() {

  const [toggleSearch, setToggleSearch]= useState(false);

      // const [blur, setBlur] = useState(false);
      // useEffect(() => {
      //   if (blur) {
      //     document.body.classList.add("backdrop-blur-md");
      //   } else {
      //     document.body.classList.remove("backdrop-blur-none");
      //   }
      // }, [blur]);
      

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setToggleSearch(true);
          
        }}
        class="inline-flex items-center  border border-transparent bg-zinc-500 px-3 py-2 rounded-md text-lg font-medium leading-4 text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        Search <span class="ml-3 mr-2 px-1 text-[.8rem]  border ">CTRL</span>
        <span class="  mr-2 px-1 text-[.8rem]  border  ">K</span>
      </button>
      <div
        className={`relative z-10 ${toggleSearch ? "" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity  ${
            toggleSearch ? "backdrop-blur-sm" : ""
          }`}
        ></div>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <div className=" bg-zinc-800 mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl shadow-2xl transition-all">
            <div className="relative">
              <svg
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-100 focus:ring-0 sm:text-sm"
                placeholder="Search..."
              />
            </div>

           <div class="relative z-10" role="dialog" aria-modal="true">
 

  
    <div class="mx-auto  transform rounded-xl bg-zinc-800 p-2  ring-opacity-5 transition-all">

      <ul class="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-100" id="options" role="listbox">
        <li class="cursor-default select-none rounded-md px-4 py-2" id="option-1" role="option" tabindex="-1">Leslie Alexander</li>
        <li class="cursor-default select-none rounded-md px-4 py-2" id="option-2" role="option" tabindex="-1">Michael Foster</li>
        <li class="cursor-default select-none rounded-md px-4 py-2" id="option-3" role="option" tabindex="-1">Dries Vincent</li>
        <li class="cursor-default select-none rounded-md px-4 py-2" id="option-4" role="option" tabindex="-1">Lindsay Walton</li>
        <li class="cursor-default select-none rounded-md px-4 py-2" id="option-5" role="option" tabindex="-1">Courtney Henry</li>
      </ul>

      
    </div>
  
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
