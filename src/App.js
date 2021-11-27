import React from "react";
import Homepage from "./components/pages/homepage/Homepage";
import Footer from "./components/Footer";
import "./NavFooter.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ItineraryForm from "./components/pages/itinerary/ItineraryForm";

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <div>Triptinerary</div>
          <div className="navlinks">
            <Link to="/">Homepage</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <ItineraryForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
