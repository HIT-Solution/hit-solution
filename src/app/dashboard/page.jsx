import Layout from "@/components/Layout";
import React from "react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex">
        <div className=" w-full bg-gray-100 h-screen p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to the Dashboard
          </h1>
          <p className="text-gray-600">
            Select an option from the left menu to get started.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
