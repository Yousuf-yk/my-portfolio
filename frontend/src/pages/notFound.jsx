import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center transition-colors dark:bg-gray-950">
      <h1 className="text-4xl font-extrabold text-gray-900 md:text-7xl dark:text-white">
        404 Not Found
      </h1>

      <div className="my-6 h-px w-64 rounded bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 md:w-80 dark:from-gray-700 dark:via-gray-400 dark:to-gray-700" />

      <p className="max-w-lg text-base text-gray-600 md:text-xl dark:text-gray-400">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 font-medium text-white transition-all hover:bg-gray-800 active:scale-95 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
      >
        Back to Home
        <svg
          className="transition-transform group-hover:translate-x-1"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}