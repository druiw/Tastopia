import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"; // Assuming NavBar is in the same folder

const SearchPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState("1");
  const [location, setLocation] = useState("");
  const [foodType, setFoodType] = useState("Fast Food");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission
    console.log({ location, foodType, priceRange });
    navigate("/comingsoon");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      {/* NavBar fixed at top */}
      <NavBar />

      {/* Content section with padding-top for navbar */}
      <div className="pt-24 w-full flex justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
