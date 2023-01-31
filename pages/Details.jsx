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
import OpacityAnimation from "../components/Sub-components/OpacityAnimation";
import Spinner from "../components/Sub-components/Spinner";
import SlideAnimation from "../components/Sub-components/SlideAnimation";
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
  const [delay, setDelay] = useState(0);

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
      gridStyles: "col-span-2",
    },
  ];

  useEffect(() => {
    showBookDetails();
  }, [bookId]);

  useEffect(() => {
    getRelatedBooks();
  }, [categoryId]);
  setTimeout(() => setDelay(1), 1500);

  return delay === 0 ? (
    <Spinner />
  ) : (
    <OpacityAnimation>
      <div className="overflow-hidden">
        <Head>
          <title>Bangla Ebook</title>
        </Head>
        <div>
          <Home />
          {/*new section here */}
          <div className="w-full h-full mx-auto bg-zinc-800">
            {booksInfo.map((val, key) => (
              <li className="list-none" key={key}>
                <div>
                  <div className="h-52 lg:h-52 bg-zinc-900 flex flex-col justify-center ">
                    <div className="flex flex-col mx-auto items-end w-3/4">
                      <h1 className="mx-auto text-zinc-300 text-2xl flex justify-center w-3/4 items-center   md:w-full md:text-center lg:text-center lg:w-full">
                        {
                          val.authors.description[
                            Object.keys(val.authors.description)[0]
                          ]
                        }
                      </h1>
                      <h3 className="mt-[10px] text-2xl text-zinc-300 ">
                        &mdash;{" "}
                        <span className="text-teal-500">
                          {val.authors.name}
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="h-full">
                    <div className="sm:-mt-12 mx-auto max-w-7xl px-4 xs:-mt-1 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                      <div className="flex items-center space-x-5 xs:flex-col sm:flex-row">
                        <div className="flex-shrink-0">
                          <div className="relative px-4">
                            <img
                              className="h-52 w-44 rounded-md "
                              src={val.image}
                              alt="error"
                            />
                          </div>
                        </div>
                        <div className="mt-[20px]">
                          <h1 className="text-2xl font-bold text-gray-200">
                            {val.title}
                          </h1>
                          <p className="text-xl font-medium text-gray-500 mt-2">
                            Category{" "}
                            <span className="italic text-teal-500">
                              {categoryName}
                            </span>
                          </p>
                          <p className="text-xl font-medium text-gray-500 mt-2">
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
                      <div className="mx-auto mt-8  grid  grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
                        <div className="space-y-6 lg:col-span-2 lg:col-start-1">
                          <section>
                            <div className="sm:rounded-lg">
                              <div className="mt-6 sm:mt-2 2xl:mt-5">
                                <div className="border-b border-zinc-600">
                                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                                    <nav className="flex ">
                                      <p
                                        onClick={() => {
                                          setToggleTabs(false);
                                        }}
                                        className={`${
                                          toggleTabs
                                            ? "cursor-pointer text-gray-100 text-lg  whitespace-nowrap py-4 px-2 font-medium xs:ml-8 sm:-ml-8"
                                            : "cursor-pointer text-gray-100 text-lg border-b border-teal-500 whitespace-nowrap py-4 px-2 font-medium xs:ml-8 sm:-ml-8"
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
                                            ? "cursor-pointer border-b border-teal-500 ml-[50px] text-gray-100 text-lg whitespace-nowrap py-4 px-1 font-medium"
                                            : "cursor-pointer ml-[50px] text-gray-100 text-lg whitespace-nowrap py-4 px-1 font-medium"
                                        }`}
                                      >
                                        More Books
                                      </p>
                                    </nav>
                                  </div>
                                </div>
                              </div>
                              {toggleTabs ? (
                                <SlideAnimation>
                                  <ul className=" mt-[50px] space-y-4 sm:bg-zinc-800 xs:grid xs:grid-cols-3 xs:gap-2 xs:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:grid-cols-4 xl:grid-cols-5 ">
                                    {authorBooks.map((val, key) => (
                                      <li
                                        key={key}
                                        className="shadow-md shadow-black list-none scale-95 transition duration-200 hover:scale-100 hover:shadow-black hover:shadow-lg rounded-lg bg-zinc-900 py-2 px-2 text-center"
                                      >
                                        <div className=" space-y-6 xl:space-y-4">
                                          <img
                                            className="object-fit mx-auto  px-2 rounded-lg py-1"
                                            src={val.image}
                                            alt="error"
                                          />
                                          <div className=" h-12 text-sm text-center font-medium leading-6">
                                            <h3 className="text-white text-center">
                                              {val.title}
                                            </h3>
                                          </div>
                                          <a
                                            href={`https://sabbirontheweb.com${val.link}`}
                                            className="block bg-zinc-700 px-2 py-2  mx-auto rounded-md text-center text-sm font-medium text-teal-500 hover:text-teal-400 sm:rounded-b-lg"
                                            download="example.pdf"
                                          >
                                            Download
                                          </a>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </SlideAnimation>
                              ) : (
                                <OpacityAnimation>
                                  <div>
                                    <div className=" px-4 py-5 sm:px-6">
                                      <dl className="grid grid-cols-2 gap-x-4 gap-y-8 ">
                                        {information.map((item, key) => (
                                          <li
                                            key={key}
                                            className={`${item.gridStyles} list-none`}
                                          >
                                            <dt className="text-md font-bold text-gray-100">
                                              {
                                                Object.keys(
                                                  val.authors.description
                                                )[item.field]
                                              }
                                            </dt>

                                            <dd className="mt-1 text-md font-normal text-gray-400">
                                              {
                                                val.authors.description[
                                                  Object.keys(
                                                    val.authors.description
                                                  )[item.field]
                                                ]
                                              }
                                            </dd>
                                          </li>
                                        ))}
                                      </dl>
                                    </div>
                                    <div>
                                      <div className="mt-[20px] flex justify-center">
                                        <a
                                          href={`https://sabbirontheweb.com${val.link}`}
                                          className="block bg-zinc-700 px-2 py-2 rounded-md text-center text-lg sm:w-full xs:w-11/12 font-medium text-teal-500 hover:text-teal-400 hover:bg-zinc-600/80 sm:rounded-b-lg"
                                          download
                                          target="_blank"
                                        >
                                          Download Book
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </OpacityAnimation>
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
                                    <h2 className="text-xl font-medium text-gray-100">
                                      Related Books
                                    </h2>
                                  </div>
                                  <div className="bg-zinc-800">
                                    <Swiper
                                      modules={[Navigation, Pagination, A11y]}
                                      breakpoints={{
                                        320: {
                                          slidesPerView: 3,
                                          spaceBetween: 10,
                                        },
                                        480: {
                                          slidesPerView: 3,
                                          spaceBetween: 5,
                                        },
                                        640: {
                                          slidesPerView: 4,
                                          spaceBetween: 10,
                                        },
                                        768: {
                                          slidesPerView: 4,
                                          spaceBetween: 10,
                                        },
                                        1024: {
                                          slidesPerView: 5,
                                          spaceBetween: 10,
                                        },
                                        1536: {
                                          slidesPerView: 6,
                                          spaceBetween: 10,
                                        },
                                      }}
                                      style={{ marginTop: "20px" }}
                                      pagination={{
                                        clickable: true,
                                      }}
                                    >
                                      <ul className="">
                                        {relatedBooks.map((val, key) => (
                                          <SwiperSlide key={key}>
                                            <li className="relative ">
                                              <Link
                                                href={{
                                                  pathname: "/Details",
                                                  query: {
                                                    id: val.id,
                                                    category_id:
                                                      val.category_id,
                                                    category_name:
                                                      val.categories.name,
                                                  },
                                                }}
                                              >
                                                <div className=" group block w-full overflow-hidden rounded-md  ">
                                                  <img
                                                    src={val.image}
                                                    alt="error"
                                                    className=" rounded-md transition duration-200 pointer-events-none object-cover scale-95 group-hover:scale-100"
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
    </OpacityAnimation>
  );
}
