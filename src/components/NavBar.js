import React, { useState } from "react";
import { Link } from "react-router-dom";
// New imports
import SignupModal from "./modals/SignupModal";
import LoginModal from "./modals/LoginModal";

// this is the css and bootstrap
import "../NavFooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import auth from "../components/utils/auth";
// New imports
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
// import LoginForm from "react-bootstrap/Form";
// import SignUpForm from "react-bootstrap/Form";


// Import CSS
import "../components/modals/Modals.css";

function NavBar() {
  // NEW: set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container fluid>
        <Row className="backgroundColor">
          <Navbar expand={false}>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              className="navPopOut"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Navigation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link className="popOutLinks" to="/ProfilePage">
                      Profile
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="popOutLinks" to="/CreateItinerary">
                      Create an Itinerary
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="popOutLinks" to="/Explore">
                      Explore All Itineraries
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Col className="titlePlacement">
              <Link className="appTitle" to="/">
                Triptinerary
              </Link>
              </Col>
            
          
            <Col className="linkPlacement">
              {auth.loggedIn() ? (
                <>{/* Add Points */}
            <Nav.Item className="add-points">
              <Button className="btn-sm">Add Points</Button>
              <h7 className="pointspace">My Points:</h7>
            </Nav.Item>
                  <Nav.Link
                    className="loginLinks"
                    // NEW
                    onClick={auth.logout}
                    to="/signup"
                  >
                    Logout
                  </Nav.Link>
                  <Nav.Link><Link className="loginLinks" to="/ProfilePage">
                    Profile</Link>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  className="loginLinks"
                  // NEW
                  onClick={() => setShowModal(true)}
                  to="/login"
                >
                  Login/Sign Up
                </Nav.Link>
              )}
            </Col>
          </Navbar>
        </Row>
      </Container>
      {/* New */}
      {/* Set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
        className="navModal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginModal handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignupModal handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
}

export default NavBar;
