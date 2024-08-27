import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./view/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
