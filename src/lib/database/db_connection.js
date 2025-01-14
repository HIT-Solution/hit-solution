import mongoose from "mongoose";

const username = process.env.DB_NAME;
const password = process.env.DB_PASS;

const mongoUrl = `mongodb+srv://${username}:${password}@hit-solution.qswt9.mongodb.net/HIT-Solution?retryWrites=true&w=majority&appName=HIT-Solution`;

if (!mongoUrl) {
  throw new Error("Missing Mongo db connect");
}

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState) return;

  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Mongodb connect Success");
  } catch (error) {
    console.log("Error  Connect Mongodb is:", error);
    throw new Error("Feaild to Connect Mongodb");
  }
};
