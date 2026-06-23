# AI Travel Planner

AI Travel Planner is a full-stack web application that helps users generate personalized travel itineraries using Google's Gemini AI.

## Features

* User Registration and Login
* JWT Authentication
* AI-Powered Travel Itinerary Generation
* Create and Manage Trips
* Budget-Based Travel Planning
* Interest-Based Recommendations
* Responsive User Interface
* REST API Backend

## Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication
* Google Gemini AI API

## Project Structure

ai-travel-planner/

├── backend/

│ ├── controllers/

│ ├── routes/

│ ├── middleware/

│ ├── services/

│ └── server.js

├── frontend/

│ ├── app/

│ ├── public/

│ └── package.json

└── README.md

## Installation

### Clone Repository

git clone https://github.com/udaykumar182002/ai-travel-planner.git

cd ai-travel-planner

### Backend Setup

cd backend

npm install

Create a .env file:

PORT=5000

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

Run backend:

npm run dev

### Frontend Setup

cd frontend

npm install

npm run dev

Open:

http://localhost:3000

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Trips

POST /api/trips

GET /api/trips

GET /api/trips/:id

PUT /api/trips/:id

DELETE /api/trips/:id

## Future Improvements

* MongoDB Integration
* User Profile Management
* Trip Sharing
* PDF Itinerary Export
* Hotel and Flight Integration
* Weather Forecast Integration

## Author

Uday Kumar

GitHub: https://github.com/udaykumar182002
