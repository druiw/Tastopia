import React, { useState, useEffect } from "react";
import { fetchPlaces } from "../services/apiRequest";
import { Restaurant } from "./SearchPage";

interface RestaurantListProps {
  foodType: string;
  location: string;
  priceRange: string;
}

const RestaurantList: React.FC<RestaurantListProps> = ({
  foodType,
  location,
  priceRange,
}) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]); // State to hold restaurant data
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        // Add console logs to check the state values
        console.log(
          "Fetching restaurants with query:",
          `${foodType} in ${location} with price range ${priceRange}`
        );

        const query = `${foodType} in ${location} with price range ${priceRange}`;
        const data = await fetchPlaces(query);

        console.log("Fetched data:", data); // Log the response data

        setRestaurants(data.results); // Set the fetched restaurants in state
      } catch (error) {
        console.error("Error fetching restaurants:", error); // Log any errors
        setError("Failed to fetch restaurants. Please try again later.");
      }
    };

    // Only fetch if necessary params are provided
    if (foodType && location && priceRange) {
      getRestaurants();
    }
  }, [foodType, location, priceRange]); // Add dependencies to rerun effect when these values change

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Restaurant List</h1>
      <ul>
        {restaurants.map((restaurant: Restaurant, index: number) => (
          <li key={index}>
            <strong>{restaurant.name}</strong>
            <p>{restaurant.formatted_address}</p>
            <p>{restaurant.rating} ⭐</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
