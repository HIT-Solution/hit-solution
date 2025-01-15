import { connectToDatabase } from "@/lib/database/db_connection";
import { ServciceData } from "@/lib/database/model/service";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  try {
    await connectToDatabase();
    console.log("Connected to MongoDB.");

    const { id } = params; // Extract the _id from the URL
    const updateFields = await req.json(); // Parse update fields from request body

    console.log("Updating Service:", { id, updateFields });

    if (!id) {
      return NextResponse.json(
        { error: "Service ID is required for updating." },
        { status: 400 }
      );
    }

    // Update the service by ID
    const updatedService = await ServciceData.findByIdAndUpdate(
      id,
      updateFields,
      {
        new: true, // Return the updated document
        runValidators: true, // Run validation on updated fields
      }
    );

    if (!updatedService) {
      return NextResponse.json(
        { error: "Service not found or could not be updated." },
        { status: 404 }
      );
    }

    console.log("Service updated:", updatedService);
    return NextResponse.json({ result: updatedService });
  } catch (error) {
    console.error("Error in PUT handler:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the service." },
      { status: 500 }
    );
  }
};
