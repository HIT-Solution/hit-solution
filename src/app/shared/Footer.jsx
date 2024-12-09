import SocialSharing from "@/components/SocialSharing";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="relative  h-[850px] md:h-[400px] mt-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            className="brightness-50"
            src={"/5125962.jpg"}
            alt="Blog Header"
            layout="fill" // Makes the image fill its container
            objectFit="cover" // Ensures the image covers the container proportionally
            quality={100}
          />
        </div>
        <div className="absolute inset-0 mx-5 lg:mx-10 lg:p-10">
          <div className=" flex flex-col md:flex-row gap-10 justify-between">
            <div className="md:w-[350px]">
              <div className="p-5 rounded-full bg-gray-300 w-[120px] h-[120px] mt-10">
                {" "}
                <Image
                  src={"/logo.png"}
                  height={150}
                  width={150}
                  quality={100}
                  alt=""
                />
              </div>
              <h1 className="text-gray-400 mt-5 text-justify">
                We are a leading software development company specializing in
                innovative, scalable, and client-centric digital solutions.
              </h1>
              <SocialSharing />
            </div>
            <div className="space-y-3">
              <h1 className="text-gray-200 text-xl font-semibold mb-5">
                Quick Links
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link href={"/"}>Home</Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link href={"/services"}>Services</Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link href={"/portfolio"}>Portfolio</Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link href={"blogs"}>Blogs</Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link href={"/technologies"}>Technologies</Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link href={"/aboutUs"}>About Us</Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link href={"/contact"}>Contact</Link>
              </h1>
            </div>
            <div className="space-y-3">
              <h1 className="text-gray-200 text-xl font-semibold mb-5">
                Legal
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link href={"/"}>Terms of use</Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link href={"/"}>Privacy policy</Link>
              </h1>
              <h1 className=" text-gray-400 font-semibold">
                <Link href={"/"}>Cookie policy</Link>
              </h1>
            </div>
          </div>
          <h1 className="text-gray-300 mt-7 text-center">
            © 2024 <span className="text-teal-400">Hit Solution</span>. All
            Rights Reserved.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Footer;
