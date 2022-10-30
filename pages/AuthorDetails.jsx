import React, { useEffect, useState } from 'react'
import Home from './Home'
import { useRouter } from "next/router";
import { supabase } from '../api';

export default function Second() {
  const router = useRouter();
  const query = router.query;
  const authorId = query.id;
 const [authorDetails, setAuthorDetails]=useState([])

  const getAuthorInfo= async(e)=>{
    let { data, error } = await supabase
      .from("authors")
      .select("*")
      .match({ id: authorId });
      if(error){
        console.log(error)
      } else {
        setAuthorDetails(data)          
         // const [getDescription] = authorDetails[0].description;
        //console.log(data);
      }
  }
  useEffect(()=>{
    getAuthorInfo()
  },[])
  return (
    <div>
      <Home />
      <div className="flex h-full">
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        ></div>

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              {authorDetails.map((item, key) => (
                <li key={key} className="list-none">
                  <article>
                    <div>
                      <div className="h-32 w-full object-cover lg:h-48 bg-black flex flex-col">
                        {/* <img
                          className="h-32 w-full object-cover lg:h-48 bg-black"
                          src={""}
                          alt=""
                        /> */}
                        <h1 className="text-white text-4xl flex justify-center items-center h-36">                          
                          {
                            item.description[Object.keys(item.description)[0]]
                          }
                        </h1>
                      </div>
                      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                          <div className="flex">
                            <img
                              className="ring-4 ring-white w-32 h-32 rounded-full"
                              src={item.image}
                              alt=""
                            />
                          </div>
                          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                              <h1 className="truncate text-2xl font-bold text-gray-900">
                                {item.name}
                              </h1>
                            </div>
                            {/* <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                              <svg
                                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                              </svg>
                              <span>Message</span>
                            </button>
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                              <svg
                                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span>Call</span>
                            </button>
                          </div> */}
                          </div>
                        </div>
                        <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                          <h1 className="truncate text-2xl font-bold text-gray-900">
                            {item.name}
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 sm:mt-2 2xl:mt-5">
                      <div className="border-b border-gray-200">
                        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                          <nav
                            className="-mb-px flex space-x-8"
                            aria-label="Tabs"
                          >
                            <a
                              href="#"
                              className="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                              aria-current="page"
                            >
                              Information
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-lg font-medium text-gray-500">
                            {Object.keys(item.description)[1]}
                          </dt>
                          <dd className="mt-1 text-md text-gray-900">
                            {item.description[Object.keys(item.description)[1]]}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-lg font-medium text-gray-500">
                            {Object.keys(item.description)[2]}
                          </dt>
                          <dd className="mt-1 text-md text-gray-900">
                            {item.description[Object.keys(item.description)[2]]}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-lg  font-medium text-gray-500">
                            {Object.keys(item.description)[3]}
                          </dt>
                          <dd className="mt-1 text-md text-gray-900">
                            {item.description[Object.keys(item.description)[3]]}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-lg font-medium text-gray-500">
                            {Object.keys(item.description)[4]}
                          </dt>
                          <dd className="mt-1 text-md text-gray-900">
                            {item.description[Object.keys(item.description)[4]]}
                          </dd>
                        </div>
                        {/* <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Location
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            San Francisco
                          </dd>
                        </div> 
                         <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Sits
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            Oasis, 4th floor
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Salary
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            $145,000
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Birthday
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            June 8, 1990
                          </dd>
                        </div> */}
                        <div className="sm:col-span-2">
                          <dt className="text-lg font-medium text-gray-500">
                            {Object.keys(item.description)[5]}
                          </dt>
                          <dd className="mt-1 max-w-prose space-y-5 text-md text-gray-900">
                            {/* <p>
                              Tincidunt quam neque in cursus viverra orci,
                              dapibus nec tristique. Nullam ut sit dolor
                              consectetur urna, dui cras nec sed. Cursus risus
                              congue arcu aenean posuere aliquam.
                            </p> */}
                            <p>
                              {
                                item.description[
                                  Object.keys(item.description)[5]
                                ]
                              }
                            </p>
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
                      <h2 className="text-sm font-medium text-gray-500">
                        Team members
                      </h2>
                      <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <a href="#" className="focus:outline-none">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              ></span>
                              <p className="text-sm font-medium text-gray-900">
                                Leslie Alexander
                              </p>
                              <p className="truncate text-sm text-gray-500">
                                Co-Founder / CEO
                              </p>
                            </a>
                          </div>
                        </div>
                        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <a href="#" className="focus:outline-none">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              ></span>
                              <p className="text-sm font-medium text-gray-900">
                                Michael Foster
                              </p>
                              <p className="truncate text-sm text-gray-500">
                                Co-Founder / CTO
                              </p>
                            </a>
                          </div>
                        </div>
                        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <a href="#" className="focus:outline-none">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              ></span>
                              <p className="text-sm font-medium text-gray-900">
                                Dries Vincent
                              </p>
                              <p className="truncate text-sm text-gray-500">
                                Manager, Business Relations
                              </p>
                            </a>
                          </div>
                        </div>
                        <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <a href="#" className="focus:outline-none">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              ></span>
                              <p className="text-sm font-medium text-gray-900">
                                Lindsay Walton
                              </p>
                              <p className="truncate text-sm text-gray-500">
                                Front-end Developer
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
