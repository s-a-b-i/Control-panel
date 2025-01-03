import dotenv from "dotenv";
import connectDB from "./config/database.config.js";
import { app } from "./app.js";

dotenv.config();

(async () => {
  try {
    // Connect to the database
    await connectDB();

    // Handle server errors
    app.on("error", (error) => {
      console.error("Server Error:", error);
      throw error;
    });

    // Set the port from the environment variable or use default
    const PORT = process.env.PORT || 5000;

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();
