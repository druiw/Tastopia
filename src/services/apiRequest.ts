import axios from "axios";

// Load environment variables from .env file
const API_KEY = process.env.REACT_APP_API_KEY; // Make sure the key matches your .env variable name

// Function to fetch places based on the query
export const fetchPlaces = async (query: string) => {
  try {
    // Construct the API request URL
    const url = `https://api.yourapi.com/search?query=${query}&key=${API_KEY}`;

    // Make the GET request to the API
    const response = await axios.get(url);

    // Return the API response
    return response.data; // Assuming 'data' contains the results you need
  } catch (error) {
    // If an error occurs, log it and rethrow it
    console.error("Error fetching places:", error);
    throw error; // This will be caught by your calling component for error handling
  }
};
