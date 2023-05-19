import Link from "next/link";
import React from "react";

export default function Introduction() {
  return (
    <div>
      <div className="mt-0 bg-home-background relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-[550px]">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <div className="flex h-full items-center justify-center w-full">
            <div className="text-white text-center  mx-auto w-3/4 md:w-1/2">
              <h2 className="mb-4 text-xl md:text-4xl font-semibold text-teal-500">
                {" "}
                Welcome to Bangla Ebook!
              </h2>
              <h4 className="mb-6 text-sm md:text-xl font-semibold mt-8 text-gray-200">
                {" "}
                Find books from your desired Authors, Categories .Whether you're
                seeking timeless classics or the latest bestsellers, Bangla
                Ebook has it all.
              </h4>

              <div className="flex justify-center">
                <Link href="/Books">
                  <button className="inline-flex text-white bg-teal-600 border-0 py-2 px-4 focus:outline-none hover:bg-teal-500 rounded-full text-sm md:text-lg ">
                    Browse books
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
