import "./App.css";
import { RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { router } from "./route";
import Dashboard from "./view/Dashboard";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
