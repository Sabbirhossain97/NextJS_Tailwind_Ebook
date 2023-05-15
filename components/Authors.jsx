import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import Loading from "./Sub-components/Loading";

export default function Authors({ getBooks }) {
  const [authors, setAuthors] = useState([]);
  const [authorCount, setAuthorCount] = useState(4);
  const [totalAuthors, setTotalAuthors] = useState(null);
  const [activeAuthorId, setActiveAuthorId] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const fetchLessAuthorByClick = (e) => {
    e.preventDefault();
    setAuthorCount((prevState) => prevState - 3);
  };
  const getAuthorsNames = async (e) => {
    try {
      setLoading(true);
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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAuthorsNames();
  }, [authorCount]);

  return (
    <div className=" mt-4 hidden lg:col-span-3 w-10/12 mx-auto lg:block ">
      <h3 className="-my-3 flow-root">
        <p className="flex w-full items-center justify-between bg-zinc-800 py-3 text-sm text-gray-400 hover:text-gray-500">
          <span className=" ml-5 font-normal text-2xl text-gray-200">
            Authors
          </span>
          <span className=" inline-flex rounded-md items-center mt-1 bg-gray-500/50 px-3 py-1 text-xs font-medium text-gray-100">
            {totalAuthors}
          </span>
          <span className="mr-12 flex items-center"></span>
        </p>
      </h3>
      <div className="pt-6">
        {loading ? (
          <Loading />
        ) : (
          <div className="space-y-2">
            {authors.map((item, key) => (
              <li
                key={key}
                onClick={() => {
                  getBooks(item.id);
                  getActiveAuthor(item.id);
                }}
                className="list-none cursor-pointer transition "
              >
                <div
                  className={` flex flex-row items-center pl-4 py-2 hover:bg-zinc-900/50 rounded-md ${
                    item.id == activeAuthorId
                      ? " bg-zinc-900/50 rounded-md py-2"
                      : ""
                  } `}
                >
                  <img
                    className="relative inline-block h-10 w-10 rounded-full ring-2 ring-teal-500"
                    src={item.image}
                    alt="error"
                  />
                  <p className="cursor-pointer ml-3 text-sm font-bold py-4 text-gray-200">
                    {item.name}
                  </p>
                </div>
              </li>
            ))}

            {authorCount + 1 === totalAuthors ? (
              <div className=" flex flex-row w-full">
                <button
                  onClick={(e) => fetchLessAuthorByClick(e)}
                  className="text-sm w-full mt-4 px-1 font-semibold py-2 rounded-md text-md text-teal-500 hover:text-teal-400 bg-zinc-700 hover:bg-zinc-600/70"
                >
                  Show less
                </button>
              </div>
            ) : (
              <div className="w-full flex flex-row">
                <button
                  onClick={(e) => fetchMoreAuthorByClick(e)}
                  className="text-sm w-full mt-4 px-1 font-semibold py-2 rounded-md text-md text-teal-500 hover:text-teal-400 bg-zinc-700 hover:bg-zinc-600/70"
                >
                  Show more
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
