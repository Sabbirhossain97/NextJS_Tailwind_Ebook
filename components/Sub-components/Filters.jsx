import React from "react";
import { useState, useEffect, useRef } from "react";
import { supabase } from "../../api";

export default function Filters({ getBooks }) {
  const [active, setActive] = useState(null);
  const [categories, setCategories] = useState([]);
  const [totalAuthors, setTotalAuthors] = useState([]);
  const [singleAuthor, setSingleAuthor]=useState(null)
  const [dropDownCategories, setDropDownCategories] = useState(false);
  const [dropDownAuthor, setDropDownAuthor] = useState(false);
  const categoryOpener = useRef();

  const getCategoryNames = async (id) => {
    if (id) {
      let { data, error } = await supabase
        .from("categories")
        .select("name")
        .match({ id: id });
      if (error) {
        console.log(error);
      } else {
        setActive(data);
      }
    } else {
      let { data, error } = await supabase.from("categories").select("*");
      if (error) {
        console.log(error);
      } else {
        setCategories(data);
      }
    }
  };

  const getAuthorsNames = async (id) => {
    let { data, error } = await supabase.from("authors").select("*");
    if (error) {
      console.log(error);
    } else {
      setTotalAuthors(data);
    }
  };

  const getSingleAuthorName = async (id) => {
    let { data, error } = await supabase
      .from("authors")
      .select("name")
      .match({ id: id });
    if (error) {
      console.log(error);
    } else {
      setSingleAuthor(data);
    }
  };
  const get_books_by_category = async (id) => {
    let { data, error } = await supabase
      .from("books_duplicate")
      .select(`*,categories(id,name)`)
      .match({ category_id: id });

    if (error) {
      console.error(error);
    } else {
      getBooks(data);
      console.log(data)
    }
  };

  useEffect(() => {
    getCategoryNames();
  }, []);

  useEffect(() => {
    getAuthorsNames();
  }, []);

  useEffect(() => {
    const closeCategoryBar = (e) => {
      if (
        categoryOpener.current &&
        !categoryOpener.current.contains(e.target)
      ) {
        setDropDownCategories(false);
        setDropDownAuthor(false);
      }
    };
    document.body.addEventListener("click", closeCategoryBar);
    return () => {
      document.body.removeEventListener("click", closeCategoryBar);
    };
  }, [categoryOpener, setDropDownCategories]);

  return (
    <div>
      <div className="flex flex-row justify-end">
        {/* Authors for small screen /start*/}
        <div className="lg:hidden flex pt-8 justify-end mr-4">
          <div className="inline-flex rounded-sm shadow-lg">
            <p className="shadow-sm shadow-black h-10 relative inline-flex items-center rounded-l-md border border-zinc-800 bg-zinc-700 px-4 py-2 text-sm font-bold text-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              {singleAuthor ? singleAuthor[0].name : "Authors"}
            </p>
            <div className="relative -ml-px block">
              <button
                type="button"
                className="shadow-sm shadow-black h-10 relative inline-flex items-center rounded-r-md border border-zinc-800 bg-zinc-700 px-2 py-2 text-sm font-bold text-gray-500 hover:bg-zinc-700/50 focus:z-10  focus:outline-none  "
              >
                {dropDownAuthor ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    color="white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                    ref={categoryOpener}
                    onClick={() => setDropDownAuthor(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    color="white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                    onClick={() => setDropDownAuthor(true)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </button>

              {dropDownAuthor ? (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={`${
                    dropDownAuthor ? "w-56" : "w-0"
                  } transition-all ease-linear absolute right-0 z-10 mt-2 -mr-1 duration-300 origin-top-right rounded-md bg-zinc-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  {totalAuthors.map((val, key) => (
                    <div className="py-1" role="none" key={key}>
                      <p
                        onClick={() => {
                          getBooks(val.id);
                          getSingleAuthorName(val.id);
                        }}
                        className="font-normal cursor-pointer text-white hover:bg-zinc-800/20 hover:text-teal-500 block px-4 py-2 text-sm"
                      >
                        {val.name}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* Authors for small screen /end*/}

        {/* categories */}
        <div className="flex pt-8 justify-end">
          <div className="inline-flex rounded-sm shadow-sm">
            <p className="shadow-sm shadow-black h-10 relative inline-flex items-center rounded-l-md border border-zinc-800 bg-zinc-700 px-4 py-2 text-sm font-bold text-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              {active ? active[0].name : "Categories"}
            </p>
            <div className="relative -ml-px block">
              <button
                type="button"
                className="shadow-sm shadow-black h-10 relative inline-flex items-center rounded-r-md border border-zinc-800 bg-zinc-700 px-2 py-2 text-sm font-bold text-gray-500 hover:bg-zinc-700/50 focus:z-10  focus:outline-none  "
              >
                {dropDownCategories ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    color="white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                    ref={categoryOpener}
                    onClick={() => setDropDownCategories(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    color="white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                    onClick={() => setDropDownCategories(true)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </button>

              {dropDownCategories ? (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={`${
                    dropDownCategories
                      ? "w-56  "
                      : "w-0 "
                  } transition-all ease-in-out absolute right-0 z-10 mt-2 -mr-1 duration-300 origin-top-right rounded-md bg-zinc-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  {categories.map((val, key) => (
                    <div className="py-1" key={key}>
                      <p
                        onClick={() => {
                          get_books_by_category(val.id);
                          getCategoryNames(val.id);
                        }}
                        className="font-normal cursor-pointer text-white hover:bg-zinc-800/20 hover:text-teal-500 block px-4 py-2 text-sm"
                      >
                        {val.name}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* categories filter /end */}
      </div>
    </div>
  );
}
