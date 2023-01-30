import React from 'react'

export default function Spinner() {
  return (
    <span className="bg-zinc-800 h-screen w-full flex justify-center items-center">
      <span className="animate-spin relative flex h-10 w-10 rounded-sm bg-teal-500 "></span>
    </span>
  );
}

