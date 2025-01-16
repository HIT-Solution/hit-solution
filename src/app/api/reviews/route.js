import { connectToDatabase } from "@/lib/database/db_connection";
import { NextResponse } from "next/server";

import { ReviewData } from "@/lib/database/model/review";

// Review GET Api

export const GET = async () => {
  try {
    await connectToDatabase();
    const reviews = await ReviewData.find({});
    return NextResponse.json({ result: reviews });
  } catch (error) {
    console.log("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Error fetching reviews" },
      { status: 500 }
    );
  }
};

// Review POST Api
export const POST = async (req) => {
  try {
    await connectToDatabase();
    const payload = await req.json();

    const newReview = new ReviewData(payload);
    const response = await newReview.save();

    return NextResponse.json({ result: response }, { status: 201 });
  } catch (error) {
    console.log("Error in Review post:", error);
    return NextResponse.json(
      { error: "Error posting Review" },
      { status: 500 }
    );
  }
};
