import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

// Enable CORS to allow frontend to access the backend
app.use(cors());

const API_KEY = process.env.GOOGLE_API_KEY;

// To track the number of API calls
let requestCount = 0;

// Sleep function to add a delay
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Server is running! Use /api/places for API requests.");
});

// Route to fetch places based on the query from the frontend
app.get("/api/places", async (req, res) => {
  const query = req.query.query; // The query passed from the frontend

  // Increment the request count
  requestCount++;

  // Add a delay if 10 requests have been made
  if (requestCount % 10 === 0) {
    console.log("Request limit reached, waiting for 1 second...");
    await sleep(1000); // 1-second delay
  }

  // Construct the API URL for Google Places API with the query and API key
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${API_KEY}`;

  console.log(`Constructed Google Places API URL: ${url}`); // Log the actual API request URL

  try {
    // Make the request to the Google Places API
    const response = await axios.get(url);

    // Send the response back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).send("Error fetching places");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
