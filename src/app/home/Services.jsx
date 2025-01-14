"use client";

import React, { useEffect, useState } from "react";

// import SimpleBackground from "../../components/SimpleBackground";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/services");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setServicesData(data.result); // Assuming the API returns an array of services
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  // loading progress
  if (loading) {
    return (
      <span className="text-3xl flex justify-center text-purple-600 my-32">
        Loading....
      </span>
    );
  }

  return (
    //  <SimpleBackground>
    <div className="pb-12">
      <h1 className="lg:text-5xl md:text-4xl text-2xl text-center font-bold md:my-10 my-8 lg:my-12">
        Our Services
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 lg:gap-8 md:gap-8 gap-5 mx-5 lg:mx-10">
        {servicesData?.map((services) => (
          <div
            key={services._id}
            className="p-5 h-[245px] lg:h-[290px] md:h-[250px] rounded-xl shadow-lg shadow-teal-800/50"
          >
            <img src={services?.imgUrl} alt="img" height={50} width={50} />
            <div>
              <h1 className="text-xl  my-1">{services?.title}</h1>
              <p className="text-sm">{services?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    //  </SimpleBackground>
  );
};

export default Services;
