import { useState, useEffect } from "react";
import { supabase } from "../api";
import Link from "next/link";
import Navbar from "./Navbar";
import Pagination from "../components/Pagination";
import Authors from "../components/Authors";
import Filters from "../components/Sub-components/Filters";
import Footer from "../components/Footer";
import Logo from "../components/Sub-components/Logo";
import BooksLoading from "../components/Sub-components/Loading";
import OpacityAnimation from "../components/Sub-components/OpacityAnimation";

export default function Index() {
  const [booksInfo, setBooksInfo] = useState([]);
  const [itemsPerPage] = useState(14);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalLength, setTotalLength] = useState(null);
  const [delay, setDelay] = useState(0);
  const [loading, setLoading] = useState(false);

  const getBooks = async (id) => {
    //fetch books by authors
    if (typeof id === "number") {
      try {
        setLoading(true);
        let { data, count, error } = await supabase
          .from("books_duplicate")
          .select(`*,categories(name)`, { count: "exact" })
          .eq("author_id", id)
          .range(firstItemIndex, lastItemIndex);
        if (error) {
          console.log(error);
        } else {
          setTotalLength(count);
          setBooksInfo(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    //fetch books by category
    else if (typeof id === "object") {
      setLoading(true)
      setTimeout(() => {
        setBooksInfo(id);
        setLoading(false)
      }, 1000);
    } else {
      try {
        setLoading(true);
        let { data, count, error } = await supabase
          .from("books_duplicate")
          .select(`*,categories(name)`, { count: "exact" })
          .range(firstItemIndex, lastItemIndex);

        if (error) {
          console.log(error);
        } else {
          setTotalLength(count);
          setBooksInfo(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getBooks();
  }, [currentPage]);

  setTimeout(() => setDelay(1), 1500);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = booksInfo.slice(firstItemIndex, lastItemIndex);

  return delay === 0 ? (
    <Logo />
  ) : (
    <OpacityAnimation>
      <div className="overflow-hidden  ">
        <div className="font-sans  ">
          <Navbar />
          <div className=" bg-zinc-800 w-full sm:h-full ">
            <div className="bg-zinc-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
              {/*main container */}
              <Filters getBooks={getBooks} />
              <section className=" mx-auto bg-zinc-800 pt-8 pb-24 w-full ">
                <div className=" grid grid-cols-1 grid-rows-1 gap-x-12 gap-y-10  lg:grid-cols-11 ">
                  {/*books container /start */}
                  <Authors getBooks={getBooks} />
                  <div className=" w-full lg:col-span-8 ">
                    <div className="h-full rounded-lg lg:h-full">
                      {loading ? (
                        <BooksLoading />
                      ) : (
                        <ul className="bg-zinc-800 space-y-4 xs:grid xs:grid-cols-2 xs:gap-6 xs:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 ">
                          {booksInfo.map((item, key) => (
                            <Link
                              key={key}
                              href={{
                                pathname: "/Details",
                                query: {
                                  id: item.id,
                                  category_name: item.categories.name,
                                  category_id: item.category_id,
                                },
                              }}
                            >
                              <li className=" shadow-md shadow-black cursor-pointer scale-95 transition hover:scale-100 hover:shadow-lg hover:shadow-black rounded-lg bg-zinc-900 py-2 px-1 text-center">
                                <div className="">
                                  <img
                                    className="object-cover mx-auto rounded mt-4"
                                    src={item.image}
                                    alt="error"
                                  />
                                  <div className="h-12 mt-4 text-center font-normal leading-6">
                                    <h3 className="text-sm text-white font-semibold tracking-wide">
                                      {item.title.slice(0, 1) +
                                        item.title.slice(1).toLowerCase()}
                                    </h3>
                                  </div>
                                </div>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  {/*books container /end */}
                </div>
              </section>
              <Pagination
                currentItems={currentItems}
                itemsPerPage={itemsPerPage}
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalLength={totalLength}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </OpacityAnimation>
  );
}
