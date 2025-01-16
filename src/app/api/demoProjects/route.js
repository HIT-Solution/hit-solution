import { connectToDatabase } from "@/lib/database/db_connection";
import { ProjectData } from "@/lib/database/model/demoProject";
import { NextResponse } from "next/server";

// Demo Project Data GET API

export const GET = async () => {
  await connectToDatabase();
  const data = await ProjectData.find();
  return NextResponse.json({ result: data });
};

// demoProjectData POST API

export const POST = async (req) => {
  try {
    await connectToDatabase();
    const payload = await req.json();

    console.log("Payload Received");

    const demoProjectData = new ProjectData(payload);
    const response = await demoProjectData.save();

    console.log("Data Saved=", response);
    return NextResponse.json({ result: response });
  } catch (error) {
    console.log("Error in Post handaler", error);
    return NextResponse.json(
      { error: "An error occured while saving data" },
      { status: 500 }
    );
  }
};
