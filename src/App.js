import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// importing the pages and modals
import Homepage from "./components/pages/homepage/Homepage";
import Footer from "./components/Footer";
import CreateItinerary from "./components/pages/itinerary/CreateItinerary";
import ProfilePage from "./components/pages/profile/ProfilePage"
// import LoginModal from "./components/modals/LoginModal";
// import SignupModal from "./components/modals/SignupModal";
import NavBar from "./components/NavBar";
// CSS and bootstrap
import "./NavFooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
   <Router>
   <NavBar />
      {/* Here are the routes to the different pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CreateItinerary" element={<CreateItinerary />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        {/* <Route path="/login" element={<LoginModal />} /> */}
        {/* <Route path="/signup" element={<SignupModal />} /> */}
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
