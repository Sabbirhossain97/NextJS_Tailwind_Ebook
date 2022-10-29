import React from 'react'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-zinc-700 h-16 shadow-sm lg:static lg:overflow-y-visible">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div className="flex inset-y-0 left-0 lg:static xl:col-span-2">
              <div className="flex flex-shrink-0 items-center  ">
                <Link href="/">
                  <a className="text-white text-xl mt-[15px]">
                    <span className="text-gray-300">Bangla</span>
                    <span className="text-cyan-300 ml-[5px]">ebook</span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex items-center h-full justify-center inset-y-0 md:right-0 lg:hidden">
              <button
                type="button"
                className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="block h-6 w-6 mt-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
