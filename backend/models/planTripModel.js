import mongoose from "mongoose";

const PlanTripSchema = new mongoose.Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const PlanTrip = mongoose.model("PlanTrip", PlanTripSchema);

export default PlanTrip;
