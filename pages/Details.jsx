import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../api";
import Link from "next/link";
import Head from "next/head";
import Home from "./Home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import Footer from "../components/Footer";
import AnimatedPage from "../components/Sub-components/AnimatedPages";

export default function Details() {
  const router = useRouter();
  const query = router.query;
  const bookId = query.id;
  const categoryName = query.category_name;
  const categoryId = query.category_id;
  const [booksInfo, setBooksInfo] = useState([]);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [toggleTabs, setToggleTabs] = useState(false);
  const [authorBooks, setAuthorBooks] = useState([]);

  const showBookDetails = async (e) => {
    let { data, error } = await supabase
      .from("books_duplicate")
      .select(`*,authors(*)`)
      .match({ id: bookId });

    if (error) {
      console.log(error);
    } else {
      setBooksInfo(data);
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
    }
  };

  const information = [
    {
      field: 1,
      gridStyles: "col-span-1",
    },
    {
      field: 2,
      gridStyles: "col-span-1",
    },
    {
      field: 3,
      gridStyles: "col-span-1",
    },
    {
      field: 4,
      gridStyles: "col-span-1",
    },
    {
      field: 5,
      gridStyles: "col-span-3",
    },
  ];

  useEffect(() => {
    showBookDetails();
  }, [bookId]);

  useEffect(() => {
    getRelatedBooks();
  }, [categoryId]);
  return (
    <div>
      <Head>
        <title>Bangla Ebook</title>
      </Head>
      <div>
        <Home />

        {/*new section here */}

        <div className="h-full mx-auto bg-zinc-800">
          {booksInfo.map((val, key) => (
            <li className="list-none" key={key}>
              <div>
                <div className="h-52 lg:h-52 bg-zinc-900 flex flex-col justify-center ">
                  <div className="flex flex-col mx-auto items-end w-3/4">
                    <h1 className="mx-auto text-zinc-300 text-3xl flex justify-center w-3/4 items-center   md:w-full md:text-center lg:text-center lg:w-full">
                      {
                        val.authors.description[
                          Object.keys(val.authors.description)[0]
                        ]
                      }
                    </h1>
                    <h3 className="mt-[10px] text-xl text-zinc-300 ">
                      &mdash;{" "}
                      <span className="text-teal-500">{val.authors.name}</span>
                    </h3>
                  </div>
                </div>
                <div className="h-full">
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
                      <div className="mt-[20px]">
                        <h1 className="text-3xl font-bold text-gray-200">
                          {val.title}
                        </h1>
                        <p className="text-2xl font-medium text-gray-500 mt-2">
                          Category{" "}
                          <span className="italic text-teal-500">
                            {categoryName}
                          </span>
                        </p>
                        <p className="text-2xl font-medium text-gray-500 mt-2">
                          Written By
                          <a
                            href="#"
                            className="pointer-events-none ml-[5px] text-teal-500"
                          >
                            {val.authors.name}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-full bg-zinc-800">
                    <div className=" mx-auto mt-8  grid  grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
                      <div className="  space-y-6 lg:col-span-2 lg:col-start-1">
                        <section>
                          <div className="sm:rounded-lg">
                            <div className="mt-6 sm:mt-2 2xl:mt-5">
                              <div className="border-b border-zinc-600">
                                <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
                                  <nav className="flex ">
                                    <p
                                      onClick={() => {
                                        setToggleTabs(false);
                                      }}
                                      className={`${
                                        toggleTabs
                                          ? "cursor-pointer text-gray-100 text-xl  whitespace-nowrap py-4 px-2 font-medium "
                                          : "cursor-pointer text-gray-100 text-xl border-b border-teal-500 whitespace-nowrap py-4 px-2 font-medium  "
                                      }`}
                                    >
                                      Author Info
                                    </p>
                                    <p
                                      onClick={() => {
                                        setToggleTabs(true);
                                        getAuthorBooks(val.authors.id);
                                      }}
                                      className={`${
                                        toggleTabs
                                          ? "cursor-pointer border-b border-teal-500 ml-[50px] text-gray-100 text-xl whitespace-nowrap py-4 px-1 font-medium"
                                          : "cursor-pointer ml-[50px] text-gray-100 text-xl whitespace-nowrap py-4 px-1 font-medium"
                                      }`}
                                    >
                                      More Books
                                    </p>
                                  </nav>
                                </div>
                              </div>
                            </div>
                            {toggleTabs ? (
                              <AnimatedPage>
                                <ul className=" mt-[50px] space-y-4 sm:bg-zinc-800 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:grid-cols-4 xl:grid-cols-5 ">
                                  {authorBooks.map((val, key) => (
                                    <li
                                      key={key}
                                      className="list-none scale-90 transition hover:scale-100 rounded-lg bg-zinc-900 py-2 px-2 text-center"
                                    >
                                      <div className=" space-y-6 xl:space-y-4">
                                        <img
                                          className=" object-contain mx-auto  px-2 rounded-md py-1"
                                          src={val.image}
                                          alt=""
                                        />
                                        <div className="space-y-1 text-sm text-center font-medium leading-6">
                                          <h3 className="text-white text-center">
                                            {val.title}
                                          </h3>
                                        </div>
                                        <a
                                          href={`https://sabbirontheweb.com${val.link}`}
                                          className="block bg-zinc-700 px-2 py-2  mx-auto rounded-md text-center text-sm font-medium text-teal-500 hover:text-teal-600 sm:rounded-b-lg"
                                          download="example.pdf"
                                        >
                                          Download
                                        </a>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </AnimatedPage>
                            ) : (
                              <div>
                                <div className=" px-4 py-5 sm:px-6">
                                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    {information.map((item, key) => (
                                      <li key={key} className="list-none">
                                        <div className={item.gridStyles}>
                                          <dt className="text-xl font-medium text-gray-100">
                                            {
                                              Object.keys(
                                                val.authors.description
                                              )[item.field]
                                            }
                                          </dt>
                                          <dd className="mt-1 text-lg font-medium text-gray-400">
                                            {
                                              val.authors.description[
                                                Object.keys(
                                                  val.authors.description
                                                )[item.field]
                                              ]
                                            }
                                          </dd>
                                        </div>
                                      </li>
                                    ))}
                                  </dl>
                                </div>
                                <div>
                                  <div className="mt-[20px]">
                                    <a
                                      href={`https://sabbirontheweb.com${val.link}`}
                                      className="block bg-zinc-700 px-4 py-4 rounded-md text-center text-lg font-medium text-teal-500 hover:text-teal-600 sm:rounded-b-lg"
                                      download
                                      target="_blank"
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
                          ""
                        ) : (
                          <section>
                            <div className="bg-zinc-800 sm:overflow-hidden sm:rounded-lg">
                              <div className="divide-y divide-zinc-600">
                                <div className="px-4 py-5 sm:px-6">
                                  <h2
                                    id="notes-title"
                                    className="text-2xl font-medium text-gray-100"
                                  >
                                    Related Books
                                  </h2>
                                </div>
                                <div className="bg-zinc-800">
                                  <Swiper
                                    modules={[Navigation, Pagination, A11y]}
                                    spaceBetween={20}
                                    slidesPerView={6}
                                    pagination={{ clickable: true }}
                                    style={{ marginTop: "20px" }}
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
              </div>
            </li>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
