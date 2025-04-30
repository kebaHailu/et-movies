import Logo from "../assets/images/et_logo.png";
export const Footer = () => {
  return (
    <footer className="bg-gray-50 rounded-lg  border-2 border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto   p-4  md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ET-Movies
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.linkedin.com/in/kibrom-hailu/"
                className="hover:underline me-4 md:me-6"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kibromhail"
                className="hover:underline me-4 md:me-6"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kebaHailu"
                className="hover:underline"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://realpick.tech" className="hover:underline">
            ETMovies™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
