// pages/404.js
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-teal-200 flex flex-col items-center justify-center text-gray-800 p-4">
      <div className="text-center">
        <img
          src="https://i.ibb.co.com/CP1yWc8/DALL-E-2025-01-12-09-54-44-A-sleek-404-error-illustration-designed-for-HIT-Solutions-using-teal-gray.webp"
          alt="404 Illustration"
          className="w-full max-w-sm mx-auto mb-6 drop-shadow-lg rounded-3xl border-4 border-teal-500 bg-gradient-to-r from-gray-100 to-teal-200 p-2 shadow-2xl hover:scale-105 transition-transform duration-300"
        />

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-teal-600 mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link href="/">
          <p className="flex items-center justify-center bg-teal-600 text-white px-6 py-3 md:px-4 md:py-2 rounded-full text-sm md:text-base lg:text-lg shadow-md hover:bg-teal-700 hover:shadow-lg transition-transform transform hover:scale-105">
            <AiOutlineHome className="mr-2 text-xl md:text-2xl" />
            Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
}
