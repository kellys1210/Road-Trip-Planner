import express from "express";
import {
  getDestination,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
} from "../controllers/planTripController.mjs";

const router = express.Router();

router.get("/", getDestination);
router.get("/:id", getDestinationById);  
router.post("/", createDestination);
router.put("/:id", updateDestination);
router.delete("/:id", deleteDestination);

export default router;
