"use client";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/react";
// import { Select, SelectItem } from "@nextui-org/select";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    budget: "",
    referral: "",
    description: "",
    nda: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    console.log("FGDATA", formData);

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your message has been sent successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          budget: "",
          referral: "",
          description: "",
          nda: false,
        });
      } else {
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="lg:my-32 lg:max-w-7xl md:my-28 my-20 mx-5 lg:mx-10">
      <div>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-500 text-center">
          Contact Form
        </h1>

        <div>
          <form
            onSubmit={handleSubmit}
            className="space-y-8 py-16 shadow-xl px-5 lg:px-16 rounded-lg"
          >
            <div className="grid lg:grid-cols-2 gap-5 content-center">
              <Input
                className="bg-teal-50 rounded-xl"
                type="text"
                name="firstName"
                value={formData?.firstName}
                onChange={handleChange}
                required
                variant="bordered"
                label="First Name"
              />
              <Input
                className="bg-teal-50 rounded-xl"
                type="text"
                name="lastName"
                value={formData?.lastName}
                onChange={handleChange}
                required
                variant="bordered"
                label="Last Name"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-5 content-center">
              <Input
                className="bg-teal-50 rounded-xl"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
                required
                variant="bordered"
                label="Email"
              />
              <Input
                className="bg-teal-50 rounded-xl"
                type="number"
                name="contactNumber"
                value={formData?.contactNumber}
                onChange={handleChange}
                required
                variant="bordered"
                label="Contact Number"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-5 content-center">
              {/* <Select
                required
                className="bg-teal-50 rounded-xl"
                name="budget"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                variant="bordered"
                label="Budget Size"
              >
                <SelectItem value="0-50k">0-50k</SelectItem>
                <SelectItem value="60k-100k">60k-100k</SelectItem>
                <SelectItem value="101k-200k">101k-200k</SelectItem>
              </Select> */}
              <Input
                required
                className="bg-teal-50 rounded-xl"
                type="text"
                name="budget"
                value={formData?.budget}
                onChange={handleChange}
                variant="bordered"
                label="Your Budget"
              />
              <Input
                required
                className="bg-teal-50 rounded-xl"
                type="text"
                name="referral"
                value={formData?.referral}
                onChange={handleChange}
                variant="bordered"
                label="How did you hear about us?"
              />
            </div>
            <Textarea
              required
              className="bg-teal-50 rounded-xl"
              type="text"
              name="description"
              value={formData?.description}
              onChange={handleChange}
              variant="bordered"
              label="Project Description"
            />
            <Checkbox
              color="success"
              name="nda"
              required
              checked={formData?.nda}
              onChange={handleChange}
            >
              This Project requires an NDA
            </Checkbox>
            {/* <Button
              className="bg-teal-500 w-full"
              size="lg"
              variant="shadow"
              color="success"
              type="submit"
            >
              {loading} Submit <FaLongArrowAltRight size={20} />
            </Button> */}

            <Button
              className="bg-teal-500 w-full"
              size="lg"
              variant="shadow"
              color="success"
              type="submit"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                <>
                  Submit <FaLongArrowAltRight size={20} />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
