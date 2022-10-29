import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../api";

export default function First() {

  const [searchQuery, setSearchQuery] = useState("");

  const getAuthors = async (e) => {
    e.preventDefault()
    let { data, error } = await supabase
      .from("authors")
      .select()
      .textSearch("name", searchQuery);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  const submitQuery=(e)=>{
    e.preventDefault();
   console.log(searchQuery)
  }

  // useEffect(() => {
  //   getAuthors();
  // }, []);
  return (
    <div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <form onSubmit={(e) => getAuthors(e)}>
          <input
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
