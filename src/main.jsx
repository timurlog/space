import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorElement from "./pages/ErrorElement/ErrorElement.jsx";
import App from "./App.jsx";
import Destination from "./pages/Destination/Destination.jsx";
import Crew from "./pages/Crew/Crew.jsx";
import Technology from "./pages/Technology/Technology.jsx";
import Planet from "./components/Planet/Planet.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/destination",
    element: <Destination />,
    children: [
      {
        path: "/destination/:planetId",
        element: <Planet />,
      },
    ],
  },
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
