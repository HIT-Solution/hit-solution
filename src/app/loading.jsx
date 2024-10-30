"use client";
import React from "react";
import { Card, Skeleton, Spinner } from "@nextui-org/react";
const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-4 min-h-screen bg-gradient-to-br from-black to-teal-800">
      <Spinner color="default" />
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="danger" />
    </div>
  );
};

export default Loading;
