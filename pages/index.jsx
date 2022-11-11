import { useState, useEffect, useRef } from "react";
import { supabase } from "../api";
import Link from "next/link";
import Home from "./Home";
import Pagination from "../components/pagination";
import Authors from "../components/Authors";
import Filters from "../components/Sub-components/Filters";
import AnimatedPage from "../components/Sub-components/AnimatedPages";

export default function Index() {
  const [booksInfo, setBooksInfo] = useState([]);
  const [itemsPerPage] = useState(14);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalLength,setTotalLength]= useState(null)
 

  const getBooks = async (id) => {
    if (typeof id === "number") {
      let { data, error } = await supabase
        .from("books_duplicate")
        .select(`*,categories(name)`)
        .eq("author_id", id);
      if (error) {
        console.log(error);
      } else {
        setBooksInfo(data);
      }
    } else if (typeof id === "object") {
      setBooksInfo(id);
    } else {
      let { data, count, error } = await supabase
        .from("books_duplicate")
        .select(`*,categories(name)`,{ count: "exact" })
        .range(firstItemIndex, lastItemIndex);

      if (error) {
        console.log(error);
      } else {
        setTotalLength(count)
        setBooksInfo(data);
      }
    }
  };

  useEffect(() => {
    getBooks();
  }, [currentPage]);
   
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;
   const currentItems = booksInfo.slice(firstItemIndex, lastItemIndex);

  return (
    <div>
      <div className="">
        <Home />
        <div className="bg-zinc-800 h-full sm:h-full">
          <div className=" bg-zinc-800 mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8  ">
            {/*main container */}

            <Filters getBooks={getBooks} />

            <section className="bg-zinc-800 pt-6 pb-24 w-full ">
              <div className="grid grid-cols-1 grid-rows-1 gap-x-12 gap-y-10  lg:grid-cols-10 ">
                {/*books container /start */}
                <Authors getBooks={getBooks} />
                <div className="lg:col-span-8 ">
                  <div className=" rounded-lg  lg:h-full">
                    <div className="flex justify-center"></div>
                    <AnimatedPage>
                      <ul className="bg-zinc-800  space-y-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:space-y-0 lg:grid-cols-5 ">
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
                            
                              <li className="cursor-pointer scale-95 transition hover:scale-100 rounded-lg bg-zinc-900 py-2 px-1 text-center">
                                <div className=" space-y-6 xl:space-y-4">
                                  <img
                                    className="object-cover mx-auto   px-2 rounded-md py-1"
                                    src={item.image}
                                    alt=""
                                  />
                                  <div className="space-y-1 text-lg text-center font-medium leading-6">
                                    <h3 className="text-sm text-white ">
                                      {item.title}
                                    </h3>
                                  </div>
                                </div>
                              </li>
                            
                          </Link>
                        ))}
                      </ul>
                    </AnimatedPage>
                  </div>
                </div>
                {/*books container /end */}
              </div>
            </section>
          </div>
        </div>
      </div>
      <AnimatedPage>
        <Pagination
          currentItems={currentItems}
          itemsPerPage={itemsPerPage}
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalLength={totalLength}
        />
      </AnimatedPage>
    </div>
  );
}
