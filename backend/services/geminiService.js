const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateItinerary = async (tripData) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `
Create a ${tripData.days}-day travel itinerary.

Destination: ${tripData.destination}
Budget: ${tripData.budget}
Interests: ${tripData.interests.join(", ")}

Include:
- Day-by-day itinerary
- Budget estimate
- Hotel recommendations
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

module.exports = generateItinerary;