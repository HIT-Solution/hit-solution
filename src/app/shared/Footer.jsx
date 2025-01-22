import ReusableBackground from "@/components/ReusableBackground";
import SocialSharing from "@/components/SocialSharing";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="relative h-[930px] md:h-[550px]  pt-32">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            className="brightness-50"
            src={"/5125962.jpg"}
            alt="Blog Header"
            layout="fill" // Makes the image fill its container
            style={{ objectFit: "cover" }} // Ensures the image covers the container proportionally
            quality={100}
          />
        </div>
        <div className="absolute inset-0 mx-5 lg:mx-10 lg:p-10">
          <div className=" flex flex-col md:flex-row gap-10 justify-between">
            <div className="md:w-[350px]">
              <div className="p-2 sm:p-5 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] mt-10 mx-auto">
                <Image
                  src={"/logo.png"}
                  height={200}
                  width={200}
                  quality={100}
                  alt="Logo"
                  className="object-contain"
                />
              </div>
              <h1 className="text-gray-400 mt-5 text-justify">
                We are a leading software development company specializing in
                innovative, scalable, and client-centric digital solutions.
              </h1>
              <SocialSharing />
            </div>
            <div className="space-y-3">
              <h1 className="text-gray-200  text-xl font-semibold mb-5">
                Quick Links
              </h1>
              <h1 className=" text-gray-400  font-semibold">
                <Link className=" hover:text-white" href={"/"}>
                  Home
                </Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link className=" hover:text-white" href={"/services"}>
                  Services
                </Link>
              </h1>
              <h1 className=" text-gray-400  font-semibold">
                <Link className=" hover:text-white" href={"/products"}>
                  Products
                </Link>
              </h1>
              <h1 className=" text-gray-400  font-semibold">
                <Link className=" hover:text-white" href={"blogs"}>
                  Blogs
                </Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link className=" hover:text-white" href={"/career"}>
                  Career
                </Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link className=" hover:text-white" href={"/technologies"}>
                  Technologies
                </Link>
              </h1>
              <h1 className=" text-gray-400  font-semibold">
                <Link className=" hover:text-white" href={"/aboutUs"}>
                  About Us
                </Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link className=" hover:text-white" href={"/contact"}>
                  Contact
                </Link>
              </h1>
            </div>
            <div className="space-y-3">
              <h1 className="text-gray-200 text-xl font-semibold mb-5">
                Legal
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link className=" hover:text-white" href={"/"}>
                  Terms of use
                </Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link
                  className=" hover:text-white"
                  href={"/policy/privicypolicy"}
                >
                  Privacy policy
                </Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link className=" hover:text-white" href={"/"}>
                  Cookie policy
                </Link>
              </h1>
            </div>
          </div>
          <h1 className="text-gray-300 pt-12 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-teal-400">Hit Solution</span>. All Rights
            Reserved.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Footer;
