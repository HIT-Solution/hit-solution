import { connectToDatabase } from "@/lib/database/db_connection";
import { ProjectData } from "@/lib/database/model/demoProject";
import { NextResponse } from "next/server";

// projectData Update Put API

export const PUT = async (req, { params }) => {
  try {
    await connectToDatabase();

    console.log("req", req);

    const { id } = params;

    const { ...data } = await req.json(); // Extract ID and other fields from the request payload

    console.log("Update Request Received for ID:", id);

    const response = await ProjectData.findByIdAndUpdate(id, data, {
      new: true, // Return the updated document
      runValidators: true, // Validate the data
    });

    if (!response) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    console.log("Data Updated:", response);
    return NextResponse.json({ result: response });
  } catch (error) {
    console.log("Error in PUT handler:", error);
    return NextResponse.json(
      { error: "An error occurred while updating data" },
      { status: 500 }
    );
  }
};

// demo project data Delete

export const DELETE = async (req, { params }) => {
  try {
    await connectToDatabase();

    const { id } = params;

    console.log("Delete Request Received for ID:", id);

    const response = await ProjectData.findByIdAndDelete(id);

    if (!response) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    console.log("Data Deleted:", response);
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.log("Error in DELETE handler:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting data" },
      { status: 500 }
    );
  }
};
