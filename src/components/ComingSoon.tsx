import React from "react";
import NavBar from "./NavBar"; // Import the NavBar component

const ComingSoon: React.FC = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      {/* Add NavBar component */}
      <NavBar />

      {/* Content section with padding-top for the navbar */}
      <div className="pt-24 text-center items-center space-y-6">
        <h1 className="text-white text-6xl font-bold">Coming Soon</h1>
      </div>
    </div>
  );
};

export default ComingSoon;
