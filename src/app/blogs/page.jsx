import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import SocialSharing from "../../components/SocialSharing";
import { FaLongArrowAltRight } from "react-icons/fa";
import BlogsTab from "@/components/BlogsTab";
import banner from "../../../public/banner/banner3.webp";
import ReusableBackground from "@/components/ReusableBackground";
import Link from "next/link";
const Blogs = () => {
  const text =
    "Discover the latest insights, trends, and strategies in the world of technology and software development Our blog covers everything from cutting-edge development techniques and industry updates to case studies and success stories Stay informed with expert opinions, actionable tips, and deep dives into how modern software solutions are transforming industries and shaping the future Whether you are a developer, business owner, or tech enthusiast,there are something here for you";

  return (
    <div>
      <ReusableBackground>
        <section className="relative  h-[560px] md:h-[570px] lg:h-[620px]">
          {/* Image Container */}
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              className="object-cover"
              src={"/5125962.jpg"}
              alt="Blog Header"
              layout="fill" // Makes the image fill its container
              style={{ objectFit: "cover" }} // Ensures the image covers the container proportionally
              quality={100}
            />
          </div>
          {/* Text Overlay */}
          <div className="absolute container px-2 mx-auto inset-0 pt-32 grid md:grid-cols-2 lg:gap-20 gap-2  lg:flex-row py-10">
            <div className="">
              <h1 className="lg:text-4xl md:text-5xl text-2xl font-bold text-gray-200">
                Latest Blog<span className="text-teal-500">.</span>
              </h1>
              <h1 className="lg:text-5xl md-text-4xl text-3xl mt-6 text-teal-300 font-semibold">
                Expert Opinions & News
              </h1>
              <p className="text-lg py-3 hover:text-white text-gray-300">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <p className="text-gray-300 my-3">
                {text.slice(0, 200)}
                <span> ..............</span>
              </p>
              <Link href={"#blogData"}>
                <Button
                  className="bg-teal-500 mt-3"
                  size="lg"
                  variant="shadow"
                  color="success"
                >
                  Read The Article <FaLongArrowAltRight size={20} />
                </Button>
              </Link>
              {/* <h1 className="text-gray-200 text-3xl font-bold mt-3">
              Share on ,
            </h1> */}
              <SocialSharing />
            </div>
            <div className="md:block hidden">
              <Image
                className="object-cover  rounded-tr-[110px] rounded-bl-[110px]"
                src={banner}
                alt="Blog Header"
                // layout="responsive"
                objectFit="cover" // Ensures the image covers the container proportionally
                quality={100}
                height={400}
                width={600}
              />
            </div>
          </div>
        </section>
        <div id="blogData" className=" py-5">
          <BlogsTab />
        </div>
      </ReusableBackground>
    </div>
  );
};

export default Blogs;
