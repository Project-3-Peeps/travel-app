import React from "react";
import Homepage from "./components/pages/homepage/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CreateItinerary from "./components/pages/itinerary/CreateItinerary";
// CSS and bootstrap
import "./NavFooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';



function App() {
  return (
    <Router>
      <div>
      <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Link to="#/">Triptinerary</Link>
    <Nav.Item>
      <Link to="#/login">Login/Lougout</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="#/signup">Sign Up</Link>
    </Nav.Item>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Profile</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/CreateItinerary" element={<CreateItinerary />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
