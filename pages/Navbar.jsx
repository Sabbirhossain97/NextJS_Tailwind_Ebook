import React from 'react'
import Link from "next/link";
import Search from '../components/search';

export default function Navbar() {
  return (
    <div>
      <div className="h-full w-full bg-zinc-700  lg:static lg:overflow-y-visible ">
        <div className="h-16 bg-zinc-700/95  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" flex flex-row justify-between ">
            <Link href="/" className="cursor-pointer">
              <a className="text-white text-xl ml-[10px] mt-[15px] flex">
                <img src="book.svg" className='h-6 w-6 mt-0.5 mr-2'/>
                <span className="text-gray-300">Bangla</span>
                <span className="text-teal-500 ml-[5px]">ebook</span>
              </a>
            </Link>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
