import Layout from "@/components/Layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="flex">
        <div className=" w-full bg-gray-100 h-screen p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-800">Technologies</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            iure perferendis vel illo assumenda aliquam, illum ad labore libero
            in perspiciatis <br /> minus sequi laborum quisquam iusto sit ipsa
            debitis nam!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default page;
