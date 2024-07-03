import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import TripsDAO from "./dao/tripsDAO.js";

dotenv.config();

import planTripRoutes from "./routes/planTripRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/plantrip", planTripRoutes);
app.use("*", (_, res) => res.status(404).json({ error: "not found" }));

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(async (client) => {
    await TripsDAO.injectDB(client);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit;
  });
  

export default app;
