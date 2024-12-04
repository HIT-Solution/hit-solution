"use client";
import React from "react";
import SimpleBackground from "../../components/SimpleBackground";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import contacLogo from "../../../public/contactlogo.jpeg";
import Image from "next/image";
const ContactUs = () => {
  return (
    <div className="">
      {/* <SimpleBackground> */}
      <h1 className="text-center text-5xl my-5">Contact with us</h1>
      <div className="grid md:grid-cols-2 gap-20 mx-5 my-16 lg:mx-10">
        <div className="space-y-5">
          <h1 className="text-4xl md:mt-6">
            Talk to us and <br />
            <span className="font-bold">
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
            alt=""
            src={contacLogo}
            width={400}
            height={400}
            quality={100}
          />
        </div>
        <div>
          <form className="p-7 bg-white shadow-2xl lg:mx-20 rounded-xl pt-10 space-y-2">
            <Input
              className="bg-teal-50 rounded-xl"
              type="text"
              variant="bordered"
              label="Name"
            />
            <Input
              required
              className="bg-teal-50 rounded-xl"
              type="email"
              variant="bordered"
              label="Email"
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
              label="Description"
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
          </form>
        </div>
      </div>
      {/* </SimpleBackground> */}
    </div>
  );
};

export default ContactUs;
