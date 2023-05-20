import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Overview() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const animations = [
    {
      name: "fade-right",
      description: "So many books to choose from",
    },
    {
      name: "fade-left",
      description: "Find your desired book",
    },
    {
      name: "fade-right",
      description: "Know about the authors",
    },
    {
      name: "fade-left",
      description: " Get books from your desired category",
    },
    {
      name: "fade-right",
      description: "Get related books",
    },
    {
      name: "fade-left",
      description: "Download for free",
    },
  ];
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div
          className="w-full  flex justify-center items-center"
          data-aos="fade-up"
        >
          <h2 className="text-xl md:text-3xl text-center font-bold tracking-tight text-white px-4 py-2 ">
            Overview
          </h2>
        </div>
        <hr
          class="w-10 md:w-10 h-1 md:h-2 mx-auto my-2 border-0 rounded-sm md:my-2 bg-teal-500"
          data-aos="fade-up"
        />
        <section class="text-gray-100 body-font">
          <div class="container px-5 py-16 mx-auto">
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {/* insert here */}
              {animations.map((item, key) => (
                <div class="p-2 sm:w-1/2 w-full" data-aos={item.name}>
                  <div class="bg-zinc-700/50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-teal-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>

                    <span class="title-font font-medium">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}

              {/* <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-zinc-700/50 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-teal-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">
                    Find your desired book
                  </span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-zinc-700/50 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-teal-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">
                    Know about the authors
                  </span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-zinc-700/50 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-teal-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">
                    Get books from your desired category
                  </span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-zinc-700/50 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-teal-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Get related books</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-zinc-700/50 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-teal-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Download for free</span>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}