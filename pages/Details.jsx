import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabase";
import Navbar from "../components/Sub-components/Navbar";
import Footer from "../components/Sub-components/Footer";
import OpacityAnimation from "../components/Sub-components/OpacityAnimation";
import Spinner from "../components/Sub-components/Logo";
import SlideAnimation from "../components/Sub-components/SlideAnimation";
import RelatedBooks from "../components/Authors/RelatedBooks";
import AuthorInfo from "../components/Authors/AuthorInfo";
import MoreBooks from "../components/Authors/MoreBooks";
import Loading from "../components/Sub-components/Loading";

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
  const [loading, setLoading] = useState(false);
  const showBookDetails = async (e) => {
    try {
      setLoading(true);
      let { data, error } = await supabase
        .from("books_duplicate")
        .select(`*,authors(*)`)
        .match({ id: bookId });

      if (error) {
        console.log(error);
      } else {
        setBooksInfo(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
      <div className="overflow-hidden ">
        <div>
          <Navbar />
          {/*new section here */}
          <div className="w-full h-full mx-auto bg-zinc-800 mt-20">
            {loading ? (
              <Loading />
            ) : (
              booksInfo.map((val, key) => (
                <li className="list-none" key={key}>
                  <div>
                    <div className="h-52 lg:h-52 bg-zinc-900/40 flex flex-col justify-center ">
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
                            <div className=" px-4">
                              <img
                                className="h-52 w-44 rounded-md  "
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
                              Author
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
                                    <MoreBooks authorBooks={authorBooks} />
                                  </SlideAnimation>
                                ) : (
                                  <OpacityAnimation>
                                    <AuthorInfo val={val} />
                                  </OpacityAnimation>
                                )}
                              </div>
                            </section>

                            {toggleTabs ? (
                              ""
                            ) : (
                              <section>
                                <RelatedBooks relatedBooks={relatedBooks} />
                              </section>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            )}
          </div>
        </div>
        <Footer />
      </div>
    </OpacityAnimation>
  );
}
