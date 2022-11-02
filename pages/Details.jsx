import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../api";
import Link from "next/link";
import Home from "./Home";
import Slider from "./Slider";

export default function Third() {

  const router = useRouter();
  const pathName= router.pathname
  const query = router.query;
  const bookId = query.id;
  //console.log(bookId)
  const categoryName = query.category_name;
  const categoryId= query.category_id
  const [booksInfo, setBooksInfo] = useState([]);
  const [relatedBooks, setRelatedBooks] = useState([]);

  const showBookDetails = async (e) => {
    let { data, error } = await supabase
      .from("books_duplicate")
      .select(`*,authors(name)`)
      .match({ id: bookId });

    if (error) {
      console.log(error);
    } else {
      setBooksInfo(data);
      //console.log(data);
    }
  };
  const getRelatedBooks = async (e) => {
    let { data, error } = await supabase
      .from("books_duplicate")
      .select(`*,authors(name)`)
      .match({ category_id: categoryId });

    if (error) {
      console.log(error);
    } else {
      setRelatedBooks(data);
      //console.log(data);
    }
  };
  useEffect(() => {
    showBookDetails();
  }, [bookId]);
  useEffect(() => {
    getRelatedBooks();
  }, []);

  return (
    <div>
      <Home pathname={pathName} />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {booksInfo.map((item, key) => (
            <li key={key} className="list-none">
              <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:ml-[300px] xl:gap-x-8">
                <div className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                    <img
                      src={item.image}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="mt-4  flex items-center justify-between text-base font-semibold text-gray-700">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="flex flex-row">
                    <p className="mt-4 text-2xl p-0 text-gray-500 ">
                      Written by
                      <span className=" ml-[10px] text-blue-500 text-2xl hover:text-blue-700">
                        <Link
                          href={{
                            pathname: "/AuthorDetails",
                            query: {
                              id: item.author_id,
                              name: item.authors.name,
                            },
                          }}
                        >
                          {item.authors.name}
                        </Link>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="absolute text-white hover:text-blue-500 top-0 mx-auto mt-[230px] ml-[283px]  w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>
                  <p className="italic after:mt-4 text-2xl p-0 text-gray-500 mt-[10px] ">
                    Category: {categoryName}
                  </p>
                  <div className=" mt-3 border-b"></div>
                  <div>
                    <a
                      href={`https://sabbirontheweb.com` + `${item.link}`}
                      download
                    >
                      <button className="ml-auto mt-3 flex rounded border-0 bg-blue-500 py-2 px-3 text-white hover:bg-blue-600 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="white"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="animate-bounce inline w-5 h-5 mr-[5px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                        Download
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
        <Slider relatedBooks={relatedBooks} category_name={categoryName} />
      </div>
    </div>
  );
}
