import React, { useState } from "react";
import NavBar from "./NavBar"; // Assuming NavBar is in the same folder
import { fetchPlaces } from "../services/apiRequest"; // Adjust the path based on your file structure
import FallingFoodConfetti from "./FallingFoodConfetti";

// Define the type for a restaurant
export interface Restaurant {
  name: string;
  formatted_address: string;
  rating: number;
  // Add other fields based on the API response if necessary
}

const SearchPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState("1");
  const [location, setLocation] = useState("");
  const [foodType, setFoodType] = useState("Fast Food");
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]); // Use Restaurant type here
  const [error, setError] = useState<string | null>(null); // State for error handling

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const query = `${foodType} in ${location}`; // Construct the query based on user inputs
      const data = await fetchPlaces(query); // Fetch data from the API
      setRestaurants(data.results); // Set the fetched restaurants in state
    } catch (error) {
      setError("Failed to fetch restaurants. Please try again later.");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 overflow-auto">
      {/* NavBar fixed at top */}
      <NavBar />

      {/* FallingFoodConfetti positioned between background and content */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FallingFoodConfetti />
      </div>

      {/* Content section with padding-top for navbar */}
      <div className="relative z-20 pt-24 pb-24 w-full flex justify-center">
        <div className="text-center space-y-8 bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">Find Your Next Meal</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Price Range Selector */}
            <div>
              <label className="block text-xl">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
              </select>
            </div>

            {/* Location Input */}
            <div>
              <label className="block text-xl">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter a location"
                className="w-full p-2 border rounded-lg"
              />
            </div>

            {/* Food Type Selector */}
            <div>
              <label className="block text-xl">Food Type</label>
              <select
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="Fast Food">Fast Food</option>
                <option value="Takeout">Takeout</option>
                <option value="Casual Dining">Casual Dining</option>
                <option value="Fine Dining">Fine Dining</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all"
            >
              Search
            </button>
          </form>

          {/* Display Error Message */}
          {error && <div className="text-red-500">{error}</div>}

          {/* Display Search Results */}
          {restaurants.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold">Search Results</h3>
              <ul className="mt-4 bg-white rounded-lg shadow">
                {restaurants.map((restaurant, index) => (
                  <li key={index} className="mb-4 p-4 border-b">
                    <strong>{restaurant.name}</strong>
                    <p>{restaurant.formatted_address}</p>
                    <p>{restaurant.rating} ⭐</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
