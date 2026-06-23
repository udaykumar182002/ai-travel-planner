"use client";

import { useState } from "react";
import api from "../lib/api";

export default function CreateTripPage() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("Medium");
  const [result, setResult] = useState("");

  const generateTrip = async () => {
    try {
      const res = await api.post("/trips", {
        destination,
        days: Number(days),
        budget,
        interests: ["Food", "Culture"],
      });

      setResult(JSON.stringify(res.data, null, 2));
    } catch (error) {
      console.error(error);
      alert("Failed to generate trip");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">
        AI Travel Planner
      </h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Number of Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-3"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button
        onClick={generateTrip}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Trip
      </button>

      {result && (
        <pre className="mt-5 p-4 border rounded overflow-auto">
          {result}
        </pre>
      )}
    </div>
  );
}