import { createBrowserRouter } from "react-router-dom";
import Layout from "./view/Layout";
import Dashboard from "./view/Dashboard";
import DetailJob from "./view/DetailJob";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/job/:id", element: <DetailJob /> },
    ],
  },
]);
