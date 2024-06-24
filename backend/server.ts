import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "configs.env" });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started successfully on port ${port} 🐱‍🏍`);
});

const database = process.env.DATABASE || "mongodb://127.0.0.1:27017/school";
(async () => {
  await mongoose.connect(database);
  console.log(`Database started successfully on ${database} 🐱‍🏍`);
})();
