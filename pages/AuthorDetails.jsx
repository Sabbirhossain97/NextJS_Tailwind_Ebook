import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useRouter } from "next/router";
import { supabase } from "../api";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

export default function Second() {
  const router = useRouter();
  const query = router.query;
  const authorId = query.id;
  const [authorDetails, setAuthorDetails] = useState([]);
  const [booksFromAuthor, setBooksFromAuthor] = useState([]);

  const getAuthorInfo = async (e) => {
    let { data, error } = await supabase
      .from("authors")
      .select(`*,books_duplicate(*)`)
      .match({ id: authorId });
    if (error) {
      console.log(error);
    } else {
      setAuthorDetails(data);
      setBooksFromAuthor(data[0].books_duplicate);
     // console.log(authorDetails.name);
    }
  };
  useEffect(() => {
    getAuthorInfo();
  }, []);
  return (
    <div>
      <Home />
      <div className="flex h-full">
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        ></div>

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              {authorDetails.map((item, key) => (
                <li key={key} className="list-none">
                  <article>
                    <div>
                      <div className="h-32 w-full object-cover lg:h-48 bg-black flex flex-col">
                        <h1 className="text-zinc-300 text-4xl flex justify-center text-center items-center h-36  md:w-4/5 lg:text-center lg:w-full">
                          {item.description[Object.keys(item.description)[0]]}
                        </h1>
                      </div>
                      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                          <div className="flex">
                            <img
                              className="ring-4 ring-white w-32 h-32 rounded-full"
                              src={item.image}
                              alt=""
                            />
                          </div>
                          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                              <h1 className=" text-2xl font-bold text-gray-700">
                                {item.name}
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                          <h1 className="truncate text-2xl font-bold text-gray-900">
                            {item.name}
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 sm:mt-2 2xl:mt-5">
                      <div className="border-b border-gray-200">
                        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                          <nav
                            className="-mb-px flex space-x-8"
                            aria-label="Tabs"
                          >
                            <p className="border-pink-500 text-gray-900 text-lg whitespace-nowrap py-4 px-1 border-b-2 font-medium">
                              Information
                            </p>
                          </nav>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
                      <dl className="grid grid-cols-1 gap-x-2 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-lg font-medium text-gray-500">
                            {Object.keys(item.description)[1]}
                          </dt>
                          <dd className="mt-1 w-1/2 text-md text-gray-900">
                            {item.description[Object.keys(item.description)[1]]}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-lg  font-medium text-gray-500">
                            {Object.keys(item.description)[2]}
                          </dt>
                          <dd className="mt-1 w-1/2 text-md text-gray-900">
                            {item.description[Object.keys(item.description)[2]]}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-lg  font-medium text-gray-500">
                            {Object.keys(item.description)[3]}
                          </dt>
                          <dd className="mt-1 text-md text-gray-900">
                            {item.description[Object.keys(item.description)[3]]}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-lg font-medium text-gray-500">
                            {Object.keys(item.description)[4]}
                          </dt>
                          <dd className=" mt-1 text-md text-gray-900">
                            {item.description[Object.keys(item.description)[4]]}
                          </dd>
                        </div>

                        <div className="sm:col-span-2 lg:col-span-2">
                          <dt className="text-lg font-medium text-gray-500">
                            {Object.keys(item.description)[5]}
                          </dt>
                          <dd className="mt-1 space-y-5 text-md text-gray-900">
                            <p>
                              {
                                item.description[
                                  Object.keys(item.description)[5]
                                ]
                              }
                            </p>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  
                  </article>
                </li>
              ))}
              <div className="border-b w-1/4 absolute left-0 right-0 mx-auto mt-[55px]"></div>
              <div className="mt-[150px]">
                <div>
                  <h2 className="text-lg font-medium text-gray-500 flex justify-center">
                    More Books from
                    <span className="text-blue-600 text-xl ml-[10px]">
                      {" "}
                      {/* {authorDetails[0].name} */}
                    </span>
                  </h2>
                </div>
                <div className=" flex justify-center h-11/12 w-11/12 2xl:w-1/2 items-center mx-auto ">
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    style={{ padding: "47px" }}
                  >
                    <div className="">
                      <ul
                        role="list"
                        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
                      >
                        {booksFromAuthor.map((val, key) => (
                          <SwiperSlide>
                            <li key={key} className="relative">
                              <div className="group  block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img
                                  src={val.image}
                                  alt=""
                                  className="pointer-events-none object-cover group-hover:opacity-75"
                                />
                                <button
                                  type="button"
                                  className="absolute inset-0 focus:outline-none"
                                >
                                  <span className="sr-only">
                                    View details for IMG_4985.HEIC
                                  </span>
                                </button>
                              </div>
                            </li>
                          </SwiperSlide>
                        ))}
                      </ul>
                    </div>
                  </Swiper>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
