import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// Function to fetch places based on the query
export const fetchPlaces = async (query: string) => {
  try {
    // Backend endpoint that will handle the API request
    const url = `http://localhost:5000/api/places?query=${query}`;

    // Make the GET request to the backend
    const response = await axios.get(url);
    console.log("API Response:", response.data);
    console.log("API KEY: ", API_KEY);
    console.log("Request URL:", url);
    console.log(`Constructed URL: ${url}`);
    console.log(`Using API Key: ${API_KEY}`);

    // Return the API response
    return response.data; // Assuming 'data' contains the results you need
  } catch (error) {
    // If an error occurs, log it and rethrow it
    console.error("Error fetching places:", error);
    throw error; // This will be caught by your calling component for error handling
  }
};
