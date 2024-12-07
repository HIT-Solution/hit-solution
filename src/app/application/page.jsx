import ApplicationForm from "../../components/ApplicationForm";
import Image from "next/image";
import React from "react";

const Application = () => {
  return (
    <div>
      <div className="py-20 bg-gradient-to-br from-black to-teal-900">
        <div className="grid lg:grid-cols-2 gap-5 content-center mx-5 lg:mx-10">
          <div className="space-y-8">
            <h1 className="text-5xl text-gray-200">Career</h1>
            <h1 className="text-6xl font-bold text-gray-200">
              Application Form
            </h1>
            <h1 className="text-3xl  text-gray-300">
              Advance Your Career with Us!
            </h1>
            <p className="text-gray-400">
              Ready to shape the future of technology? Complete the application
              form with your details, skills, and aspirations. Let us discover
              the talent you bring, and together, let&apos;s craft a future full
              of innovation and success.
            </p>
          </div>
          <div>
            <Image
              className="rounded-tl-[120px] rounded-br-[120px]"
              src={"/close-up-female-hands-typing-laptop-table.jpg"}
              alt=""
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <ApplicationForm />
    </div>
  );
};

export default Application;
