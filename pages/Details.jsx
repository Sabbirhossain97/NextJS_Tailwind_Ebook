import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../api";
import Home from "./Home";
export default function Third() {
  const router = useRouter();
  const query = router.query;
  const bookId = query.id;
  console.log(bookId);
  const [booksInfo, setBooksInfo] = useState([]);
  const showBookDetails = async (e) => {
    let { data, error } = await supabase
      .from("books")
      .select("*")
      .match({ id: bookId });
    if (error) {
      console.log(error);
    } else {
      setBooksInfo(data);
      console.log(data);
    }
  };
  useEffect(() => {
    showBookDetails();
  }, []);

  return (
    <div>
      <Home />
      <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:ml-[300px] xl:gap-x-8">
            <div class="group">
              <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg"
                  alt="Person using a pen to cross a task off a productivity paper card."
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </div>

            <a href="#" class="group">
              <div class="mt-4 flex items-center justify-between text-base font-semibold text-gray-700">
                <h3>Title</h3>
              </div>
              <p class="mt-1 text-xl p-0 text-gray-500 ">
                Written by author_name
              </p>
              <div class=" mt-5 border-b"></div>
              <button class="ml-auto mt-3 flex rounded border-0 bg-indigo-500 py-2 px-6 text-white hover:bg-indigo-600 focus:outline-none">
                {" "}
                Download{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- author information --> */}
      <div className="w-1/2 mx-auto mt-[100px]">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Author Information
          </h3>
        </div>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">Margot Foster</span>
                <span className="ml-4 flex-shrink-0"></span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">
                Application for
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">Backend Developer</span>
                <span className="ml-4 flex-shrink-0"></span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">margotfoster@example.com</span>
                <span className="ml-4 flex-shrink-0">
                  {/* <button
                    type="button"
                    className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button> */}
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">
                Salary expectation
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">$120,000</span>
                <span className="ml-4 flex-shrink-0">
                  {/* <button
                    type="button"
                    className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button> */}
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </span>
                <span className="ml-4 flex-shrink-0">
                  {/* <button
                    type="button"
                    className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button> */}
                </span>
              </dd>
            </div>
            {/* <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 w-0 flex-1 truncate">
                        resume_back_end_developer.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex flex-shrink-0 space-x-4">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                      <span className="text-gray-300" aria-hidden="true">
                        |
                      </span>
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 w-0 flex-1 truncate">
                        coverletter_back_end_developer.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex flex-shrink-0 space-x-4">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                      <span className="text-gray-300" aria-hidden="true">
                        |
                      </span>
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                </ul>
              </dd>
            </div> */}
          </dl>
        </div>
      </div>
    </div>
  );
}
