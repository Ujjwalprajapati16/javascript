// require('dotenv).config({pathL './dotenv'});
import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Server error:", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port http://localhost:${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  });
