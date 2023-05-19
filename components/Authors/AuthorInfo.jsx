import React from "react";

export default function SingleAuthorBook({ val }) {
  const information = [
    {
      field: 1,
      gridStyles: "col-span-1",
    },
    {
      field: 2,
      gridStyles: "col-span-1",
    },
    {
      field: 3,
      gridStyles: "col-span-1",
    },
    {
      field: 4,
      gridStyles: "col-span-1",
    },
    {
      field: 5,
      gridStyles: "col-span-2",
    },
  ];
  return (
    <div>
      <div className=" px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-8 ">
          {information.map((item, key) => (
            <li key={key} className={`${item.gridStyles} list-none`}>
              <dt className="text-md font-bold text-gray-100">
                {Object.keys(val.authors.description)[item.field]}
              </dt>

              <dd className="mt-1 text-md font-normal text-gray-400">
                {
                  val.authors.description[
                    Object.keys(val.authors.description)[item.field]
                  ]
                }
              </dd>
            </li>
          ))}
        </dl>
      </div>
      <div>
        <div className="mt-[20px] flex justify-center">
          <a
            href={`https://sabbirontheweb.com${val.link}`}
            className="block bg-zinc-700 px-2 py-2 rounded-md text-center text-lg sm:w-full xs:w-11/12 font-medium text-teal-500 hover:text-teal-400 hover:bg-zinc-600/80 sm:rounded-b-lg"
            download={`https://sabbirontheweb.com${val.link}`}
            target="_self"
          >
            Download Book
          </a>
        </div>
      </div>
    </div>
  );
}
