import React, { useEffect, useState, memo } from "react";
import "./fallingfoodconfetti.css";

interface FoodItem {
  emoji: string;
  left: string;
  duration: string;
  delay: string;
}

const FallingFoodConfetti: React.FC = memo(() => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    const emojis = [
      "🍔",
      "🍕",
      "🍣",
      "🍩",
      "🍎",
      "🥗",
      "🌮",
      "🍦",
      "🍗",
      "🥨",
      "🥤",
      "🍇",
      "🍟",
      "🥞",
    ];

    const generateFoodItems = (count: number): FoodItem[] => {
      return Array.from({ length: count }).map(() => ({
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: `${Math.random() * 100}%`, // Random horizontal position
        duration: `${Math.random() * 5 + 5}s`, // Random duration (5-10 seconds)
        delay: `${Math.random() * 3}s`, // Random animation delay
      }));
    };

    const newFoodItems = generateFoodItems(55); // Number of falling emojis
    setFoodItems(newFoodItems);
  }, []);

  return (
    <div className="falling-food-container">
      {foodItems.map((item, index) => (
        <div
          key={index}
          className="falling-food-item"
          style={{
            left: item.left,
            animationDuration: item.duration,
            animationDelay: item.delay,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
});

export default FallingFoodConfetti;
