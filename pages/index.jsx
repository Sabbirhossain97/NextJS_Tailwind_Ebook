import { useState, useEffect } from "react";
import { supabase } from "../api";
import Link from "next/link";
import Home from "./Home";
import pagination from "../components/pagination";
import Pagination from "../components/pagination";

export default function Index() {
  const [booksInfo, setBooksInfo] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [toggleCategories, setToggleCategories] = useState(false);
  const [authorCount, setAuthorCount] = useState(8);
  const [categories, setCategories] = useState([]);
  const [booksFromCategory, setBooksFromCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);

  const getBooks = async (id) => {
    if (id) {
      let { data, error } = await supabase
        .from("books_duplicate")
        .select(`*,categories(name)`)
        .eq("author_id", id);
      if (error) {
        console.log(error);
      } else {
        setBooksInfo(data);
      }
    } else {
      let { data, error } = await supabase
        .from("books_duplicate")
        .select(`*,categories(name)`)
        .range(0, 19);
      if (error) {
        console.log(error);
      } else {
        // console.log(data)
        setBooksInfo(data);
      }
    }
  };

  const fetchMoreAuthorByClick = (e) => {
    e.preventDefault();
    setAuthorCount((prevState) => prevState + 3);
  };

  const getAuthorsNames = async (e) => {
    let { data, error } = await supabase
      .from("authors")
      .select("*")
      .range(0, authorCount);
    if (error) {
      console.log(error);
    } else {
      setAuthors(data);
    }
  };

  const getCategoryNames = async (e) => {
    let { data, error } = await supabase.from("categories").select("*");
    if (error) {
      console.log(error);
    } else {
      setCategories(data);
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
      setBooksFromCategory(data);
      //console.log(data)
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    getAuthorsNames();
  }, [authorCount]);

  useEffect(() => {
    getCategoryNames();
  }, []);

  return (
    <div>
      <Home />
      <div className="bg-zinc-800 ">
        {/*for small screen /start */}
        <div className="relative z-40 lg:hidden">
          {showSideBar ? (
            <div className=" transition-opacity duration-500 ease-linear fixed inset-0 bg-opacity-100 backdrop-blur-sm "></div>
          ) : (
            ""
          )}
          <div
            className={`${
              showSideBar
                ? "fixed inset-0 z-40 w-1/2 transition-all duration-300 ease-in-out "
                : "fixed inset-0 z-40 w-0 transition-all duration-300 ease-in-out "
            } `}
          >
            <div className="relative flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setShowSideBar(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
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

              <form className="mt-4 border-t border-gray-200">
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      disabled
                    >
                      <span className="font-medium text-gray-900">Authors</span>
                      <span className="ml-6 flex items-center"></span>
                    </button>
                  </h3>
                  <div className="pt-6">
                    <div className="space-y-6">
                      {authors.map((item) => (
                        <li
                          key={item.id}
                          onClick={() => {
                            getBooks(item.id);
                            setToggleCategories(false);
                            setShowSideBar(false);
                          }}
                          className="list-none cursor-pointer hover:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <img
                              className="relative z-30 inline-block h-24 w-24 rounded-full ring-2 ring-white"
                              src={item.image}
                              alt=""
                            />
                            <p className="cursor-pointer ml-3 text-sm text-gray-600">
                              {item.name}
                            </p>
                          </div>
                        </li>
                      ))}
                      <div className="flex flex-row">
                        <button
                          onClick={(e) => fetchMoreAuthorByClick(e)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          See more
                        </button>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            color="blue"
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

                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                    >
                      <span className="font-medium text-gray-900">
                        Category
                      </span>
                      <span className="ml-6 flex items-center"></span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-mobile-1">
                    <div className="space-y-6">
                      {categories.map((item, key) => (
                        <li key={key} className="list-none">
                          <div className="flex items-center">
                            <input
                              name="category[]"
                              onChange={() => get_books_by_category(item.id)}
                              onClick={() => {
                                setToggleCategories(true);
                                setShowSideBar(false);
                              }}
                              value={item.id}
                              type="radio"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label className="ml-3 text-sm text-gray-600">
                              {item.name}
                            </label>
                          </div>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*for small screen /end */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          {/*main container */}

          <div className="flex pt-8 justify-end">
            <div class="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                Categories
              </button>
              <div class="relative -ml-px block">
                <button
                  type="button"
                  class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  id="option-menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open options</span>
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  class="absolute hidden right-0 z-10 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="option-menu-button"
                  tabIndex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="option-menu-item-0"
                    >
                      Save and schedule
                    </a>

                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="option-menu-item-1"
                    >
                      Save and publish
                    </a>

                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="option-menu-item-2"
                    >
                      Export PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="pt-6 pb-24 w-full">
            <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-10 ">
              <div className="hidden lg:col-span-2  lg:block">
                <div className=" ">
                  <h3 className="-my-3 flow-root">
                    <p className="flex w-full items-center justify-between bg-zinc-800 py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className=" font-bold text-3xl text-gray-200">
                        Authors
                      </span>
                      <span class="inline-flex rounded-full items-center  bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-800">
                        26
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
                            setToggleCategories(false);
                          }}
                          className=" list-none cursor-pointer "
                        >
                          <div className="flex flex-row items-center ">
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
                          className="text-blue-500 hover:text-blue-700"
                        >
                          See more
                        </button>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            color="blue"
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

                <div className="border-b hidden border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <p className="flex w-full items-center justify-between bg-zinc-800 py-3 text-sm text-gray-100 hover:text-gray-500">
                      <span className="font-medium text-gray-200">
                        Category
                      </span>
                      <span className="ml-6 flex items-center"></span>
                    </p>
                  </h3>

                  <div className="pt-6" id="filter-section-1">
                    <div className="space-y-4">
                      {categories.map((item, key) => (
                        <li key={key} className="list-none">
                          <div className="flex items-center">
                            <input
                              name="category[]"
                              onChange={() => get_books_by_category(item.id)}
                              onClick={() => setToggleCategories(true)}
                              value={item.id}
                              type="radio"
                              className="h-4 w-4 rounded  text-indigo-600 focus:ring-indigo-500"
                            />
                            <label className="ml-3 text-sm text-gray-200">
                              {item.name}
                            </label>
                          </div>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/*books container /start */}
              <div className="lg:col-span-8 ">
                <div className="h-84 rounded-lg  lg:h-full">
                  <div className="flex justify-center"></div>
                  <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-6 ">
                    {toggleCategories
                      ? booksFromCategory.map((item) => (
                          <li key={item.id} className="relative">
                            <Link
                              href={{
                                pathname: "/Details",
                                query: {
                                  id: item.id,
                                  category_name: item.categories.name,
                                  category_id: item.category_id,
                                },
                              }}
                            >
                              <div className="scale-95 transition hover:scale-100 aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img
                                  src={item.image}
                                  alt=""
                                  className=" object-cover w-full max-h-full group-hover:opacity-75"
                                  onClick={() => alert()}
                                />
                              </div>
                            </Link>

                            <Link
                              href={{
                                pathname: "/Details",
                                query: { id: item.id },
                              }}
                            >
                              <p className="mt-2 block cursor-pointer truncate text-sm font-medium text-gray-900">
                                {item.title}
                              </p>
                            </Link>
                          </li>
                        ))
                      : searchQuery
                      ? booksInfo
                          .filter((val) => {
                            if (searchQuery === "") {
                              return val;
                            } else if (
                              val.title
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase())
                            ) {
                              return val;
                            }
                          })
                          .map((item) => (
                            <li key={item.id} className="relative">
                              <Link
                                href={{
                                  pathname: "/Details",
                                  query: {
                                    id: item.id,
                                    category_name: item.categories.name,
                                    category_id: item.category_id,
                                  },
                                }}
                              >
                                <div className="scale-95 transition hover:scale-100  group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                  <img
                                    src={item.image}
                                    alt=""
                                    className=" object-cover group-hover:opacity-75"
                                  />
                                </div>
                              </Link>
                              <p className="mt-2 block truncate text-sm font-medium px-2 text-gray-900">
                                {item.title}
                              </p>
                            </li>
                          ))
                      : booksInfo.map((item) => (
                          <Link
                            href={{
                              pathname: "/Details",
                              query: {
                                id: item.id,
                                category_name: item.categories.name,
                                category_id: item.category_id,
                              },
                            }}
                          >
                            <li className="scale-95 transition hover:scale-100 rounded-lg bg-zinc-900 py-2 px-1 text-center">
                              <div className=" space-y-6 xl:space-y-4">
                                <img
                                  className="object-contain mx-auto   px-2 rounded-md py-1"
                                  src={item.image}
                                  alt=""
                                />
                                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                  <div className="space-y-1 text-lg text-center font-medium leading-6">
                                    <h3 className="text-white text-center">
                                      {item.title}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </Link>
                        ))}
                  </ul>
                  {/* <div class="bg-zinc-700">
                   <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                     <div class="space-y-12">
                       <ul
                         role="list"
                         class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
                       >
                         <li class="rounded-lg bg-zinc-900 py-10 px-6 text-center xl:px-10 xl:text-left">
                           <div class="space-y-6 xl:space-y-10">
                             <img
                               class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                               src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                               alt=""
                             />
                             <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                               <div class="space-y-1 text-lg font-medium leading-6">
                                 <h3 class="text-white">Leonard Krasner</h3>
                               </div>
                             </div>
                             <button
                               type="button"
                               class="focus:ring-offset- inline-flex items-center rounded-md border border-transparent bg-slate-50 px-6 py-3 text-sm font-medium text-zinc-500 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
                             >
                               Button text
                             </button>
                           </div>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div> */}
                </div>
              </div>
              {/*books container /end */}
            </div>
          </section>
          <Pagination />
        </main>
      </div>
    </div>
  );
}
