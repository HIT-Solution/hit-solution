import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { PiNyTimesLogoBold } from "react-icons/pi";
import { GiBarbedSun } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GiLifeBar } from "react-icons/gi";
import Link from "next/link";
const Career = () => {
  // api appy in availableJobs

  const availableJobs = [0];

  return (
    <div className="">
      <div className="bg-gradient-to-br from-black to-teal-900">
        <div className="mx-5 lg:mx-10 py-24 grid md:grid-cols-2 gap-5 content-center text-3xl md:text-6xl font-bold ">
          <div>
            <h1 className="text-gray-200">
              Transform Your Vision Into Reality—Join Us and Build a{" "}
              <span className="text-teal-400">Career</span> of Innovation and
              Growth.
            </h1>
            <Link href={"#jobs"}>
              {" "}
              <Button
                className="bg-teal-500 lg:mt-16 md:mt-10 mt-8  mb-8 lg:h-16 md:h-12 h-10 lg:w-72 md:w-64 w-60"
                size="lg"
                variant="shadow"
                color="success"
              >
                Explore Job Openings <FaLongArrowAltRight size={20} />
              </Button>
            </Link>
          </div>
          <div>
            <Image
              className="h-[500px] object-cover rounded-tl-[120px] rounded-br-[120px]"
              src={"/social-integration-working-team.jpg"}
              alt="abc"
              width={600}
              height={400}
              quality={100}
            />
          </div>
        </div>
      </div>

      {availableJobs > 0 ? (
        <div id="jobs" className="mx-5 lg:mx-10 mt-32 mb-10">
          <h1 className="text-5xl text-center font-bold mb-16">
            Open Positions
          </h1>
          <div className="grid grid-cols-1 gap-5 my-10">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="lg:flex justify-between items-center bg-teal-500 bg-opacity-10 rounded-xl p-10"
                >
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold">
                      Senior Software Engineer
                    </h1>
                    <h1 className="flex items-center text-xl gap-2">
                      <HiOutlineLocationMarker /> Dhaka, Bangladesh{" "}
                      <span className="lg:ml-10 ml-3 gap-1 flex items-center">
                        <IoMdTime />
                        Full-time
                      </span>
                    </h1>
                  </div>
                  <div className="lg:mt-0 mt-5">
                    <Link href={"/application"}>
                      <Button className="bg-teal-500" size="lg" color="success">
                        Apply Now <FaLongArrowAltRight size={20} />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div
          id="jobs"
          className="text-center py-52 bg-gradient-to-br from-teal-500 via-gray-200 to-teal-100  shadow-lg"
        >
          <div className="flex justify-center items-center mb-5">
            <span className="text-6xl">🚫</span>
          </div>
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-5 bg-gradient-to-r from-teal-800 via-teal-500 to-teal-300 text-transparent bg-clip-text">
            Sorry, jobs currently unavailable
          </h1>
          <p className="text-xl text-gray-700 hover:text-teal-600 transition duration-300">
            Please check back later for exciting opportunities at our company.
          </p>
        </div>
      )}

      <div className="bg-gradient-to-br from-black to-teal-900">
        <div className="mx-5 lg:mx-10 text-center lg:py-32 md:py-28 py-20">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-200 text-center">
            Why join Us ?
          </h1>
          <h1 className="text-gray-400 mt-12">
            At Hit Solution, we provide a competitive compensation package that
            includes timely salary payments, two festival bonuses, a
            performance-based <br />
            bonus, annual salary increments, and opportunities for career growth
            and development.
          </h1>
          <div className="grid lg:grid-cols-2 gap-5 lg:mt-36 md:mt-24 mt-12">
            <div className="grid grid-cols-2 gap-10">
              <h1 className="text-gray-200 flex gap-3 lg:text-lg md:text-lg text-sm font-semibold items-center">
                <span className="bg-red-200 text-black p-3 rounded-full">
                  {" "}
                  <PiNyTimesLogoBold />
                </span>
                Leading Software Company
              </h1>
              <h1 className="text-gray-200 flex gap-3 lg:text-lg md:text-lg text-sm font-semibold items-center">
                <span className="bg-green-200 text-black p-3 rounded-full">
                  {" "}
                  <IoMdTime />
                </span>
                Flexible Work Hours
              </h1>
              <h1 className="text-gray-200 flex gap-3 lg:text-lg md:text-lg text-smfont-semibold items-center">
                <span className="bg-blue-200 text-black p-3 rounded-full">
                  {" "}
                  <GiBarbedSun />
                </span>
                Innovative Tech Culture
              </h1>
              <h1 className="text-gray-200 flex gap-3 lg:text-lg md:text-lg text-sm font-semibold items-center">
                <span className="bg-yellow-200 text-black p-3 rounded-full">
                  {" "}
                  <IoGameControllerOutline />
                </span>
                Game Zone
              </h1>
              <h1 className="text-gray-200 flex gap-3 lg:text-lg md:text-lg text-sm font-semibold items-center">
                <span className="bg-lime-200 text-black p-3 rounded-full">
                  {" "}
                  <BsMicrosoftTeams />
                </span>
                Dynamic Team
              </h1>
              <h1 className="text-gray-200 flex gap-3 lg:text-lg md:text-lg text-sm font-semibold items-center">
                <span className="bg-pink-200 text-black p-3 rounded-full">
                  {" "}
                  <GiLifeBar />
                </span>
                Career Growth
              </h1>
              <h1></h1>
            </div>
            <div>
              <Image
                className="rounded-tr-[130px] rounded-bl-[130px]"
                src={"/co-working-people-working-together.jpg"}
                height={350}
                width={600}
                alt="abc"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
