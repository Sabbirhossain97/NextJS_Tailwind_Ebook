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
      
        
       
       
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            style={{ padding: "50px" }}
          >
            <div className="">
              <ul
                
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
    
  );
}
