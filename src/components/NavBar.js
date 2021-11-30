import React from "react";
import { Link } from "react-router-dom";

// this is the css and bootstrap
import "../NavFooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar() {
    return (
       
        <Container fluid>
            <Row>
                <Navbar bg="light" expand={false} >
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link><Link to="/ProfilePage">Profile</Link></Nav.Link>
                                <Nav.Link><Link to="/CreateItinerary">Create an Itinerary</Link></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Col className="titlePlacement" >
                        <Link className="appTitle" to="/">Triptinerary</Link>
                    </Col>
                    <Col className="linkPlacement" >
                        <Link className="loginLinks" to="/login">Login/Logout</Link>
                        <Link className="loginLinks" to="/signup">Sign Up</Link>
                    </Col>
                </Navbar>
            </Row>
        </Container> 
        
     );  
}

export default NavBar;