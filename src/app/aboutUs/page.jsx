import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import finger from "../../../public/finger-touching-virtual-circle.jpg";
import arrowImg from "../../../public/arrow-pointing-forward.jpg";
import ReusableBackground from "@/components/ReusableBackground";
import TitleFontStyle from "@/components/TitleFontStyle";

const AboutUs = () => {
  return (
    <ReusableBackground>
      <div>
        {/* <section className="relative h-[550px]">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            className="object-cover brightness-50"
            alt="abc"
            layout="fill" // Makes the image fill its container
            objectFit="cover" // Ensures the image covers the container proportionally
            quality={100}
            src={"/colleagues-working-project-discussing-details.jpg"}
          />
        </div>
        <div className="absolute inset-0 mt-10 mx-5 lg:mx-10">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-300 text-center">
            About Us
          </h1>
          <h1 className="lg:text-7xl text-4xl md:text-6xl text-center font-bold text-gray-200 my-5 mb-10">
            Empowering Innovation, <br />
            <span className="text-teal-400">Crafting the Future</span>
          </h1>
          <h1 className="text-gray-300  text-justify lg:px-52 md:px-24">
            We are a dynamic technology company committed to delivering
            innovative and scalable software solutions that drive digital
            transformation. Our passion is turning ideas into reality,
            empowering businesses to achieve sustainable growth and efficiency.
            Through excellence, creativity, and collaboration, we bridge the gap
            between challenges and impactful solutions.
          </h1>
          <div className="flex items-center justify-center gap-4 md:gap-10  mt-3 lg:mt-8">
            <div>
              <Link href={"/services"}>
                <Button
                  className="bg-teal-500 lg:w-52 w-40"
                  size="lg"
                  variant="shadow"
                  color="success"
                >
                  Services <FaLongArrowAltRight size={20} />
                </Button>
              </Link>
            </div>
            <div>
              <Link href={"/contact"}>
                <Button
                  className="bg-teal-500 lg:w-52 w-40 "
                  size="lg"
                  variant="shadow"
                  color="success"
                >
                  Contact us <FaLongArrowAltRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

        <section className="relative lg:h-[850px] md:h-[600px] h-[550px]">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              className="object-cover"
              alt="abc"
              layout="fill" // Makes the image fill its container
              objectFit="cover" // Ensures the image covers the container proportionally
              quality={100}
              src={"/colleagues-working-project-discussing-details.jpg"}
            />
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="absolute inset-0 mt-10 mx-5 lg:mx-10">
            <h1 className="lg:text-5xl pt-32 md:text-4xl text-3xl font-bold text-gray-300 text-center">
              About Us
            </h1>
            <h1 className="lg:text-7xl text-4xl md:text-6xl text-center font-bold text-gray-200 my-5 mb-10">
              Empowering Innovation, <br />
              <span>
                <TitleFontStyle title={"Crafting the Future"} />{" "}
              </span>
            </h1>
            <h1 className="text-gray-300 text-justify lg:px-52 md:px-24">
              We are a dynamic technology company committed to delivering
              innovative and scalable software solutions that drive digital
              transformation. Our passion is turning ideas into reality,
              empowering businesses to achieve sustainable growth and
              efficiency. Through excellence, creativity, and collaboration, we
              bridge the gap between challenges and impactful solutions.
            </h1>
            <div className="flex items-center justify-center gap-4 md:gap-10 mt-3 lg:mt-8">
              <div>
                <Link href={"/services"}>
                  <Button
                    className="bg-teal-500 lg:w-52 w-40"
                    size="lg"
                    variant="shadow"
                    color="success"
                  >
                    Services <FaLongArrowAltRight size={20} />
                  </Button>
                </Link>
              </div>
              <div>
                <Link href={"/contact"}>
                  <Button
                    className="bg-teal-500 lg:w-52 w-40"
                    size="lg"
                    variant="shadow"
                    color="success"
                  >
                    Contact us <FaLongArrowAltRight size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="lg:my-20 md:my-28 my-16 md:py-10 container mx-auto grid lg:grid-cols-2 content-center gap-16">
          <div>
            <Image
              src={
                "/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg"
              }
              className="rounded-tr-[120px] rounded-bl-[120px]"
              alt="abc"
              width={550}
              height={400}
              quality={100}
              objectFit="cover"
            />
          </div>
          <div>
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mt-10 text-center">
              {" "}
              Who We Are
            </h1>
            <p className="text-gray-700 text-justify text-xl mt-10">
              At Hit Solution, we are a team of passionate developers,
              designers, and strategists who believe in the transformative power
              of technology. Our multidisciplinary expertise spans software
              development, web and mobile applications, IoT, AI integration, and
              digital design. We take pride in our ability to understand unique
              business challenges and provide tailored solutions that drive
              meaningful results.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-black to-teal-900 py-10">
          <ReusableBackground>
            <div className="lg:py-32 md:py-28 py-16 container mx-auto  grid lg:grid-cols-2 content-center gap-16">
              <div>
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center text-teal-400">
                  Why Choose Us
                </h1>
                <p className="text-gray-300 text-justify text-xl mt-10">
                  Choosing Hit Solution means partnering with a team that values
                  your success as much as you do. We are committed to delivering
                  solutions that are not only innovative but also practical,
                  reliable, and scalable. Through our unwavering dedication to
                  quality, collaboration, and continuous learning, we aim to
                  build lasting relationships and help businesses thrive in the
                  digital era. At Hit Solution, we don’t just build software —
                  we build a future where technology and innovation create
                  endless opportunities. Let's shape that future together.
                </p>
              </div>
              <div>
                <Image
                  src={"/full-shot-man-experiencing-virtual-reality.jpg"}
                  className="rounded-tr-[120px] rounded-bl-[120px] h-[380px] object-cover"
                  alt="abc"
                  width={550}
                  height={400}
                  quality={100}
                  objectFit="cover"
                />
              </div>
            </div>
          </ReusableBackground>
        </div>
        <div className="lg:my-32 md:my-28 my-16 md:py-10 container mx-auto  grid lg:grid-cols-2 content-center ">
          <div>
            <div className="flex gap-5 justify-center items-center">
              <Image
                src={
                  "/mission-goals-target-aspirations-motivation-strategy-concept.jpg"
                }
                className="w-[150px] h-[200px] md:w-[250px] md:h[250] object-cover "
                alt="abc"
                width={550}
                height={400}
                quality={100}
                objectFit="cover"
              />
              <Image
                src={arrowImg}
                className="w-[150px] h-[200px] md:w-[250px] md:h[250] object-cover rounded-tr-[120px]"
                alt="abc"
                width={550}
                height={400}
                quality={100}
                objectFit="cover"
              />
            </div>
            <div className="flex gap-5 mt-5 justify-center items-center">
              <Image
                src={finger}
                className="w-[150px] h-[200px] md:w-[250px] md:h[250] object-cover rounded-bl-[120px]"
                alt="abc"
                width={550}
                height={400}
                quality={100}
                objectFit="cover"
              />
              <Image
                src={
                  "/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg"
                }
                className="w-[150px] h-[200px] md:w-[250px] md:h[250] object-cover "
                alt="abc"
                width={550}
                height={400}
                quality={100}
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <h1 className="lg:text-3xl md:text-3xl text-2xl font-bold text-center">
              Our Mission
            </h1>
            <p className="text-gray-700 text-justify text-lg mt-2">
              Our mission is to harness the power of emerging technologies like
              AI, IoT, and robotics to create practical, impactful solutions
              tailored to the unique needs of our clients. We strive to deliver
              excellence through continuous innovation, collaborative
              partnerships, and a customer-centric approach.
            </p>
            <h1 className="lg:text-3xl md:text-3xl text-2xl font-bold text-center mt-7">
              Our Vision
            </h1>
            <p className="text-gray-700 text-justify text-lg mt-2">
              To be a leading provider of transformative technology solutions
              that drive digital innovation across industries, enhancing
              efficiency, sustainability, and connectivity globally.
            </p>
            <h1 className="lg:text-3xl md:text-3xl text-2xl font-bold text-center mt-7">
              Our Values
            </h1>
            <p className="text-gray-700 text-justify text-lg mt-2">
              We are guided by Innovation, Integrity, and Excellence. We believe
              in Collaboration to achieve success, Customer Focus to meet your
              needs, and Adaptability to stay ahead in a dynamic world.
            </p>
          </div>
        </div>

        {/* google map  */}
        <div className="relative w-full container mx-auto py-4">
          <h1 className="text-5xl  text-teal-600 py-12 font-semibold">
            OUR <span className="text-black">OFFICE </span>LOCATION
          </h1>
          <div className="overflow-hidden bg-none w-full h-[600px] rounded-lg shadow-lg border border-gray-300">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Green Multimedia Ltd. (Green TV), Rongdhanu Corporate Building (opposite to South gate of Jamuna Future Park)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </ReusableBackground>
  );
};

export default AboutUs;
