import React from "react";

export default function ({authorBooks}) {
  return (
    <div>
      <ul className=" mt-[50px] space-y-4 sm:bg-zinc-800 xs:grid xs:grid-cols-2 xs:gap-2 xs:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:grid-cols-4 xl:grid-cols-5 ">
        {authorBooks.map((val, key) => (
          <li
            key={key}
            className="shadow-md shadow-black list-none scale-90 transition duration-500 ease-in-out hover:shadow-black hover:shadow-lg rounded-lg bg-zinc-900 py-2 px-2 text-center"
          >
            <div className="mt-2">
              <img
                className="object-cover mx-auto px-2 rounded-lg mt-4"
                src={val.image}
                alt="error"
              />
              <div className="h-12 mt-4 text-sm text-center font-medium leading-6">
                <h3 className="text-white text-center">{val.title}</h3>
              </div>
              <a
                href={`https://sabbirontheweb.com${val.link}`}
                className="block px-2 py-2 rounded-md text-center text-sm font-medium text-teal-500 hover:text-teal-400 sm:rounded-b-lg"
                download="example.pdf"
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
