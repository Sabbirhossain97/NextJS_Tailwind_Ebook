import React, { useState } from 'react'
import Link from "next/link";

export default function Home({ setShowSideBar }) {
  return (
    <div>
      <div className="bg-zinc-700 h-20 shadow-sm lg:static lg:overflow-y-visible">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div className="flex inset-y-0 left-0 lg:static xl:col-span-2">
              <div className="flex flex-shrink-0 items-center mt-[20px] ">
                <button
                  onClick={() => setShowSideBar(true)}
                  className="lg:hidden"
                >
                  <svg
                    className=" h-8 w-8 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    color="white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
                <Link href="/" className="cursor-pointer">
                  <a className="text-white text-2xl ml-[10px] ">
                    <span className="text-gray-300">Bangla</span>
                    <span className="text-cyan-300 ml-[5px]">ebook</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
