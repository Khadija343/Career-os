import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("======================================");
      console.log("🚀 Career OS Backend Running");
      console.log(`Environment : ${process.env.NODE_ENV}`);
      console.log(`Server      : http://localhost:${PORT}`);
      console.log("======================================");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();