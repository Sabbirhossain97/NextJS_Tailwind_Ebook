export default function Footer() {
  return (
    <div>
      <footer className="p-4 shadow md:px-6 md:py-8 bg-zinc-800">
        <hr className="my-6 xs:mx-auto sm:mx-auto border-zinc-600/80 lg:my-8 xs:w-11/12 sm:w-3/4" />
        <span className="font-semibold block text-sm text-gray-500 xs:text-center sm:text-center dark:text-gray-400">
          <span className="text-teal-500">©</span> 2023{" "}
          <a href="#" className="pointer-events-none hover:underline">
            Bangla Ebook
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
