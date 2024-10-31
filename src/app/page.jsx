import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/react";
import BannerSlider from "../components/BannerSlider";
import IndustryExpertize from "./home/IndustryExpertize";
const Banner = dynamic(() => import("./home/Banner"));

const Home = () => {
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
      <div>
        <Banner />
        <BannerSlider />
        <IndustryExpertize />
      </div>
    </Suspense>
  );
};

export default Home;
