import ContactUsForm from "@/components/ContactUsForm";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
const Contact = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-black to-teal-900 py-20">
        <div className="grid lg:grid-cols-2 gap-10 mx-5 lg:mx-10">
          <div>
            <h1 className="md:text-4xl text-3xl text-gray-300">Contact</h1>
            <h1 className="md:text-6xl text-4xl text-teal-400 font-bold my-10">
              We Would Love to Hear From You
            </h1>
            <p className="text-lg text-gray-400 text-justify">
              Have questions or need assistance? Get in touch with our team —
              we're here to help you with your next big idea or project. Let's
              connect and create something amazing together!
            </p>
            <div>
              <Link href={"#contactForm"}>
                <Button
                  className="bg-teal-500 mt-5"
                  size="lg"
                  variant="shadow"
                  color="success"
                >
                  Send Message <FaLongArrowAltRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"/cropped-view-hands-typing-laptop.jpg"}
              alt=""
              width={600}
              height={400}
              quality={100}
              loading="lazy"
              className="object-cover rounded-tr-[120px] rounded-bl-[120px]"
            />
          </div>
        </div>
      </div>

      {/* This is Contuct From  */}

      <div id="contactForm" className="">
        <ContactUsForm />
      </div>

      <div className="bg-gradient-to-br from-black to-teal-900 py-20 my-10">
        <div className="flex flex-col lg:flex-row mx-5 gap-5 lg:mx-10 justify-center items-center">
          <div className="flex gap-5 items-center w-[330px] md:w-[400px] h-[180px] px-3 py-10 shadow-2xl border-teal-400 border">
            <div className="bg-red-200 p-3 rounded-full">
              <FaLocationDot size={27} />
            </div>
            <div>
              <h1 className="text-2xl text-teal-400">Location:</h1>
              <p className="text-gray-300">
                H 20, Lutfunnesa Road, Priyanka City, Sector 12, Uttara, Dhaka,
                Bangladesh.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center w-[330px] md:w-[400px] h-[180px] px-3 py-10 shadow-2xl border-teal-400 border">
            <div className="bg-green-200 p-3 rounded-full">
              <MdEmail size={27} />
            </div>
            <div>
              <h1 className="text-2xl text-teal-400">Email:</h1>
              <p className="text-gray-300">hasansit48@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-5 items-center w-[330px] md:w-[400px] h-[180px] px-3 py-10 shadow-2xl border-teal-400 border">
            <div className="bg-blue-200 p-3 rounded-full">
              <FaPhone size={27} />
            </div>
            <div>
              <h1 className="text-2xl text-teal-400">Mobile:</h1>
              <p className="text-gray-300">+8801950090248</p>
            </div>
          </div>
          <div className="flex gap-5 items-center w-[330px] md:w-[400px] h-[180px] px-3 py-10 shadow-2xl border-teal-400 border">
            <div className="bg-yellow-200 p-3 rounded-full">
              <IoMdTime size={27} />
            </div>
            <div>
              <h1 className="text-2xl text-teal-400">Open Hours:</h1>
              <p className="text-gray-300">Sun-Thu : 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
