import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    country: { type: String, required: true },
    imgUrl: { type: String, required: false }, // Optional, in case no image is provided
    rating: { type: Number, required: true }, // Rating from 1 to 5
    comments: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ReviewData =
  mongoose.models.Review || mongoose.model("Review", ReviewSchema);
