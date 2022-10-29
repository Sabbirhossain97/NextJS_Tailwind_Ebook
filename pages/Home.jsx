import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="bg-zinc-700 h-16 shadow-sm lg:static lg:overflow-y-visible">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
              <div className="flex flex-shrink-0 items-center  ">
                <a href="#" className="text-white text-xl mt-[15px]">
                  <span className="text-gray-300">Bangla</span>
                  <span className="text-cyan-300 ml-[5px]">ebook</span>
                </a>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  {/* <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
              </div>
              <input id="search" name="search" class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Search" type="search"/>
            </div>  */}
                </div>
              </div>
            </div>
            <div className="flex items-center h-full justify-center  md:absolute md:inset-y-0 md:right-0 lg:hidden">
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
