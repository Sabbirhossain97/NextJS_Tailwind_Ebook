import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../api";

export default function Authors({ getBooks }) {
  const [authors, setAuthors] = useState([]);
  const [authorCount, setAuthorCount] = useState(4);
  const [totalAuthors, setTotalAuthors] = useState(null);
  const [activeAuthorId, setActiveAuthorId] = useState([]);

  const getActiveAuthor = (id) => {
    let activeId = authors.filter((item) => {
      if (item.id == id) {
        return item.id;
      }
    });
    setActiveAuthorId(activeId[0].id);
  };
  const fetchMoreAuthorByClick = (e) => {
    e.preventDefault();
    setAuthorCount((prevState) => prevState + 3);
  };
  const getAuthorsNames = async (e) => {
    let { data, count, error } = await supabase
      .from("authors")
      .select("*", { count: "exact" })
      .range(0, authorCount);
    if (error) {
      console.log(error);
    } else {
      setTotalAuthors(count);
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
          <span className=" ml-5 font-bold text-3xl text-gray-200">
            Authors
          </span>
          <span className="ml-3 inline-flex rounded-lg items-center mt-1 bg-gray-100 px-3 py-1 text-xs font-medium text-zinc-500">
            {totalAuthors}
          </span>
          <span className="ml-6 flex items-center"></span>
        </p>
      </h3>
      <div className="pt-6" id="filter-section-0">
        <div className="space-y-2">
          {authors.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                getBooks(item.id);
                getActiveAuthor(item.id);
              }}
              className="list-none cursor-pointer "
            >
              <div
                className={` flex flex-row items-center pl-4 hover:border-l-4 hover:border-teal-500 ${
                  item.id == activeAuthorId ? "border-l-4 border-teal-500" : ""
                } `}
              >
                <img
                  className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src={item.image}
                  alt=""
                />
                <p className="cursor-pointer ml-3 text-sm font-bold py-4 text-gray-200">
                  {item.name}
                </p>
              </div>
            </li>
          ))}

          {authorCount + 1 === totalAuthors ? (
            ""
          ) : (
            <div className="ml-3 flex flex-row">
              <button
                onClick={(e) => fetchMoreAuthorByClick(e)}
                className="w-full mt-4 px-1  py-1 rounded-md text-md text-teal-500 hover:text-teal-400 bg-zinc-700 hover:bg-zinc-900"
              >
                See more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
