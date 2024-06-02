import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import planTripRoutes from "./routes/planTripRoutes.mjs";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/plantrip", planTripRoutes);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

export default app;
