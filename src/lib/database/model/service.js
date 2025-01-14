import mongoose from "mongoose";

const servicesModel = new mongoose.Schema(
  {
    imgUrl: String,
    title: String,
    desc: String,
  },
  {
    timestamps: true, // This adds createdAt and updatedAt fields
  }
);

export const ServciceData =
  mongoose.models.service || mongoose.model("service", servicesModel);
