"use client";
import React from "react";
import BackgroundModel from "../../components/BackgroundModel";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const ContactUs = () => {
  return (
    <div>
      <BackgroundModel>
        <h1 className="text-center text-5xl my-5">Contact with us</h1>
        <div className="grid md:grid-cols-2 gap-20 mx-5 mt-16 lg:mx-10">
          <div className="space-y-5">
            <h1 className="text-4xl md:mt-20">Talk to us and <br />
           <span className="font-bold"> get your project moving!</span></h1>
           <h1 className="flex gap-2 items-center text-lg">
          <span className="text-teal-500"> <IoCheckmarkCircleOutline size={23} /></span>
           We will respond to you within 24 hours.</h1>
           <h1 className="flex gap-2 items-start text-lg">
          <span className="text-teal-500"> <IoCheckmarkCircleOutline size={23} /></span>
          You&apos;ll be talking to product and tech experts (no account managers).</h1>
          </div>
          <div>
            <form className="p-7 bg-white shadow-2xl lg:mx-20 rounded-xl space-y-5">
              <Input className="bg-teal-50 rounded-xl" type="text" variant="bordered" label="Name" />
              <Input className="bg-teal-50 rounded-xl" type="email" variant="bordered" label="Email" />
              <Select className="bg-teal-50 rounded-xl" variant="bordered" label="Budget Size">
                <SelectItem>0k-50k</SelectItem>
                <SelectItem>60k-100k</SelectItem>
                <SelectItem>101k-200k</SelectItem>
              </Select>
              <Textarea className="bg-teal-50 rounded-xl" type="text" variant="bordered" label="Description" />
              <Input className="bg-teal-50 rounded-xl" type="text" variant="bordered" label="How did you hear about us?" />
              <Checkbox color="success">This Project requires an NDA</Checkbox>
              <div>
                <Button className="bg-teal-500 border-teal-500 border-2" type="submit" color="success">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </BackgroundModel>
    </div>
  );
};

export default ContactUs;
