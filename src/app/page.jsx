import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/react";
import BannerSlider from "../components/BannerSlider";
import IndustryExpertize from "./home/IndustryExpertize";
import Services from "./home/Services";
import TechStacks from "./home/TechStacks";
import Review from "./home/Review";
import Blog from "./home/Blog";
import Faq from "./home/Faq";
import ContactUs from "./home/ContactUs";
import Methodology from "./home/Methodology";
import OurProcess from "./home/OurProcess";

import Calendaly from "@/components/Calendaly";

const Banner = dynamic(() => import("./home/Banner"));

import "sweetalert2/src/sweetalert2.scss";

const Home = async () => {
  // function wait(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }
  // await wait(10000);
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center gap-4 min-h-screen bg-gradient-to-br from-black to-teal-800">
          <Spinner color="default" />
          <Spinner color="primary" />
          <Spinner color="secondary" />
          <Spinner color="success" />
          <Spinner color="warning" />
          <Spinner color="danger" />
        </div>
      }
    >
      {/* <Calendaly /> */}
      <div>
        <Banner />
        <BannerSlider />
        <Methodology />
        <Services />
        <OurProcess />
        <TechStacks />
        <IndustryExpertize />
        <Review />
        <Blog />
        <Faq />

        {/* <ContactUs /> */}
      </div>
    </Suspense>
  );
};

export default Home;
