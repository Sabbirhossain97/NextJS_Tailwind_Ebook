
import { useState, useEffect } from 'react'
import { supabase } from '../api'
import Link from "next/link";
import Home from './Home';

export default function Index() {
    
    const [booksInfo, setBooksInfo] = useState([])
    const [authors, setAuthors] = useState([])
    const [toggleCategories, setToggleCategories] = useState(false)
    const [authorCount, setAuthorCount] = useState(2)
    const [categories, setCategories] = useState([])
    const [booksFromCategory, setBooksFromCategory] = useState([])
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchedItem, setShowSearchedItem]= useState([])

const getBooks = async (id) => {

        if (id) {

            let { data, error } = await supabase
                .from('books_duplicate')
                .select('*')
                .eq('author_id', id)
            if (error) {
                console.log(error)
            } else {
                // console.log(data.image)
                setBooksInfo(data)
            }
        }
        else {
            let { data, error } = await supabase
                .from('books_duplicate')
                .select('*')               
            if (error) {
                console.log(error)
            } else {
                // console.log(data.image)
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
            //console.log(data)
            setCategories(data)
        }
    }

    const get_books_by_category = async (cat_id) => {
        
       let { data, error } = await supabase.rpc("getbooksbycategory", {
         cat_id,
       });

       if (error)
        {
            console.error(error)
        } else
         {
            setBooksFromCategory(data)
            //console.log(data)
        };
    
    }

    const getSearchedBooks= async(e)=>{
       e.preventDefault();
        let { data, error } = await supabase
          .from("books_duplicate")
          .select()
          .textSearch("title", searchQuery);
    if (error) {
      console.log(error);
    } else {
      setShowSearchedItem(data)
      console.log(data);
    }
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
     <Home />

     <div className="bg-white">
       <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
         <div className="fixed inset-0 bg-black bg-opacity-25"></div>
         <div className="fixed inset-0 z-40 flex">
           <div className="relative flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
             <div className="flex items-center justify-between px-4">
               <h2 className="text-lg font-medium text-gray-900">Filters</h2>
               <button
                 type="button"
                 className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
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
                     aria-controls="filter-section-mobile-0"
                     aria-expanded="false"
                     disabled
                   >
                     <span className="font-medium text-gray-900">Authors</span>
                     <span className="ml-6 flex items-center"></span>
                   </button>
                 </h3>
                 <div className="pt-6" id="filter-section-mobile-0">
                   <div className="space-y-6">
                     <div className="flex items-center">
                       <input
                         id="filter-mobile-color-0"
                         name="color[]"
                         type="checkbox"
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                       />
                       <label
                         htmlFor="filter-mobile-color-0"
                         className="ml-3 min-w-0 flex-1 text-gray-500"
                       >
                         Humayun Ahmed
                       </label>
                     </div>

                     <div className="flex items-center">
                       <input
                         id="filter-mobile-color-1"
                         name="color[]"
                         type="checkbox"
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                       />
                       <label
                         htmlFor="filter-mobile-color-1"
                         className="ml-3 min-w-0 flex-1 text-gray-500"
                       >
                         Jafor Iqbal
                       </label>
                     </div>

                     <div className="flex items-center">
                       <input
                         id="filter-mobile-color-2"
                         name="color[]"
                         type="checkbox"
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                       />
                       <label
                         htmlFor="filter-mobile-color-2"
                         className="ml-3 min-w-0 flex-1 text-gray-500"
                       >
                         Satyajit Roy
                       </label>
                     </div>
                   </div>
                 </div>
               </div>
               {/* for small screen */}
               <div className="border-t border-gray-200 px-4 py-6">
                 <h3 className="-mx-2 -my-3 flow-root">
                   <button
                     type="button"
                     className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                     aria-controls="filter-section-mobile-1"
                     aria-expanded="false"
                   >
                     <span className="font-medium text-gray-900">Category</span>
                     <span className="ml-6 flex items-center"></span>
                   </button>
                 </h3>
                 <div className="pt-6" id="filter-section-mobile-1">
                   <div className="space-y-6">
                     <div className="flex items-center">
                       <input
                         id="filter-mobile-category-0"
                         name="category[]"
                         type="checkbox"
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                       />
                       <label
                         htmlFor="filter-mobile-category-0"
                         className="ml-3 min-w-0 flex-1 text-gray-500"
                       >
                         Mystery
                       </label>
                     </div>

                     <div className="flex items-center">
                       <input
                         id="filter-mobile-category-1"
                         name="category[]"
                         type="checkbox"
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                       />
                       <label
                         htmlFor="filter-mobile-category-1"
                         className="ml-3 min-w-0 flex-1 text-gray-500"
                       >
                         Horror
                       </label>
                     </div>

                     <div className="flex items-center">
                       <input
                         id="filter-mobile-category-2"
                         name="category[]"
                         type="checkbox"
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                       />
                       <label
                         htmlFor="filter-mobile-category-2"
                         className="ml-3 min-w-0 flex-1 text-gray-500"
                       >
                         Sci-fi
                       </label>
                     </div>

                     <div className="flex items-center">
                       <input
                         id="filter-mobile-category-3"
                         name="category[]"
                         type="checkbox"
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                       />
                       <label
                         htmlFor="filter-mobile-category-3"
                         className="ml-3 min-w-0 flex-1 text-gray-500"
                       >
                         Detective
                       </label>
                     </div>

                     <div className="flex items-center">
                       <input
                         id="filter-mobile-category-4"
                         name="category[]"
                         type="checkbox"
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                       />
                       <label
                         htmlFor="filter-mobile-category-4"
                         className="ml-3 min-w-0 flex-1 text-gray-500"
                       >
                         Novel
                       </label>
                     </div>
                   </div>
                 </div>
               </div>
               {/* for small screen */}
             </form>
           </div>
         </div>
       </div>

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
               <form onSubmit={(e)=>getSearchedBooks(e)}>
               <input
                 
                 className="block w-[500px] rounded-md border border-gray-400 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                 placeholder="Find Books..."
                 type="text"
                 onChange={(e)=>setSearchQuery(e.target.value)}
               />
               </form>
             </div>
             {/* search */}
           </div>
         </div>

         <section aria-labelledby="products-heading" className="pt-6 pb-24">
           <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
             <form className="hidden lg:block">
               <div className="border-b border-gray-200 py-6">
                 <h3 className="-my-3 flow-root">
                   <button
                     type="button"
                     className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                     aria-controls="filter-section-0"
                     aria-expanded="false"
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

               <div className="border-b border-gray-200 py-6">
                 <h3 className="-my-3 flow-root">
                   <button
                     type="button"
                     className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                     aria-controls="filter-section-1"
                     aria-expanded="false"
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
             </form>

             <div className="lg:col-span-3">
               <div className="h-96 rounde d-lg border-4 p-5 border-gray-200 lg:h-full">
                 <div className="flex justify-center">
                   {/* {toggleCategories ? (<h1 className='text-4xl p-5 divide'>Hello</h1>) : ''}  */}
                 </div>
                 <ul
                   role="list"
                   className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
                 >
                   {toggleCategories
                     ? booksFromCategory.map((item) => (
                         <li key={item.id} className="relative">
                           <div className="scale-95 transition hover:scale-100 aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                             <img
                               src={
                                 `https://sabbirontheweb.com` + `${item.image}`
                               }
                               alt=""
                               className=" object-cover group-hover:opacity-75"
                               onClick={() => alert()}
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

                           <p className="mt-2 block truncate text-sm font-medium text-gray-900">
                             {item.title}
                           </p>
                           <div className="flex flex-row mt-[3px]">
                             <svg
                               xmlns="http://www.w3.org/2000/svg"
                               color="blue"
                               fill="none"
                               viewBox="0 0 24 24"
                               strokeWidth="1.5"
                               stroke="currentColor"
                               className="inline w-5 h-5"
                             >
                               <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                               />
                             </svg>
                             <a
                               href={
                                 `https://sabbirontheweb.com` + `${item.link}`
                               }
                               className="ml-[3px] cursor-pointer text-md font-medium text-gray-500"
                             >
                               Download
                             </a>
                           </div>
                         </li>
                       ))
                     : searchQuery ? searchedItem.map((item)=>(
                         <li key={item.id} className="relative">
                           <Link
                             href={{
                               pathname: "/Details",
                               query: { id: item.id },
                             }}
                           >
                             <div className="scale-95 transition hover:scale-100 aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                               <img
                                 src={
                                   item.image === "undefined"
                                     ? "https://i.imgur.com/bbMzfOf.jpg"
                                     : `https://sabbirontheweb.com` +
                                       `${item.image}`
                                 }
                                 alt=""
                                 className=" object-cover group-hover:opacity-75"
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
                           </Link>
                           <p className="mt-2 block truncate text-sm font-medium text-gray-900">
                             {item.title}
                           </p>
                           <div className="flex flex-row mt-[3px]">
                             <svg
                               xmlns="http://www.w3.org/2000/svg"
                               color="blue"
                               fill="none"
                               viewBox="0 0 24 24"
                               strokeWidth="1.5"
                               stroke="currentColor"
                               className="inline w-5 h-5"
                             >
                               <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                               />
                             </svg>
                             <a
                               href={
                                 `https://sabbirontheweb.com` + `${item.link}`
                               }
                               className="ml-[3px] cursor-pointer text-md font-medium text-gray-500"
                             >
                               Download
                             </a>
                           </div>
                         </li>
                     )) : booksInfo.map((item) => (
                         <li key={item.id} className="relative">
                           <Link
                             href={{
                               pathname: "/Details",
                               query: { id: item.id },
                             }}
                           >
                             <div className="scale-95 transition hover:scale-100 aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                               <img
                                 src={
                                   item.image === "undefined"
                                     ? "https://i.imgur.com/bbMzfOf.jpg"
                                     : `https://sabbirontheweb.com` +
                                       `${item.image}`
                                 }
                                 alt=""
                                 className=" object-cover group-hover:opacity-75"
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
                           </Link>
                           <p className="mt-2 block truncate text-sm font-medium text-gray-900">
                             {item.title}
                           </p>
                           <div className="flex flex-row mt-[3px]">
                             <svg
                               xmlns="http://www.w3.org/2000/svg"
                               color="blue"
                               fill="none"
                               viewBox="0 0 24 24"
                               strokeWidth="1.5"
                               stroke="currentColor"
                               className="inline w-5 h-5"
                             >
                               <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                               />
                             </svg>
                             <a
                               href={
                                 `https://sabbirontheweb.com` + `${item.link}`
                               }
                               className="ml-[3px] cursor-pointer text-md font-medium text-gray-500"
                             >
                               Download
                             </a>
                           </div>
                         </li>
                       ))}
                 </ul>
               </div>
             </div>
           </div>
         </section>
       </main>
     </div>
   </div>
 );
 }

