import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { FaMicrochip, FaCloud, FaNetworkWired, FaCode } from "react-icons/fa"; // Import Icons

const Dashboard = () => {
  return (
    <Layout>
      <div className="relative flex items-center justify-center min-h-screen ">
        {/* Background Image */}
        {/* <div className="absolute inset-0">
          <img
            src="/path-to-your-bg-image.png" // Replace with your actual image path
            alt="Dashboard Background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div> */}

        {/* Main Content Box */}
        <div className="relative z-10 bg-white bg-opacity-95 rounded-lg shadow-xl w-[90%] max-w-5xl text-center p-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Welcome to <span className="text-teal-600">HIT SOLUTIONS</span>{" "}
            Dashboard
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-medium leading-relaxed">
            <span className="text-teal-600 font-extrabold text-xl">
              HIT SOLUTIONS
            </span>{" "}
            is an{" "}
            <span className="font-semibold text-gray-900">
              IoT & Software Development
            </span>{" "}
            company delivering
            <span className="text-teal-500 font-semibold">
              {" "}
              cutting-edge solutions
            </span>{" "}
            to drive
            <span className="text-gray-900 font-semibold">
              {" "}
              technology-driven businesses
            </span>
            .
          </p>

          {/* Additional Styling with Animated Effect */}
          <p className="mt-2 text-sm text-gray-600 italic animate-pulse">
            Innovate, Automate, and Elevate Your Business with Us!
          </p>
          {/* Services Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 hover:bg-teal-600 hover:text-white p-6 rounded-lg flex flex-col items-center transition shadow-lg">
              <FaMicrochip className="text-5xl" />
              <h3 className="mt-3 font-semibold text-lg">IoT Solutions</h3>
              <p className="text-sm mt-1">
                Smart automation and connected devices.
              </p>
            </div>
            <div className="bg-gray-100 hover:bg-teal-600 hover:text-white p-6 rounded-lg flex flex-col items-center transition shadow-lg">
              <FaCloud className="text-5xl" />
              <h3 className="mt-3 font-semibold text-lg">Cloud Computing</h3>
              <p className="text-sm mt-1">
                Scalable cloud solutions for businesses.
              </p>
            </div>
            <div className="bg-gray-100 hover:bg-teal-600 hover:text-white p-6 rounded-lg flex flex-col items-center transition shadow-lg">
              <FaNetworkWired className="text-5xl" />
              <h3 className="mt-3 font-semibold text-lg">
                Networking & Security
              </h3>
              <p className="text-sm mt-1">
                Secure and reliable network solutions.
              </p>
            </div>
            <div className="bg-gray-100 hover:bg-teal-600 hover:text-white p-6 rounded-lg flex flex-col items-center transition shadow-lg">
              <FaCode className="text-5xl" />
              <h3 className="mt-3 font-semibold text-lg">
                Software Development
              </h3>
              <p className="text-sm mt-1">
                Custom applications for businesses.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <Link href={"dashboard/services"}>
              <button className="bg-teal-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-teal-700 transition">
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
