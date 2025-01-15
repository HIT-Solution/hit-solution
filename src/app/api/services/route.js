// Services Get Api

import { connectToDatabase } from "@/lib/database/db_connection";
import { ServciceData } from "@/lib/database/model/service";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectToDatabase();
  const serviceData = await ServciceData.find();

  return NextResponse.json({ result: serviceData });
};

//Services POST API
export const POST = async (req) => {
  try {
    await connectToDatabase();
    console.log("Connected to MongoDB.");

    // Parse the JSON payload from the request
    const payload = await req.json();

    console.log("Payload received:", payload);

    // Create a new document with the parsed payload
    const servicesData = new ServciceData(payload);

    // Save the document to the database
    const response = await servicesData.save();

    console.log("Data saved:", response);

    return NextResponse.json({ result: response });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "An error occurred while saving data." },
      { status: 500 }
    );
  }
};

// Delete Services api

export const DELETE = async (req) => {
  try {
    await connectToDatabase();
    console.log("Connected to MongoDB.");

    // Extract the _id from the request body or query params
    const { _id } = await req.json(); // If sending via body
    // const _id = req.nextUrl.searchParams.get("_id"); // If sending via query params

    console.log("_id received for deletion:", _id);

    if (!_id) {
      return NextResponse.json(
        { error: "Service _id is required." },
        { status: 400 }
      );
    }

    // Delete the service by _id
    const response = await ServciceData.findByIdAndDelete(_id);

    if (!response) {
      return NextResponse.json(
        { error: "Service not found or already deleted." },
        { status: 404 }
      );
    }

    console.log("Service deleted:", response);

    return NextResponse.json({ message: "Service deleted successfully." });
  } catch (error) {
    console.error("Error in DELETE handler:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the service." },
      { status: 500 }
    );
  }
};

// // Services PUT API (Update a service)
// export const PUT = async (req) => {
//   try {
//     await connectToDatabase();
//     console.log("Connected to MongoDB.");

//     // Parse the JSON payload from the request
//     const { _id, ...updateFields } = await req.json();

//     console.log("Payload received for update:", { _id, updateFields });

//     if (!_id) {
//       return NextResponse.json(
//         { error: "Service _id is required for updating." },
//         { status: 400 }
//       );
//     }

//     // Update the service by _id
//     const updatedService = await ServciceData.findByIdAndUpdate(
//       _id,
//       updateFields,
//       { new: true, runValidators: true }
//     );

//     if (!updatedService) {
//       return NextResponse.json(
//         { error: "Service not found or could not be updated." },
//         { status: 404 }
//       );
//     }

//     console.log("Service updated:", updatedService);
//     return NextResponse.json({ result: updatedService });
//   } catch (error) {
//     console.error("Error in PUT handler:", error);
//     return NextResponse.json(
//       { error: "An error occurred while updating the service." },
//       { status: 500 }
//     );
//   }
// };
