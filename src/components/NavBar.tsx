// NavBar.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // This will be for the home icon

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-transparent text-white">
      {/* Center Text */}
      <div className="flex-1 text-center text-3xl font-bold">Tastopia</div>

      {/* Home Button */}
      <button
        onClick={handleClick} // Add onClick Handler
        className="p-2 bg-white text-red-400 rounded-full hover:bg-gray-300"
      >
        <FaHome size={20} />
      </button>
    </nav>
  );
};

export default NavBar;
