"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import BlogsData from "./BlogsData";

const BlogsTab = () => {
  return (
    <div>
      <div className="flex mx-5 lg:mx-10 flex-col">
        <Tabs color="default" aria-label="Options">
          <Tab key="Category1" title="Category1">
            <Card>
              <CardBody>
                <div className="w-full">
                  <BlogsData />
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Category2" title="Category2">
            <Card>
              <CardBody>
                <BlogsData />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Category3" title="Category3">
            <Card>
              <CardBody>
                <BlogsData />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default BlogsTab;
