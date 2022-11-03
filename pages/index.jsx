
import { useState, useEffect } from 'react'
import { supabase } from '../api'
import Link from "next/link";
import Home from './Home';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Grid, Pagination, Navigation } from "swiper";


export default function Index() {

     
    const [booksInfo, setBooksInfo] = useState([])
    const [authors, setAuthors] = useState([])
    const [toggleCategories, setToggleCategories] = useState(false)
    const [authorCount, setAuthorCount] = useState(2)
    const [categories, setCategories] = useState([])
    const [booksFromCategory, setBooksFromCategory] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [showSideBar, setShowSideBar] = useState(false);
    const [ showActive, setShowActive]=useState(false)

    // const toggleActive = ({showActive}) => {
    //   //alert(id)
    //   return {
    //     backgroundColor: showActive ? "rgb(243,244,246)" : "white",
    //   };
    // };

const getBooks = async (id) => {

        if (id) {

            let { data, error } = await supabase
              .from("books_duplicate")
              .select(`*,categories(name)`)
              .eq("author_id", id)
              ;
            if (error) {
                console.log(error)
            } else {
                 
                setBooksInfo(data)
            }
        }
        else {
            let { data, error } = await supabase
              .from("books_duplicate")
              .select(`*,categories(name)`)
              .range(0, 19);
              ;               
            if (error) {
                console.log(error)
            } else {
                // console.log(data)
                setBooksInfo(data)
            }
        }
    }


    const fetchMoreAuthorByClick = (e) => {
        e.preventDefault()
        setAuthorCount(prevState => prevState + 3)

    }

    const getAuthorsNames = async (e) => {

        let { data, error } = await supabase
            .from('authors')
            .select('*')
            .range(0, authorCount)
        if (error) {
            console.log(error)
        } else {
            setAuthors(data)
        }
    }

    const getCategoryNames = async (e) => {
        let { data, error } = await supabase
            .from('categories')
            .select("*")
        if (error) {
            console.log(error)
        } else {
            
            setCategories(data)
        }
    }

    const get_books_by_category = async (id) => {
        
   
      let { data, error } = await supabase
        .from("books_duplicate")
        .select(`*,categories(id,name)`)
        .match({category_id: id })
        
       if (error)
        {
            console.error(error)
        } else
         {
            setBooksFromCategory(data)
            //console.log(data)
        };
    }

useEffect(() => {
    getBooks()
}, [])

useEffect(() => {
    getAuthorsNames()
}, [authorCount])

useEffect(() => {
    getCategoryNames()
}, [])

  
 return (
   <div>
     <Home {...{ setShowSideBar }} />
     <div className="bg-white">
       {/*for small screen /start */}
       <div className="relative z-40 lg:hidden">
         {showSideBar ? (
           <div className=" transition-opacity duration-500 ease-linear fixed inset-0 bg-opacity-100 backdrop-blur-sm "></div>
         ) : (
           ""
         )}
         <div
           className={`${
             showSideBar
               ? "fixed inset-0 z-40 w-1/2 transition-all duration-300 ease-in-out "
               : "fixed inset-0 z-40 w-0 transition-all duration-300 ease-in-out "
           } `}
         >
           <div className="relative flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
             <div className="flex items-center justify-between px-4">
               <h2 className="text-lg font-medium text-gray-900">Filters</h2>
               <button
                 type="button"
                 className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                 onClick={() => setShowSideBar(false)}
               >
                 <span className="sr-only">Close menu</span>
                 <svg
                   className="h-6 w-6"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth="1.5"
                   stroke="currentColor"
                   aria-hidden="true"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M6 18L18 6M6 6l12 12"
                   />
                 </svg>
               </button>
             </div>

             <form className="mt-4 border-t border-gray-200">
               <div className="border-t border-gray-200 px-4 py-6">
                 <h3 className="-mx-2 -my-3 flow-root">
                   <button
                     type="button"
                     className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                     disabled
                   >
                     <span className="font-medium text-gray-900">Authors</span>
                     <span className="ml-6 flex items-center"></span>
                   </button>
                 </h3>
                 <div className="pt-6">
                   <div className="space-y-6">
                     {authors.map((item) => (
                       <li
                         key={item.id}
                         onClick={() => {
                           getBooks(item.id);
                           setToggleCategories(false);
                           setShowSideBar(false);
                         }}
                         className="list-none cursor-pointer hover:bg-gray-100"
                       >
                         <div className="flex items-center">
                           <img
                             className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                             src={item.image}
                             alt=""
                           />
                           <p className="cursor-pointer ml-3 text-sm text-gray-600">
                             {item.name}
                           </p>
                         </div>
                       </li>
                     ))}
                     <div className="flex flex-row">
                       <button
                         onClick={(e) => fetchMoreAuthorByClick(e)}
                         className="text-blue-500 hover:text-blue-700"
                       >
                         See more
                       </button>
                       <span>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           color="blue"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="w-4 h-4 mt-[5px] ml-[3px]"
                         >
                           <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                           />
                         </svg>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="border-t border-gray-200 px-4 py-6">
                 <h3 className="-mx-2 -my-3 flow-root">
                   <button
                     type="button"
                     className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                   >
                     <span className="font-medium text-gray-900">Category</span>
                     <span className="ml-6 flex items-center"></span>
                   </button>
                 </h3>
                 <div className="pt-6" id="filter-section-mobile-1">
                   <div className="space-y-6">
                     {categories.map((item, key) => (
                       <li key={key} className="list-none">
                         <div className="flex items-center">
                           <input
                             name="category[]"
                             onChange={() => get_books_by_category(item.id)}
                             onClick={() => {
                               setToggleCategories(true);
                               setShowSideBar(false);
                             }}
                             value={item.id}
                             type="radio"
                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                           />
                           <label className="ml-3 text-sm text-gray-600">
                             {item.name}
                           </label>
                         </div>
                       </li>
                     ))}
                   </div>
                 </div>
               </div>
             </form>
           </div>
         </div>
       </div>
       {/*for small screen /end */}
       <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="flex justify-end border-b border-gray-200 pt-24 pb-6">
           <div className="flex items-end justify-end">
             {/* search */}
             <div className="relative w-[500px]">
               <div className="pointer-events-none absolute inset-y-0  flex items-center pl-3">
                 <svg
                   className="h-5 w-5 text-black"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 20 20"
                   fill="currentColor"
                   aria-hidden="true"
                 >
                   <path
                     fillRule="evenodd"
                     d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                     clipRule="evenodd"
                   />
                 </svg>
               </div>

               <input
                 className="block w-[500px] rounded-md border border-gray-400 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                 placeholder="Find Books..."
                 type="text"
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
             </div>
             {/* search */}
           </div>
         </div>
         {/*main container */}
         <section className="pt-6 pb-24 w-full">
           <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-4 ">
             <div className="hidden lg:block">
               <div className="border-b border-gray-200 py-6">
                 <h3 className="-my-3 flow-root">
                   <button
                     type="button"
                     className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                     disabled
                   >
                     <span className="font-medium text-gray-900">Authors</span>
                     <span className="ml-6 flex items-center"></span>
                   </button>
                 </h3>
                 <div className="pt-6" id="filter-section-0">
                   <div className="space-y-4">
                     {authors.map((item) => (
                       <li
                         key={item.id}
                         onClick={() => {
                           getBooks(item.id);
                           setToggleCategories(false);
                         }}
                         className=" list-none cursor-pointer "
                       >
                         <div className="flex items-center">
                           <img
                             className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                             src={item.image}
                             alt=""
                           />
                           <p className="cursor-pointer ml-3 text-sm text-gray-600">
                             {item.name}
                           </p>
                         </div>
                       </li>
                     ))}

                     <div className="flex flex-row">
                       <button
                         onClick={(e) => fetchMoreAuthorByClick(e)}
                         className="text-blue-500 hover:text-blue-700"
                       >
                         See more
                       </button>
                       <span>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           color="blue"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="w-4 h-4 mt-[5px] ml-[3px]"
                         >
                           <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                           />
                         </svg>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="border-b border-gray-200 py-6">
                 <h3 className="-my-3 flow-root">
                   <button
                     type="button"
                     className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                     disabled
                   >
                     <span className="font-medium text-gray-900">Category</span>
                     <span className="ml-6 flex items-center"></span>
                   </button>
                 </h3>

                 <div className="pt-6" id="filter-section-1">
                   <div className="space-y-4">
                     {categories.map((item, key) => (
                       <li key={key} className="list-none">
                         <div className="flex items-center">
                           <input
                             name="category[]"
                             onChange={() => get_books_by_category(item.id)}
                             onClick={() => setToggleCategories(true)}
                             value={item.id}
                             type="radio"
                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                           />
                           <label className="ml-3 text-sm text-gray-600">
                             {item.name}
                           </label>
                         </div>
                       </li>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
             {/*books container /start */}
             <div className="lg:col-span-3 ">
               <div className="h-84 rounded-lg lg:border-4 p-5 lg:h-full">
                 <div className="flex justify-center">
                   {/* {searchQuery ? (
                     <h1 className="text-4xl p-5 divide">No result found</h1>
                   ) : (
                     <h1 className="text-4xl p-5 divide">Success</h1> */}
                 </div>
                 <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                   {toggleCategories
                     ? booksFromCategory.map((item) => (
                         <li key={item.id} className="relative">
                           <Link
                             href={{
                               pathname: "/Details",
                               query: {
                                 id: item.id,
                                 category_name: item.categories.name,
                                 category_id: item.category_id,
                               },
                             }}
                           >
                             <div className="scale-95 transition hover:scale-100 aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                               <img
                                 src={item.image}
                                 alt=""
                                 className=" object-cover w-full max-h-full group-hover:opacity-75"
                                 onClick={() => alert()}
                               />

                               <button
                                 type="button"
                                 className="absolute inset-0 focus:outline-none"
                               ></button>
                             </div>
                           </Link>

                           <Link
                             href={{
                               pathname: "/Details",
                               query: { id: item.id },
                             }}
                           >
                             <p className="mt-2 block cursor-pointer truncate text-sm font-medium text-gray-900">
                               {item.title}
                             </p>
                           </Link>
                         </li>
                       ))
                     : searchQuery
                     ? booksInfo
                         .filter((val) => {
                           if (searchQuery === "") {
                             return val;
                           } else if (
                             val.title
                               .toLowerCase()
                               .includes(searchQuery.toLowerCase())
                           ) {
                             return val;
                           }
                         })
                         .map((item) => (
                           <li key={item.id} className="relative">
                             <Link
                               href={{
                                 pathname: "/Details",
                                 query: {
                                   id: item.id,
                                   category_name: item.categories.name,
                                   category_id: item.category_id,
                                 },
                               }}
                             >
                               <div className="scale-95 transition hover:scale-100  group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                 <img
                                   src={item.image}
                                   alt=""
                                   className=" object-cover group-hover:opacity-75"
                                 />

                                 <button
                                   type="button"
                                   className="absolute inset-0 focus:outline-none"
                                 ></button>
                               </div>
                             </Link>
                             <p className="mt-2 block truncate text-sm font-medium text-gray-900">
                               {item.title}
                             </p>
                           </li>
                         ))
                     : booksInfo.map((item) => (
                         <SwiperSlide>
                           <li key={item.id} className="relative">
                             <Link
                               href={{
                                 pathname: "/Details",
                                 query: {
                                   id: item.id,
                                   category_name: item.categories.name,
                                   category_id: item.category_id,
                                 },
                               }}
                             >
                               <div className="scale-95 transition hover:scale-100 aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                 <img
                                   src={item.image}
                                   alt=""
                                   className=" object-cover group-hover:opacity-75"
                                 />

                                 <button
                                   type="button"
                                   className="absolute inset-0 focus:outline-none"
                                 ></button>
                               </div>
                             </Link>
                             <Link
                               href={{
                                 pathname: "/Details",
                                 query: { id: item.id },
                               }}
                             >
                               <p className="mt-2 cursor-pointer block truncate text-sm font-medium text-gray-900">
                                 {item.title}
                               </p>
                             </Link>
                           </li>
                         </SwiperSlide>
                       ))}
                 </ul>
                 <div class="bg-zinc-700">
                   <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                     <div class="space-y-12">
                       <ul
                         role="list"
                         class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
                       >
                         <li class="rounded-lg bg-zinc-900 py-10 px-6 text-center xl:px-10 xl:text-left">
                           <div class="space-y-6 xl:space-y-10">
                             <img
                               class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                               src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                               alt=""
                             />
                             <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                               <div class="space-y-1 text-lg font-medium leading-6">
                                 <h3 class="text-white">Leonard Krasner</h3>
                               </div>
                             </div>
                             <button
                               type="button"
                               class="focus:ring-offset- inline-flex items-center rounded-md border border-transparent bg-slate-50 px-6 py-3 text-sm font-medium text-zinc-500 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
                             >
                               Button text
                             </button>
                           </div>
                         </li>

                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             {/*books container /end */}
           </div>
         </section>
       </main>
     </div>
   </div>
 );
 }

