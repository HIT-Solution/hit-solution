import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FaLongArrowAltRight} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-black to-teal-900 py-20">
        <div className="grid lg:grid-cols-2 gap-10 mx-5 lg:mx-10">
          <div>
            <h1 className="text-4xl text-gray-300">Contact</h1>
            <h1 className="text-6xl text-teal-400 font-bold my-10">
              We Would Love to Hear From You
            </h1>
            <p className="text-lg text-gray-400">
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
              className="object-cover rounded-tr-[120px] rounded-bl-[120px]"
            />
          </div>
        </div>
      </div>

      <div id="contactForm">

      </div>
    </div>
  );
};

export default Contact;
