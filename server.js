import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 5000;

// Enable CORS to allow frontend to access the backend
app.use(cors());

// Your Google API key (from environment variable or hardcoded here)
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || "YOUR_GOOGLE_API_KEY";

// Route to fetch places based on the query from the frontend
app.get("/api/places", async (req, res) => {
  const query = req.query.query; // The query passed from the frontend

  // Construct the API URL for Google Places API with the query and API key
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${API_KEY}`;

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
