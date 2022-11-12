

export default function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-zinc-800">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="#" className="pointer-events-none hover:underline">
            Bangla Ebook
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
