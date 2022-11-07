import { useState, useEffect,useRef } from "react";
import { supabase } from "../api";
import Link from "next/link";
import Home from "./Home";
import Pagination from "../components/pagination";
import Authors from "../components/Authors";
import Filters from "../components/Sub-components/Filters";

export default function Index() {

  const [booksInfo, setBooksInfo] = useState([]);
  
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
    } 
    else if(typeof id === "object"){
     
      setBooksInfo(id)  
    } 

    else {
      let { data, error } = await supabase
        .from("books_duplicate")
        .select(`*,categories(name)`)
        .range(0, 19);
      if (error) {
        console.log(error);
      } else {
       
        setBooksInfo(data);
      }
    }
  }
  
 

  useEffect(() => {
    getBooks();
  }, []);

  

  return (
    <div>
      <div className="">
        <Home />
        <div className="bg-zinc-800 h-full sm:h-full">
          <div className=" bg-zinc-800 mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8  ">

            {/*main container */}

            <Filters getBooks={getBooks} />

            <section className="bg-zinc-800 pt-6 pb-24 w-full h-full">
              <div className="grid grid-cols-1 grid-rows-1 gap-x-12 gap-y-10  lg:grid-cols-10 ">
                {/*books container /start */}
                <Authors getBooks={getBooks} />
                <div className="lg:col-span-8 ">
                  <div className=" rounded-lg  lg:h-full">
                    <div className="flex justify-center"></div>
                    <ul className="bg-zinc-800  space-y-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:space-y-0 lg:grid-cols-6 ">
                      {booksInfo.map((item,key) => (
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
                                className="object-contain mx-auto   px-2 rounded-md py-1"
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
                  </div>
                </div>
                {/*books container /end */}
              </div>
            </section>
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
