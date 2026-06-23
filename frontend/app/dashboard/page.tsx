"use client";

import { useEffect, useState } from "react";
import api from "../lib/api";

export default function DashboardPage() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const res = await api.get("/trips");
      setTrips(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        My Trips
      </h1>

      {trips.length === 0 ? (
        <p>No trips found</p>
      ) : (
        trips.map((trip: any) => (
          <div
            key={trip._id}
            className="border p-4 mb-4 rounded"
          >
            <h2 className="font-bold">
              {trip.destination}
            </h2>

            <p>{trip.days} Days</p>

            <p>{trip.budget}</p>
          </div>
        ))
      )}
    </div>
  );
}