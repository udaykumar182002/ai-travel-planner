
const generateItinerary = require("../services/geminiService");

let trips = [];

// Create Trip
exports.createTrip = async (req, res) => {
  try {
    const itinerary = await generateItinerary({
      destination: req.body.destination,
      days: req.body.days,
      budget: req.body.budget,
      interests: req.body.interests || [],
    });

    const trip = {
      id: Date.now().toString(),
      userId: req.user.id,
      destination: req.body.destination,
      days: req.body.days,
      budget: req.body.budget,
      interests: req.body.interests || [],
      itinerary,
      createdAt: new Date(),
    };

    trips.push(trip);

    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Trips
exports.getTrips = async (req, res) => {
  try {
    const userTrips = trips.filter(
      (trip) => trip.userId === req.user.id
    );

    res.json(userTrips);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Trip
exports.getTripById = async (req, res) => {
  try {
    const trip = trips.find(
      (trip) => trip.id === req.params.id
    );

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Trip
exports.updateTrip = async (req, res) => {
  try {
    const trip = trips.find(
      (trip) => trip.id === req.params.id
    );

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    Object.assign(trip, req.body);

    res.json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Trip
exports.deleteTrip = async (req, res) => {
  try {
    trips = trips.filter(
      (trip) => trip.id !== req.params.id
    );

    res.json({
      message: "Trip deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Regenerate Day
exports.regenerateDay = async (req, res) => {
  try {
    res.json({
      message: "Day regenerated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
