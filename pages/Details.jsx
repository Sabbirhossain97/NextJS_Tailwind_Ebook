import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../api";
import Link from "next/link";
import Home from "./Home";
import Slider from "./Slider";

export default function Third() {
  const router = useRouter();
  const query = router.query;
  const bookId = query.id;
  //console.log(bookId);
  const [booksInfo, setBooksInfo] = useState([]);

  const showBookDetails = async (e) => {
    let { data, error } = await supabase
      .from("books_duplicate")
      .select(`title,image,author_id,authors ("name")`)     
      .match({ id: bookId });
    if (error) {
      console.log(error);
    } else {
      setBooksInfo(data);
     console.log(data)
    }
  };
  useEffect(() => {
    showBookDetails();
  }, []);

  return (
    <div>
      <Home />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {booksInfo.map((item, key) => (
            <li key={key} className="list-none">
              {" "}
              <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:ml-[300px] xl:gap-x-8">
                <div className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                    <img
                      src={`https://sabbirontheweb.com` + `${item.image}`}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="mt-4  flex items-center justify-between text-base font-semibold text-gray-700">
                    <h3>{item.title}</h3>
                  </div>
                  <p className="mt-4 text-2xl p-0 text-gray-500 ">
                    Written by{" "}
                    <span className="ml-[5px] text-teal-400 text-2xl hover:text-teal-500">
                      <Link
                        href={{
                          pathname: "/AuthorDetails",
                          query: { id: item.author_id },
                        }}
                        className=""
                      >
                        {item.authors.name}
                      </Link>
                    </span>
                  </p>
                  <div className=" mt-3 border-b"></div>
                  <button className="ml-auto mt-3 flex rounded border-0 bg-indigo-500 py-2 px-6 text-white hover:bg-indigo-600 focus:outline-none">
                    {" "}
                    Download{" "}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </div>
        <Slider />
      </div>
    </div>
  );
}
