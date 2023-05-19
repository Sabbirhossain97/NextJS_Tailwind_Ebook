import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import Link from "next/link";

export default function RelatedBooks({ relatedBooks }) {
  return (
    <div className="bg-zinc-800 sm:overflow-hidden sm:rounded-lg">
      <div className="divide-y divide-zinc-600">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-xl font-medium text-gray-100">Related Books</h2>
        </div>
        <div className="bg-zinc-800">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{ delay: 1000 }}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1536: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            style={{ marginTop: "20px" }}
          >
            <ul className="">
              {relatedBooks.map((val, key) => (
                <SwiperSlide key={key}>
                  <li className="relative ">
                    <Link
                      href={{
                        pathname: "/Details",
                        query: {
                          id: val.id,
                          category_id: val.category_id,
                          category_name: val.categories.name,
                        },
                      }}
                    >
                      <div className=" group block w-full overflow-hidden rounded-md  ">
                        <img
                          src={val.image}
                          alt="error"
                          className=" rounded-md transition duration-200 pointer-events-none object-cover scale-95 group-hover:scale-100"
                        />
                        <button
                          type="button"
                          className="absolute inset-0 focus:outline-none"
                        ></button>
                      </div>
                    </Link>
                  </li>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
