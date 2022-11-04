import React from 'react'
import Link from "next/link";
import Search from '../components/search';

export default function Home() {
  return (
    <div>
      <div className="bg-zinc-700 py-6 shadow-sm lg:static lg:overflow-y-visible ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" flex justify-between ">
            <Link href="/" className="cursor-pointer">
              <a className="text-white text-2xl ml-[10px] ">
                <span className="text-gray-300">Bangla</span>
                <span className="text-cyan-300 ml-[5px]">ebook</span>
              </a>
            </Link>
            <Search  />
          </div>
        </div>
      </div>
    </div>
  );
}
