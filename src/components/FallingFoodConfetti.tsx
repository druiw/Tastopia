import React, { useEffect, useState } from "react";
import "./fallingfoodconfetti.css";

const FallingFoodConfetti: React.FC = () => {
  const [foodItems, setFoodItems] = useState<string[]>([]);

  useEffect(() => {
    const emojis = ["🍔", "🍕", "🍣", "🍩", "🍎", "🥗", "🌮", "🍦"];
    const numberOfEmojis = 55; // Increase number of falling emojis
    const newFoodItems = [];

    // Generate an array of random food items
    for (let i = 0; i < numberOfEmojis; i++) {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      newFoodItems.push(emoji);
    }

    setFoodItems(newFoodItems);
  }, []);

  // Function to generate random position
  const randomPosition = () => `${Math.random() * 100}%`; // Random horizontal position
  const randomDuration = () => `${Math.random() * 5 + 5}s`; // Random duration between 5s and 10s
  const randomDelay = () => `${Math.random() * 3}s`; // Optional: delay for more randomness

  return (
    <div className="falling-food-container">
      {foodItems.map((emoji, index) => (
        <div
          key={index}
          className="falling-food-item"
          style={{
            left: randomPosition(),
            animationDuration: randomDuration(),
            animationDelay: randomDelay(),
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default FallingFoodConfetti;
