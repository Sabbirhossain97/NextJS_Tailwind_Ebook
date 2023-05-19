import React from "react";
import Link from "next/link";
import Search from "./SearchBar";

export default function Navbar() {
  return (
    <div>
      <div className=" w-full bg-zinc-900 fixed z-50 h-20 lg:overflow-y-visible top-0 ">
        <div className=" flex flex-row justify-around ">
          <Link href="/" className="cursor-pointer">
            <a className="text-white text-md md:text-xl ml-[10px] mt-[24px] flex">
              <img
                src="book.svg"
                className="h-5 w-5 md:h-6 md:w-6 mt-0.5 mr-2"
              />
              <span className="text-gray-300 font-semibold">Bangla</span>
              <span className="text-teal-500 ml-[5px] font-semibold">
                ebook
              </span>
            </a>
          </Link>
          <Search />
        </div>
      </div>
    </div>
  );
}
