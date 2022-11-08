import React from 'react'
import { useState, useEffect } from "react";
import { supabase } from '../api';

export default function Authors({getBooks}) {
  const [authors, setAuthors] = useState([]);
  const [authorCount, setAuthorCount] = useState(8);
  const [totalAuthors,setTotalAuthors]= useState(null)
  const fetchMoreAuthorByClick = (e) => {
    e.preventDefault();
    setAuthorCount((prevState) => prevState + 3);
  };
  const getAuthorsNames = async (e) => {
    let { data,count, error } = await supabase
      .from("authors")
      .select("*",{count: 'exact'})
      .range(0, authorCount);
    if (error) {
      console.log(error);
    } else {
      setTotalAuthors(count)
      setAuthors(data);
    }
  };
  useEffect(() => {
    getAuthorsNames();
  }, [authorCount]);
  return (
      
      <div className=" hidden lg:col-span-2 lg:block ">
        <h3 className="-my-3 flow-root">
          <p className="flex w-full items-center justify-between bg-zinc-800 py-3 text-sm text-gray-400 hover:text-gray-500">
            <span className=" font-bold text-3xl text-gray-200">Authors</span>
            <span className="inline-flex rounded-lg items-center mt-1 bg-gray-100 px-3 py-1 text-xs font-medium text-zinc-500">
              {totalAuthors}
            </span>
            <span className="ml-6 flex items-center"></span>
          </p>
        </h3>
        <div className="pt-6" id="filter-section-0">
          <div className="space-y-4">
            {authors.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  getBooks(item.id);
                }}
                className="list-none cursor-pointer "
              >
                <div className="hover:bg-zinc-900 flex flex-row items-center ">
                  <img
                    className="relative inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src={item.image}
                    alt=""
                  />
                  <p className="cursor-pointer ml-3 text- font-bold py-4 text-gray-200">
                    {item.name}
                  </p>
                </div>
              </li>
            ))}

            <div className="flex flex-row">
              <button
                onClick={(e) => fetchMoreAuthorByClick(e)}
                className="text-gray-200 hover:text-gray-400"
              >
                See more
              </button>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="gray"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 mt-[5px] ml-[3px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      
    
  );
}
