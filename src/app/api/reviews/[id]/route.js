import { connectToDatabase } from "@/lib/database/db_connection";
import { ReviewData } from "@/lib/database/model/review";
import { NextResponse } from "next/server";

// Reviews Update Api

export const PUT = async (req, { params }) => {
  try {
    await connectToDatabase();
    const { id } = params; // Extract ID from URL
    const payload = await req.json(); // Get updated data

    const updatedTestimonial = await ReviewData.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });

    if (!updatedTestimonial) {
      return NextResponse.json(
        { error: "Testimonial not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ result: updatedTestimonial });
  } catch (error) {
    console.log("Error in PUT handler:", error);
    return NextResponse.json(
      { error: "Error updating testimonial" },
      { status: 500 }
    );
  }
};

//   Review Delete Api

export const DELETE = async (req, { params }) => {
  try {
    await connectToDatabase();
    const { id } = params; // Extract ID from URL

    const deletedTestimonial = await ReviewData.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return NextResponse.json(
        { error: "Testimonial not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    console.log("Error in DELETE handler:", error);
    return NextResponse.json(
      { error: "Error deleting testimonial" },
      { status: 500 }
    );
  }
};
