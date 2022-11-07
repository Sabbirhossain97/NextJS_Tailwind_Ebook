import React from 'react'


export default function Pagination({ currentPage,  itemsPerPage,totalLength, setCurrentPage }) {
  let array = [];
  for (let i = 1; i <= Math.ceil(totalLength/itemsPerPage); i++) {
    array.push(i);
  }


  return (
    <div>
      <nav className="bg-zinc-800  w-full mx-auto h-24 flex items-center justify-center  px-2 sm:px-0">
        <div className=" md:-mt-px md:flex">
          {array.map((page, key) => (
            <li key={key} className="list-none px-2 py-2">
              <button
                className={
                  page === currentPage ? "border-b border-teal-500" : ""
                }
              >
                <p
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                  className="cursor-pointer bg-zinc-500 bg-transparent border-zinc-800 hover: inline-flex items-center px-3 py-3 text-sm font-medium text-gray-100 hover:text-gray-200"
                >
                  {page}
                </p>
              </button>
            </li>
          ))}
        </div>
      </nav>
    </div>
  );
}
