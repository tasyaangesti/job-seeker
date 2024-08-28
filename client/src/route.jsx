import { createBrowserRouter } from "react-router-dom";
import Layout from "./view/Layout";
import Dashboard from "./view/Dashboard";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
]);
