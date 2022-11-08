import React from "react";
import { useState, useEffect, useRef } from "react";
import { supabase } from "../api";
import Link from "next/link";

export default function Search() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [filteredBooks, setFilteredBooks]= useState([])
  const searchBarOpener = useRef();

  const getBooksBySearch = async (e) => {
    let { data, error } = await supabase
      .from("books_duplicate")
      .select("*,authors(name),categories(name)");
    if (error) {
      console.log(error);
    } else {
      setSearchedBooks(data);
      
    }
  };
  useEffect(() => {
    getBooksBySearch();
  }, []);

  useEffect(() => {
    const closeSearchBar = (e) => {
      if (e.path[0] !== searchBarOpener.current) {
        setToggleSearch(false);
        setSearchQuery("")
      }
    };
    document.body.addEventListener("click", closeSearchBar);
    return () => {
      document.body.removeEventListener("click", closeSearchBar);
    };
  }, []);

  //  const handleKeyPress = (event) => {
  //   if (event.key === "Control" && event.key==="k") {
  //     setToggleSearch(true);
  //   }
  //    console.log(`Key pressed: ${event.key}`);
  //  }

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyPress);
  // }, []);

  return (
    <div>
      <button
        type="button"
        ref={searchBarOpener}
        onClick={() => {
          setToggleSearch(true);
        }}
        className="mt-[15px] w-64 inline-flex items-center  border border-transparent bg-zinc-600 px-3 py-2 rounded-md text-lg font-medium leading-4 text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        Search{" "}
        {/* <span className="ml-3 mr-2 px-1 text-[.8rem]  border ">CTRL</span>
        <span className="  mr-2 px-1 text-[.8rem]  border  ">K</span> */}
      </button>

      {toggleSearch ? (
        <div className={`relative z-10 `} role="dialog" aria-modal="true">
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity  
            backdrop-blur-sm
          `}
          ></div>

          <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"></div>

            <div className=" fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 mx-auto max-w-xl transform  overflow-hidden rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
              >
                <div className="relative flex ">
                  <svg
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
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
                  <input
                    type="text"
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-100 placeholder-gray-400 focus:ring-1 sm:text-sm"
                    placeholder="Search..."
                    role="combobox"
                    aria-expanded="false"
                    aria-controls="options"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <ul className="bg-zinc-900 max-h-96 overflow-y-auto ">
                  {searchQuery
                    ? searchedBooks
                        .filter((val) => {
                          if (searchQuery === "") {
                            return val;
                          } else if (
                            val.title
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase()) ||
                            val.authors.name
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase())
                          ) {
                           
                             return val;                         
                          }
                        })
                        .map((item, key) => (
                          <Link
                            key={key}
                            href={{
                              pathname: "/Details",
                              query: {
                                id: item.id,
                                category_name: item.categories.name,
                                category_id: item.category_id,
                              },
                            }}
                          >
                            <li
                              className="cursor-pointer group flex hover:bg-zinc-800 select-none rounded-xl p-3"
                              id="option-1"
                              role="option"
                              tabIndex="-1"
                            >
                              <div className="flex h-24 w-20 flex-none items-center justify-center rounded-lg bg-zinc-900">
                                <img
                                  className="object-contain mx-auto  px-2 rounded-md py-1"
                                  src={item.image}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4 flex-auto">
                                <p className="text-sm font-medium text-gray-100">
                                  {item.title}
                                </p>
                                <p className="text-sm text-gray-100">
                                  {item.authors.name}
                                </p>
                              </div>
                            </li>
                          </Link>
                        ))
                    : ""}

                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
