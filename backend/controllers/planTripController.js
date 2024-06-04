import mongoose from "mongoose";
import PlanTrip from "../models/planTripModel.js";

export const getDestinations = async (_, res) => {
  try {
    const destinations = await PlanTrip.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDestinationById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const destination = await PlanTrip.findById(id);
    if (!destination)
      return res.status(404).json({ message: "Destination not found" });
    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDestination = async (req, res) => {
  const newDestination = new PlanTrip(req.body);

  try {
    const savedDestination = await newDestination.save();
    res.status(201).json(savedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateDestination = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedDestination = await PlanTrip.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedDestination)
      return res.status(404).json({ message: "Destination not found" });
    res.status(200).json(updatedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDestination = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDestination = await PlanTrip.findByIdAndDelete(id);
    if (!deletedDestination)
      return res.status(404).json({ message: "Destination not found" });
    res.status(200).json({ message: "Destination deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
