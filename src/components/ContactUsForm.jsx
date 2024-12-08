"use client";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import {Checkbox} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import React from "react";
import {FaLongArrowAltRight} from "react-icons/fa";

const ContactUsForm = () => {
  return (
    <div className="my-32 mx-5 lg:mx-10">
      <div>
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>

        <div className=" md:px-20 lg:px-52">
          <form className="space-y-8 py-16 shadow-xl px-5 lg:px-16 rounded-lg">
            <div className="grid lg:grid-cols-2 gap-5 content-center">
              <Input
                className="bg-teal-50 rounded-xl"
                type="text"
                variant="bordered"
                label="First Name"
              />
              <Input
                className="bg-teal-50 rounded-xl"
                type="text"
                variant="bordered"
                label="Last Name"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-5 content-center">
              <Input
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
            </div>
            <div className="grid lg:grid-cols-2 gap-5 content-center">
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
              <Input
                required
                className="bg-teal-50 rounded-xl"
                type="text"
                variant="bordered"
                label="How did you hear about us?"
              />
            </div>
            <Textarea
              required
              className="bg-teal-50 rounded-xl"
              type="text"
              variant="bordered"
              label="Project Description"
            />
             <Checkbox color="success">This Project requires an NDA</Checkbox>
            <Button
              className="bg-teal-500 w-full"
              size="lg"
              variant="shadow"
              color="success"
            >
              Submit <FaLongArrowAltRight size={20} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
