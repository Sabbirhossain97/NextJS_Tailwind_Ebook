import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Authors() {
  const [authorImg, setAuthorImg] = useState(null);

  const getAuthorPictures = async () => {
    try {
      let { data, error } = await supabase.from("authors").select("*");
      if (error) {
        console.log(error);
      } else {
        setAuthorImg(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuthorPictures();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="bg-zinc-800 py-24 sm:py-32  w-10/12 mx-auto">
        <div className="mx-auto grid w-11/12 md:w-3/4 gap-x-2 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className=" max-w-3xl col-span-1 " data-aos="fade-right">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white px-4 border-l-8 border-teal-500">
              Featured Authors
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-400 text-left">
              Embark on a literary journey like never before. Discover
              captivating stories, dive into enchanting worlds, and unleash your
              imagination. Discover a world of books at your fingertips.
            </p>
          </div>

          <SimpleBar
            className="
               transition duration-300 ease-in-out ml-0 md:ml-0 xl:ml-20 h-[450px]  grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <ul
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12  w-full"
              data-aos="fade-left"
            >
              {authorImg
                ? authorImg.map((item, key) => (
                    <li key={key} className="ml-2 mt-2 list-none">
                      <div className="flex items-center gap-x-6">
                        <img
                          className=" shadow-md h-24 w-24 rounded-full object-cover object-center border border-gray-200"
                          src={item.image}
                          alt=""
                        />
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))
                : ""}
            </ul>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
}
