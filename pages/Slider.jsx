import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

export default function Slider(props) {
 // console.log(props.category_name)
  return (
    <div>
      <div className="mt-[50px]">
        <h1 className="flex justify-center font-bold text-3xl text-gray-500 p-6 ">
          Related Books
        </h1>
        <div className="border-b w-1/4 flex justify-center mx-auto"></div>
        <div className="flex justify-center h-11/12 w-11/12 xl:w-2/3 2xl:w-1/2 items-center mx-auto ">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ padding: "47px" }}
          >
            <div className="">
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
              >
                {props.relatedBooks.map((val, key) => (
                  <SwiperSlide>
                    <li key={key} className="relative">
                      <Link
                        href={{
                          pathname: "/Details",
                          query: { id: val.id, category_name: props.category_name },
                        }}
                      >
                        <div className="group  block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                          <img
                            src={val.image}
                            alt=""
                            className="pointer-events-none object-cover group-hover:opacity-75"
                          />
                          <button
                            type="button"
                            className="absolute inset-0 focus:outline-none"
                          >
                            
                          </button>
                        </div>
                      </Link>                     
                    </li>
                  </SwiperSlide>
                ))}
              </ul>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
