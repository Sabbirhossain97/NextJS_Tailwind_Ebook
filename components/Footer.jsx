export default function Footer() {
  return (
    <div>
      <footer className="p-4  shadow md:px-6 md:py-8 bg-zinc-800">
        <hr className="my-6 sm:mx-auto border-zinc-600/80 lg:my-8 w-2/3" />
        <span className="font-semibold block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <span className="text-teal-500">©</span> 2022{" "}
          <a href="#" className="pointer-events-none hover:underline">
            Bangla Ebook
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
