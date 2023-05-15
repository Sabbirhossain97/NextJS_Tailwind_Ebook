import React, { useState } from "react";

export default function Spinner() {
  const [progress, setLinearProgress] = useState(0);

  setTimeout(() => {
    setLinearProgress(100);
  }, 1000);

  console.log(progress);
  return (
    <div className="bg-zinc-800 h-screen w-full flex flex-col justify-center items-center">
      <img src="book.svg" className="h-12 w-12" />
      <div className="w-[50px] bg-gray-200 rounded-lg h-1 dark:bg-gray-700 mt-4">
        <div
          className="bg-teal-500 h-1 rounded-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
