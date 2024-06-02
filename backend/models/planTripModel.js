import mongoose from "mongoose";

const planTripSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const PlanTrip = mongoose.model("PlanTrip", planTripSchema);

export default PlanTrip;
