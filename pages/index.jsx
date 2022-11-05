import { useState, useEffect } from "react";
import { supabase } from "../api";
import Link from "next/link";
import Home from "./Home";
import Pagination from "../components/pagination";
import Authors from "../components/Authors";

export default function Index() {
  const [booksInfo, setBooksInfo] = useState([]);
  
 // const [toggleCategories, setToggleCategories] = useState(false);
  const [dropdown, setDropDown]=useState(false)
  
  const [categories, setCategories] = useState([]);
  const [booksFromCategory, setBooksFromCategory] = useState([]);
  //const [searchQuery, setSearchQuery] = useState("");
  

  const getBooks = async (id) => {
    
    if (typeof id === "number") {
      let { data, error } = await supabase
        .from("books_duplicate")
        .select(`*,categories(name)`)
        .eq("author_id", id);
      if (error) {
        console.log(error);
      } else {
        setBooksInfo(data);
      }
    } 
    else if(typeof id === "object"){
     
      console.log(id)
      setBooksInfo(id)
      
    } 
    else {
      let { data, error } = await supabase
        .from("books_duplicate")
        .select(`*,categories(name)`)
        .range(0, 19);
      if (error) {
        console.log(error);
      } else {
       
        setBooksInfo(data);
      }
    }
  }
  

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
      
      getBooks(data)
      //console.log(data)
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    getCategoryNames();
  }, []);

  return (
    <div>
      <Home />
      <div className="bg-zinc-800 ">
        <main className=" bg-zinc-800 mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8  ">
          {/*main container */}

          <div className="flex pt-8 justify-end">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                Categories
              </button>
              <div className="relative -ml-px block">
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  id="option-menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open options</span>
                  {dropdown ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => setDropDown(false)}
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
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => setDropDown(true)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </button>

                {dropdown ? (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 z-10 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="option-menu-button"
                    tabIndex="-1"
                  >
                    {categories.map((val, key) => (
                      <div className="py-1" role="none" key={key}>
                        <p
                          onClick={() => {
                            get_books_by_category(val.id);
                          }}
                          className="cursor-pointer text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
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

          <section className="bg-zinc-800 pt-6 pb-24 w-full h-full">
            <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-10 ">
              {/*books container /start */}
              <Authors getBooks={getBooks} />
              <div className="lg:col-span-8 ">
                <div className="h-84 rounded-lg  lg:h-full">
                  <div className="flex justify-center"></div>
                  <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-6 ">
                    {/* {toggleCategories
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
                      : // : searchQuery 
                        // ? booksInfo
                        //     .filter((val) => { 
                        //       if (searchQuery === "") {
                        //         return val;
                        //       } else if (
                        //         val.title
                        //           .toLowerCase()
                        //           .includes(searchQuery.toLowerCase())
                        //       ) {
                        //         return val;
                        //       }
                        //     })
                        //     .map((item) => (
                        //       <li key={item.id} className="relative">
                        //         <Link
                        //           href={{
                        //             pathname: "/Details",
                        //             query: {
                        //               id: item.id,
                        //               category_name: item.categories.name,
                        //               category_id: item.category_id,
                        //             },
                        //           }}
                        //         >
                        //           <div className="scale-95 transition hover:scale-100  group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        //             <img
                        //               src={item.image}
                        //               alt=""
                        //               className=" object-cover group-hover:opacity-75"
                        //             />
                        //           </div>
                        //         </Link>
                        //         <p className="mt-2 block truncate text-sm font-medium px-2 text-gray-900">
                        //           {item.title}
                        //         </p>
                        //       </li>
                            //     )) */}
                    {booksInfo.map((item) => (
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
                        <li className="cursor-pointer scale-95 transition hover:scale-100 rounded-lg bg-zinc-900 py-2 px-1 text-center">
                          <div className=" space-y-6 xl:space-y-4">
                            <img
                              className="object-contain mx-auto   px-2 rounded-md py-1"
                              src={item.image}
                              alt=""
                            />
                            <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                              <div className="space-y-1 text-lg text-center font-medium leading-6">
                                <h3 className="text-sm text-white text-center">
                                  {item.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
              {/*books container /end */}
            </div>
          </section>
          {/* <Pagination /> */}
        </main>
      </div>
    </div>
  );
}
