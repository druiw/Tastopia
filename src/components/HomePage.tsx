import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/search");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="text-center space-y-6">
        <h1 className="text-white text-6xl font-bold">Tastopia</h1>
        <button
          onClick={handleClick}
          className="text-white text-2xl font-semibold px-6 py-3 bg-black rounded-lg shadow-lg hover:bg-gray-800 transition-all"
        >
          Find your next meal here
        </button>
      </div>
    </div>
  );
};

export default HomePage;
