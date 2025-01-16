const { default: mongoose } = require("mongoose");

const demoProjectDataModel = new mongoose.Schema(
  {
    projectUrl: String,
    imgUrl: String,
    desc: String,
  },
  {
    timestamps: true,
  }
);

export const ProjectData =
  mongoose.models.demoProjectData ||
  mongoose.model("demoProjectData", demoProjectDataModel);
