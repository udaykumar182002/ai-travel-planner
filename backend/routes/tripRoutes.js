const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTrip,
  getTrips,
  getTripById,
  deleteTrip,
  updateTrip,
  regenerateDay,
} = require("../controllers/tripController");

router.post("/", protect, createTrip);
router.get("/", protect, getTrips);
router.get("/:id", protect, getTripById);
router.put("/:id", protect, updateTrip);
router.post("/:id/regenerate-day", protect, regenerateDay);
router.delete("/:id", protect, deleteTrip);

module.exports = router;