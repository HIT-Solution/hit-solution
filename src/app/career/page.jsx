import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Career = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-br from-black to-teal-900">
        <div className="mx-5 lg:mx-10 py-24 grid md:grid-cols-2 gap-5 content-center text-3xl md:text-6xl px-10 font-bold ">
          <div>
            <h1 className="text-gray-200">
              Transform Your Vision Into Reality—Join Us and Build a Career of
              Innovation and Growth.
            </h1>
            <Button
              className="bg-teal-500 mt-16 h-16 w-72"
              size="lg"
              variant="shadow"
              color="success"
            >
              Explore Job Openings <FaLongArrowAltRight size={20} />
            </Button>
          </div>
          <div>
            <Image
              className="h-[500px] object-cover rounded-tl-[120px] rounded-br-[120px]"
              src={"/social-integration-working-team.jpg"}
              alt=""
              width={600}
              height={400}
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className="mx-5 lg:mx-10 mt-32 mb-10">
        <h1 className="text-5xl text-center font-bold">Open Positions</h1>
        <div className="grid grid-cols-1 gap-5 my-10">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="lg:flex justify-between items-center bg-teal-500 bg-opacity-10 rounded-xl p-10"
              >
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold">
                    Senior Software Engineer
                  </h1>
                  <h1 className="flex items-center text-2xl gap-2">
                    <HiOutlineLocationMarker /> Dhaka, Bangladesh
                  </h1>
                </div>
                <div className="lg:mt-0 mt-5">
                  <Button className="bg-teal-500" size="lg" color="success">
                    Apply Now <FaLongArrowAltRight size={20} />
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
