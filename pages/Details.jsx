import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../api";
import Link from "next/link";
import Home from "./Home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";


export default function Third() {
  const router = useRouter();
  const pathName = router.pathname;
  const query = router.query;
  const bookId = query.id;
  //const categoryName = query.category_name;
  const categoryId = query.category_id;
  const [booksInfo, setBooksInfo] = useState([]);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [toggleTabs, setToggleTabs]= useState(false);
  const [authorBooks, setAuthorBooks]= useState([])

  const showBookDetails = async (e) => {
    let { data, error } = await supabase
      .from("books_duplicate")
      .select(`*,authors(*)`)
      .match({ id: bookId });

    if (error) {
      console.log(error);
    } else {
      setBooksInfo(data);
      console.log(data)
    }
  };

  const getRelatedBooks = async (e) => {
    let { data, error } = await supabase
      .from("books_duplicate")
      .select(`*,categories(name)`)
      .match({ category_id: categoryId });

    if (error) {
      console.log(error);
    } else {
      setRelatedBooks(data);
      console.log(data)
    }
  };

  const getAuthorBooks = async (id) => {
    let { data, error } = await supabase
      .from("books_duplicate")
      .select(`*`)
      .match({ author_id: id });

    if (error) {
      console.log(error);
    } else {
      setAuthorBooks(data);
      //console.log(authorBooks);
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

      {/*new section here */}

      <main className=" h-screen mx-auto bg-zinc-800 ">
        <div className=" bg-zinc-800 ">
          {booksInfo.map((val, key) => (
            <div key={key}>
              <div className="h-52 w-full lg:h-52 bg-zinc-900 flex flex-col ">
                <h1 className="text-zinc-300 text-4xl flex justify-center text-center items-center h-36  md:w-4/5 lg:text-center lg:w-full">
                  {
                    val.authors.description[
                      Object.keys(val.authors.description)[0]
                    ]
                  }
                </h1>
              </div>
              <div>
                <div className="-mt-12 mx-auto max-w-7xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                  <div className="flex items-center space-x-5">
                    <div className="flex-shrink-0">
                      <div className="relative px-4">
                        <img
                          className="h-52 w-44 rounded-md "
                          src={val.image}
                          alt=""
                        />
                        <span className="absolute inset-0 rounded-full shadow-inner"></span>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-200">
                        {val.title}
                      </h1>
                      <p className="text-2xl font-medium text-gray-500 mt-2">
                        Written By
                        <a href="#" className="ml-[5px] text-teal-500">
                          {val.authors.name}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" mx-auto mt-8 h-screen grid  grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
                  <div className="  space-y-6 lg:col-span-2 lg:col-start-1">
                    <section aria-labelledby="applicant-information-title">
                      <div className="bg-zinc-800 shadow sm:rounded-lg">
                        <div className="mt-6 sm:mt-2 2xl:mt-5">
                          <div className="border-b border-zinc-600">
                            <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
                              <nav className="-mb-1 flex ">
                                <p
                                  onClick={() => {setToggleTabs(false);}}
                                  className="cursor-pointer border-teal-500 text-gray-100 text-xl whitespace-nowrap py-4 px-1 border-b-2  font-medium"
                                >
                                  Information
                                </p>
                                <p
                                  onClick={() => {
                                    setToggleTabs(true);
                                    getAuthorBooks(val.authors.id);
                                  }}
                                  className="cursor-pointer ml-[50px] border-teal-500 text-gray-100 text-xl whitespace-nowrap py-4 px-1 border-b  font-medium"
                                >
                                  More Books
                                </p>
                              </nav>
                            </div>
                          </div>
                        </div>
                        {toggleTabs ? (
                          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-6 ">
                            {authorBooks.map((val, key) => (
                              <li className="list-none scale-95 transition hover:scale-100 rounded-lg bg-zinc-900 py-2 px-1 text-center">
                                <div className=" space-y-6 xl:space-y-4">
                                  <img
                                    className="object-contain mx-auto   px-2 rounded-md py-1"
                                    src={val.image}
                                    alt=""
                                  />
                                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div className="space-y-1 text-lg text-center font-medium leading-6">
                                      <h3 className="text-white text-center">
                                        {val.title}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div>
                            <div className="font-sans border-t border-zinc-600 px-4 py-5 sm:px-6">
                              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                  <dt className="text-xl font-medium text-gray-100">
                                    {Object.keys(val.authors.description)[1]}
                                  </dt>
                                  <dd className="mt-1 text-lg text-gray-400">
                                    {
                                      val.authors.description[
                                        Object.keys(val.authors.description)[1]
                                      ]
                                    }
                                  </dd>
                                </div>
                                <div className="sm:col-span-1">
                                  <dt className="text-xl font-medium text-gray-100">
                                    {Object.keys(val.authors.description)[2]}
                                  </dt>
                                  <dd className="mt-1 text-lg text-gray-400">
                                    {
                                      val.authors.description[
                                        Object.keys(val.authors.description)[2]
                                      ]
                                    }
                                  </dd>
                                </div>
                                <div className="sm:col-span-1">
                                  <dt className="text-xl font-medium text-gray-100">
                                    {Object.keys(val.authors.description)[3]}
                                  </dt>
                                  <dd className="mt-1 text-lg text-gray-400">
                                    {
                                      val.authors.description[
                                        Object.keys(val.authors.description)[3]
                                      ]
                                    }
                                  </dd>
                                </div>
                                <div className="sm:col-span-1">
                                  <dt className="text-xl font-medium text-gray-100">
                                    {Object.keys(val.authors.description)[4]}
                                  </dt>
                                  <dd className="mt-1 text-lg font-medium text-gray-400">
                                    {
                                      val.authors.description[
                                        Object.keys(val.authors.description)[4]
                                      ]
                                    }
                                  </dd>
                                </div>
                                <div className="sm:col-span-2">
                                  <dt className="text-xl font-medium text-gray-100">
                                    {Object.keys(val.authors.description)[5]}
                                  </dt>
                                  <dd className="mt-1 text-lg font-medium text-gray-400">
                                    {
                                      val.authors.description[
                                        Object.keys(val.authors.description)[5]
                                      ]
                                    }
                                  </dd>
                                </div>
                              </dl>
                            </div>
                            <div>
                              <div className="mt-[20px]">
                                <a
                                  href="#"
                                  className="block bg-zinc-700 px-4 py-4 rounded-md text-center text-lg font-medium text-teal-500 hover:text-teal-600 sm:rounded-b-lg"
                                  download={val.link}
                                >
                                  Download Book
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </section>

                    {toggleTabs ? (
                    ''
                    ) : (
                      <section>
                        <div className="bg-zinc-800 shadow sm:overflow-hidden sm:rounded-lg">
                          <div className="divide-y divide-zinc-600">
                            <div className="px-4 py-5 sm:px-6">
                              <h2
                                id="notes-title"
                                className="text-2xl font-medium text-gray-100"
                              >
                                Related Books
                              </h2>
                            </div>
                            <div className="">
                              <Swiper
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={50}
                                slidesPerView={4}
                                navigation
                                pagination={{ clickable: true }}
                                style={{ padding: "50px" }}
                              >
                                <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
                                  {relatedBooks.map((val, key) => (
                                    <SwiperSlide>
                                      <li key={key} className="relative">
                                        <Link
                                          href={{
                                            pathname: "/Details",
                                            query: {
                                              id: val.id,
                                            },
                                          }}
                                        >
                                          <div className="group  block w-full overflow-hidden rounded-md  focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                            <img
                                              src={val.image}
                                              alt=""
                                              className="pointer-events-none object-cover group-hover:opacity-75"
                                            />
                                            <button
                                              type="button"
                                              className="absolute inset-0 focus:outline-none"
                                            ></button>
                                          </div>
                                        </Link>
                                      </li>
                                    </SwiperSlide>
                                  ))}
                                </ul>
                              </Swiper>
                            </div>
                          </div>
                        </div>
                      </section>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
