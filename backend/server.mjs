import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import planTripRoutes from "./routes/planTripRoutes.mjs";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  "mongodb+srv://kellys1210:BjWSR6iSBQsMkRXt@pbp.zxmdhca.mongodb.net/";

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/PlanTrip", planTripRoutes);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
