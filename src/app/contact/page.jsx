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
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import contacLogo from "../../../public/contactlogo.jpeg";
import ReusableBackground from "@/components/ReusableBackground";
const Contact = () => {
  return (
    <div>
      <ReusableBackground>
        <div className="bg-gradient-to-br from-black to-teal-900">
          <ReusableBackground>
            <div className="grid lg:grid-cols-2 gap-10 mx-5 lg:mx-10 py-28">
              <div>
                <h1 className="md:text-4xl text-3xl text-gray-300">Contact</h1>
                <h1 className="md:text-6xl text-4xl text-teal-400 font-bold my-10">
                  We Would Love to Hear From You
                </h1>
                <p className="text-lg text-gray-400 text-justify">
                  Have questions or need assistance? Get in touch with our team
                  — we're here to help you with your next big idea or project.
                  Let's connect and create something amazing together!
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
                  alt="abc"
                  width={600}
                  height={400}
                  quality={100}
                  loading="lazy"
                  className="object-cover rounded-tr-[120px] rounded-bl-[120px]"
                />
              </div>
            </div>
          </ReusableBackground>
        </div>

        {/* This is Contuct From  */}
        <h3 className="text-5xl font-serif container mx-auto pt-12">
          <span className="font-bold">Hello.</span> How can we help you?
        </h3>
        <div className="grid grid-cols-2 container mx-auto items-center">
          <div className="lg:space-y-12 lg:px-0 md:px-0 px-5">
            <h1 className="lg:text-4xl md:text-4xl text-2xl">
              Talk to us and <br />
              <span className="font-semibold">
                {" "}
                get your project moving <span className="text-teal-500">!</span>
              </span>
            </h1>
            <h1 className="flex gap-2 items-center text-lg">
              <span className="text-teal-500">
                {" "}
                <IoCheckmarkCircleOutline size={23} />
              </span>
              We will respond to you within 24 hours.
            </h1>
            <h1 className="flex gap-2 items-start text-lg">
              <span className="text-teal-500">
                {" "}
                <IoCheckmarkCircleOutline size={23} />
              </span>
              You&apos;ll be talking to product and tech experts (no account
              managers).
            </h1>
            <Image
              className="rounded-2xl"
              alt="abc"
              src={contacLogo}
              width={400}
              height={400}
              quality={100}
            />
          </div>

          <div id="contactForm">
            <ContactUsForm />
          </div>
        </div>

        {/* google map  */}
        <div className="relative w-full container mx-auto py-4">
          <h1 className="text-5xl  text-teal-600 py-12 font-semibold">
            OUR <span className="text-black">OFFICE </span>LOCATION
          </h1>
          <div className="overflow-hidden bg-none w-full h-[600px] rounded-lg shadow-lg border border-gray-300">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Green Multimedia Ltd. (Green TV), Rongdhanu Corporate Building (opposite to South gate of Jamuna Future Park)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="bg-gradient-to-br  from-black to-teal-900 py-20 ">
          <ReusableBackground>
            <div className="flex flex-col container mx-auto lg:flex-row gap-5  justify-center items-center">
              <div className="flex gap-5 items-center w-[330px] md:w-[400px] h-[180px] px-3 py-10 shadow-2xl border-teal-400 border">
                <div className="bg-red-200 p-3 rounded-full">
                  <FaLocationDot size={27} />
                </div>
                <div>
                  <h1 className="text-2xl text-teal-400">Location:</h1>
                  <p className="text-gray-300">
                    H 20, Lutfunnesa Road, Priyanka City, Sector 12, Uttara,
                    Dhaka, Bangladesh.
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
          </ReusableBackground>
        </div>

        {/*Goole map sections  */}
      </ReusableBackground>
    </div>
  );
};

export default Contact;
