"use client";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ApplicationForm = ({ id }) => {
  return (
    <div>
      <div className="mx-5 lg:mx-28 py-20">
        <h1 className="font-bold text-5xl">Frontend Developer (React)</h1>
        <p className="text-xl my-10">
          We are seeking a skilled Frontend Developer with a Bachelor of Science
          (BSc) to join our dynamic team. The ideal candidate will have strong
          proficiency in ReactJS and NextJS, along with experience in
          TypeScript, JavaScript (ES6+), HTML5, and CSS3. You will be
          responsible for designing, developing, and maintaining responsive web
          applications, collaborating closely with design and backend teams to
          implement new features while ensuring technical feasibility.
        </p>
        <h1 className="text-3xl font-semibold">
          Responsibilities and Requirements
        </h1>
        <h1 className="text-2xl font-semibold mt-10 mb-4">Requirements:</h1>
        <div className="text-lg space-y-5">
          <li>Bachelor of Science (BSc). </li>
          <li>Strong proficiency in ReactJS and NextJS. </li>
          <li>
            Experience with TypeScript, JavaScript (ES6+), HTML5, and CSS3.
          </li>
          <li>
            Familiarity with CSS preprocessors (e.g., SASS, LESS) and experience
            with UI component libraries (e.g., Material-UI, Ant Design) for
            enhanced styling capabilities and efficient UI development.
          </li>
          <li>
            Proficient in writing reusable components, with a strong
            understanding of responsive design and cross-browser compatibility.
          </li>
          <li>
            Experienced in managing state efficiently with library like React
            Context, Redux, and data-fetching libraries like RTK Query, React
            Query, and SWR to optimize client and server-side performance
          </li>
          <li>
            Experience working with RESTful APIs, GraphQL, or similar
            data-fetching strategies.
          </li>
          <li>
            Familiarity with frontend development tools and workflows (e.g.,
            Webpack, Vite, etc).
          </li>
          <li>
            Proficiency in using browser developer tools for debugging and
            performance analysis, along with familiarity with design tools
            (e.g., Figma, Adobe XD) to collaborate effectively with designers.
          </li>
        </div>
        <h1 className="text-3xl font-semibold my-10">
          Responsibilities & Context:
        </h1>
        <div className="text-lg space-y-5">
          <li>
            Design, develop, and maintain responsive web applications using
            ReactJS and NextJS.{" "}
          </li>
          <li>
            Collaborate with the design and backend teams to implement new
            features and ensure technical feasibility.
          </li>
          <li>
            Manage and optimize client-side and server-side state to ensure high
            performance and seamless user experiences.{" "}
          </li>
          <li>
            Write clean, maintainable, and reusable code, following best
            practices.
          </li>
          <li>
            Debug and troubleshoot issues across a variety of browsers and
            devices.{" "}
          </li>
          <li>
            Participate in code reviews to ensure quality and performance.
          </li>
          <li>
            Stay up-to-date with the latest industry trends and technologies,
            particularly in ReactJS and NextJS ecosystems.
          </li>
        </div>
        <h1 className="text-3xl font-semibold my-10">
          Compensation & Other Benefits:
        </h1>
        <div className="text-lg space-y-1">
          <li>Universal Pension Scheme</li>
          <li>Lunch Facilities: Partially Subsidized</li>
          <li>Weekly two holidays (Saturday - Sunday)</li>
          <li>Medical benefit (Employee Only)</li>
          <li>Salary Review: Yearly</li>
          <li>Festival Bonus: 3 (Yearly)</li>
        </div>
        <h1 className="text-2xl font-bold my-10">
          Deadline: <span className="font-normal"> November 22, 2024</span>
        </h1>
        <h1 className="text-2xl font-bold my-10">
          Salary: <span className="font-normal"> 90k-100k</span>
        </h1>
      </div>
      <div
        id={id}
        className="bg-gradient-to-br from-black to-teal-900 py-20 border-teal-400 border"
      >
        <h1 className="text-gray-200 font-bold text-5xl pt-10 text-center  mx-5 lg:mx-10">
          Application Form
        </h1>
        <p className="text-xl text-gray-300 pt-5 pb-10 text-center mx-5 lg:mx-10">
          Your journey starts here — complete the application form and
          let&apos;s build the future together!
        </p>
        <div className="flex justify-center items-center">
          {/*====== Form ======*/}
          <form className="space-y-10 mx-5 lg:mx-10">
            <div className="grid lg:grid-cols-2 gap-5">
              <Input
                className="w-[340px]"
                color="success"
                label="First Name"
                placeholder="Enter your firs name"
                type="text"
              />
              <Input
                className="w-[340px]"
                color="success"
                label="Last Name"
                placeholder="Enter your last name"
                type="text"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
              <Select
                className="w-[340px]"
                label="Gender"
                color="success"
                placeholder="Select your gender"
              >
                <SelectItem key="male" value="male">
                  Male
                </SelectItem>
                <SelectItem key="female" value="female">
                  Female
                </SelectItem>
              </Select>
              <div>
                <DatePicker
                  color="success"
                  className="w-[340px]"
                  label="Date"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
              <Input
                className="w-[340px]"
                color="success"
                label="Contact"
                placeholder="Enter your contact number"
                type="text"
              />
              <Input
                className="w-[340px]"
                color="success"
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
              <Input
                className="w-[340px]"
                color="success"
                label="Position"
                placeholder="Enter position"
                type="text"
              />
              <Input
                className="w-[340px]"
                color="success"
                label="Experience"
                placeholder="Enter your experience (in year)"
                type="text"
              />
            </div>
            <Input
              className="w-full"
              color="success"
              label="Address"
              placeholder="Enter your address"
              type="text"
            />
            <Textarea
              className="w-full"
              size="sm"
              color="success"
              label="Cover Letter"
              placeholder="type your cover letter here"
            />
            <Input
              className="w-full"
              color="success"
              label="Attach CV (PDF)"
              placeholder="Enter your address"
              type="file"
            />
            <Button
              className="bg-teal-500 w-full"
              size="lg"
              variant="shadow"
              color="success"
            >
              Apply Now <FaLongArrowAltRight size={20} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
