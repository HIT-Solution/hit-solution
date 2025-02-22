"use client";
import React from "react";
// import SimpleBackground from "../../components/SimpleBackground";
// import { Button, Checkbox, Input } from "@nextui-org/react";
// import { Select, SelectItem } from "@nextui-org/react";
// import { Textarea } from "@nextui-org/react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import contacLogo from "../../../public/contactlogo.jpeg";
import Image from "next/image";
import ContactUsForm from "@/components/ContactUsForm";
import ReusableBackground from "@/components/ReusableBackground";
const ContactUs = () => {
  return (
    <ReusableBackground>
      <div className=" container mx-auto pt-20">
        {/* <SimpleBackground> */}
        <h1 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl ">
          Contact with us
        </h1>
        <div className="container justify-center mx-auto  items-center">
          <div className="space-y-8 lg:px-0 md:px-0 px-5">
            <h1 className="lg:text-4xl md:text-4xl text-2xl md:mt-6">
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

          <ContactUsForm />
          {/* <form className="p-7 bg-white shadow-2xl lg:mx-20 rounded-xl pt-10 space-y-2">
          <div className="grid grid-cols-2 gap-5">
            <Input
              required
              className="bg-teal-50 rounded-xl"
              type="text"
              variant="bordered"
              label="First Name"
            />
            <Input
              required
              className="bg-teal-50 rounded-xl"
              type="text"
              variant="bordered"
              label="Last Name"
            />
          </div>
          <Input
            required
            className="bg-teal-50 rounded-xl"
            type="email"
            variant="bordered"
            label="Email"
          />
          <Input
            className="bg-teal-50 rounded-xl"
            type="text"
            variant="bordered"
            label="Contact Number"
          />
          <Select
            required
            className="bg-teal-50 rounded-xl"
            variant="bordered"
            label="Budget Size"
          >
            <SelectItem>0-50k</SelectItem>
            <SelectItem>60k-100k</SelectItem>
            <SelectItem>101k-200k</SelectItem>
          </Select>
          <Textarea
            required
            className="bg-teal-50 rounded-xl"
            type="text"
            variant="bordered"
            label="Project Description"
          />
          <Input
            required
            className="bg-teal-50 rounded-xl"
            type="text"
            variant="bordered"
            label="How did you hear about us?"
          />
          <Checkbox color="success">This Project requires an NDA</Checkbox>
          <div>
            <Button
              className="bg-teal-500 border-teal-500 rounded-full"
              type="submit"
              color="success"
            >
              Submit
            </Button>
          </div>
        </form> */}
        </div>
        {/* </SimpleBackground> */}
      </div>
    </ReusableBackground>
  );
};

export default ContactUs;
