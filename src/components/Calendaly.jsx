"use client";
import React, { useState } from "react";

import profile from "../../public/clinet-profile/profile6.webp";
import Image from "next/image";

const Calendaly = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && (
        <div className="fixed right-4 bottom-4 z-30 bg-gradient-to-tr from-teal-400 to-emerald-700 lg:p-4 p-1 rounded-lg shadow-xl flex items-center space-x-3 border border-gray-200">
          {/* Profile Section */}
          <a
            href="https://calendly.com/hitsubscription"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="relative">
              <Image
                src={profile} // Replace with your profile image
                alt="Profile"
                className="lg:w-12 lg:h-12 md:w-10 w-8 md:h-10 h-8 rounded-full border-2 border-white shadow-lg"
              />
              {/* Online Indicator */}
              <span className="absolute bottom-0 top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
          </a>
          <a
            href="https://calendly.com/hitsubscription"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* Text and Button */}
            <div className="flex flex-col">
              <p className="text-sm font-medium text-white">
                Consult with Us for Free
              </p>
              <p className="text-blue-600 text-base font-semibold flex items-center mt-1 hover:text-blue-800 transition-all">
                Book a Slot →
                <img
                  src="https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg"
                  alt="Calendly Logo"
                  className="w-4 h-4 ml-1"
                />
              </p>
            </div>
          </a>
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className=" text-gray-200 top-0 hover:text-gray-600 transition-all"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Calendaly;
