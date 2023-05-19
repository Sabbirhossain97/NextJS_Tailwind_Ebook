import React from "react";

export default function Categories() {
  const genres = [
    "Adventure",
    "Detective",
    "Drama",
    "Mystery",
    "Novel",
    "Poem",
    "Romantic",
    "Sci-fi",
    "Story",
    "Thriller",
  ];
  return (
    <div>
      <div className="mt-20">
        <h1 className=" text-center text-xl md:text-3xl font-semibold text-white">
          Featured Categories
        </h1>
        <hr className="w-10 md:w-10 h-1 md:h-2 mx-auto my-2 border-0 rounded-sm md:my-5 bg-teal-500" />
        <div className=" flex flex-col mt-20 items-center">
          <div className=" grid grid-cols-1 grid-rows-3 gap-y-12 md:grid-cols-3 md:grid-rows-3 lg:grid lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-5 xl:grid-rows-2 gap-x-8">
            {genres.map((item, key) => (
              <div
                key={key}
                className="shadow-lg relative border dark:border-zinc-700/90 rounded-xl h-52 w-52 md:h-52 md:w-52 flex flex-col items-center "
              >
                <div className="mt-8">
                  <img src={`Categories/${item}.png`} alt="error" />
                  <p className="mt-4 text-center font-medium dark:text-white">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
