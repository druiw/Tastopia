import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import ComingSoon from "./components/ComingSoon";

// Create the router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Search",
    element: <SearchPage />,
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
