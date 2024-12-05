"use client";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import React from "react";

const BlogsCard = () => {
  return (
    <div>
      <Card isFooterBlurred className="w-full h-[350px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-xs font-bold">Sunday - November 24th, 2024</p>
          <h4 className="font-bold text-2xl">Title of the Blog</h4>
        </CardHeader>
        <Image
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={"/blog3.png"}
          width={400}
          height={300}
          quality={100}
        />
        <CardFooter className="absolute bg-black/20 bottom-0 z-10 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full object-cover w-14 h-14"
              src={"/fq3.png"}
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <h1>Blog Poster Name</h1>
            </div>
          </div>
          <Button radius="full" size="sm">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogsCard;
