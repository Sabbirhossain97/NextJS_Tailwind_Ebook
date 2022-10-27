import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../api'

export default function Index() {

    const [booksInfo, setBooksInfo] = useState([])
    const [imageString, setImageString] = useState([])
    const [authors, setAuthors] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [authorCount, setAuthorCount] = useState(2)

    const getBooks = async (id) => {

        if (id) {
           
            let { data, error } = await supabase
                .from('books')
                .select('*')
                .eq('author_id', id)
            if (error) {
                console.log(error)
            } else {
                console.log(data)
                setBooksInfo(data)
            }
        }
        else {
            let { data, error } = await supabase
                .from('books')
                .select('*')
                .range(0, 7)

            if (error) {
                console.log(error)
            } else {
                console.log(data)
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

    const getBooksImage = async (e) => {
        let { data, error } = await supabase
            .from('books')
            .select('image')
        if (error) {
            console.log(error)
        } else {
            setImageString(data)
            // console.log(data)
        }
    }

    useEffect(() => {
        getBooks()
    }, [])

    useEffect(() => {
        getBooksImage()
    }, [])

    useEffect(() => {
        getAuthorsNames()
    }, [authorCount])


    return (

        <div>
            <div className="bg-white">
                <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-black bg-opacity-25"></div>
                    <div className="fixed inset-0 z-40 flex">
                        <div className="relative flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form className="mt-4 border-t border-gray-200">
                                <div className="border-t border-gray-200 px-4 py-6">
                                    <h3 className="-mx-2 -my-3 flow-root">
                                        <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                            <span className="font-medium text-gray-900">Authors</span>
                                            <span className="ml-6 flex items-center">

                                            </span>
                                        </button>
                                    </h3>
                                    <div className="pt-6" id="filter-section-mobile-0">
                                        <div className="space-y-6">
                                            <div className="flex items-center">
                                                <input id="filter-mobile-color-0" name="color[]" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-color-0" className="ml-3 min-w-0 flex-1 text-gray-500">Humayun Ahmed</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-color-1" name="color[]" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-color-1" className="ml-3 min-w-0 flex-1 text-gray-500">Jafor Iqbal</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-color-2" name="color[]" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-color-2" className="ml-3 min-w-0 flex-1 text-gray-500">Satyajit Roy</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <h3 className="-mx-2 -my-3 flow-root">
                                        <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                            <span className="font-medium text-gray-900">Category</span>
                                            <span className="ml-6 flex items-center">

                                            </span>
                                        </button>
                                    </h3>
                                    <div className="pt-6" id="filter-section-mobile-1">
                                        <div className="space-y-6">
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-0" name="category[]" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">Mystery</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-1" name="category[]" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Horror</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-2" name="category[]" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500">Sci-fi</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-3" name="category[]" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500">Detective</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-4" name="category[]" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-4" className="ml-3 min-w-0 flex-1 text-gray-500">Novel</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Bangla Ebook</h1>

                        <div className="flex items-center">
                            <div className="relative inline-block text-left">
                                <div>
                                    {/* <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                        Sort

                                        <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </button> */}
                                </div>

                            </div>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                <span className="sr-only">Filters</span>
                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">Products</h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                            <form className="hidden lg:block">

                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">
                                        <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                                            <span className="font-medium text-gray-900">Authors</span>
                                            <span className="ml-6 flex items-center">
                                            </span>
                                        </button>
                                    </h3>
                                    <div className="pt-6" id="filter-section-0">
                                        <div className="space-y-4">
                                            {authors.map((item) => (
                                                <li key={item.id} className='list-none'>
                                                    <div className="flex items-center">
                                                        <img className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white" src={item.image} alt="" />
                                                        <p onClick={() => getBooks(item.id)} className="cursor-pointer ml-3 text-sm text-gray-600">{item.name}</p>
                                                    </div>
                                                </li>
                                            ))}

                                            <div className='flex flex-row'>
                                                <button onClick={(e)=>fetchMoreAuthorByClick(e)} className='text-blue-500 hover:text-blue-700'>See more</button>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" color='blue' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-[5px] ml-[3px]">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">
                                        <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                            <span className="font-medium text-gray-900">Category</span>
                                            <span className="ml-6 flex items-center">
                                            </span>
                                        </button>
                                    </h3>
                                    <div className="pt-6" id="filter-section-1">
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <input id="filter-category-0" name="category[]" value="new-arrivals" type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-600">Mystery</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-category-1" name="category[]" value="sale" type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-category-1" className="ml-3 text-sm text-gray-600">Sci-fi</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-category-2" name="category[]" value="travel" type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-category-2" className="ml-3 text-sm text-gray-600">Romantic</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-category-3" name="category[]" value="organization" type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                < label htmlFor="filter-category-3" className="ml-3 text-sm text-gray-600">Detective</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-category-4" name="category[]" value="accessories" type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                < label htmlFor="filter-category-4" className="ml-3 text-sm text-gray-600">Adventure</label>
                                            
                                            </div>
                                        
                                        </div>
                                   
                                    </div>
                               
                                </ div>
                           
                            </form>

                            <div className="lg:col-span-3">

                                <div className="h-96 rounde d-lg border-4 p-5 border-gray-200 lg:h-full">
                            
                                    <ul role="list" className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">

                                        { booksInfo.map((item) => (
                                            <li key={item.id} className="relative">

                                                
                                                <div className="scale-95 transition hover:scale-100 aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                                   
                                                    <img src={`https://sabbirontheweb.com` + `${item.image}`} alt="" className=" object-cover group-hover:opacity-75" />
                                                  
                                                    <button type="button" className="absolute inset-0 focus:outline-none" >
                                                        <span className="sr-only">View details for IMG_4985.HEIC</span>
                                                    </button>
                                                </div>

                                                <p className="mt-2 block truncate text-sm font-medium text-gray-900">{item.title}</p>
                                                <div className='flex flex-row mt-[3px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" color="blue" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                    </svg>
                                                    <a href={`https://sabbirontheweb.com` + `${item.link}`} className="ml-[3px] cursor-pointer text-md font-medium text-gray-500">
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



    )
                                        }

