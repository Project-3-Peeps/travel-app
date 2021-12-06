import React, { useState } from "react";
// import axios from "axios";
import { Form, Button, Accordion } from "react-bootstrap";
import API from "../../utils/API";
// import token from "../../utils/auth";
import auth from "../../utils/auth";
import "./CreateItinerary.css";
// import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
// import auth from "../../utils/auth"

function CreateItinerary(props) {
  let history = useHistory()
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [newItinerary, setNewItinerary] = useState({
    creator: "Change this later",
    // Added image field
    image: "",
    title: "",
    description: "",
    price: "",
    days: [],
  });
  // future development: create component for each day, inside newDay state
  const [newDay, setNewDay] = useState({
    city: "",
    activities: [],
    // TODO: change day_number lenght
    day_number: 1,
  });
  const [newActivities, setActivities] = useState({
    where: "",
    what: "",
    cost: "",
  });

  // Dealing with name field changes to update our state
  const handleInputChange = (event) => {
    // const name = event.target.name;
    if (
      event.target.name === "what" ||
      event.target.name === "where" ||
      event.target.name === "cost"
    ) {
      setActivities({
        ...newActivities,
        [event.target.name]: event.target.value,
      });

      setNewDay({
        ...newDay,
        activities: [newActivities],
      });
      setNewItinerary({
        ...newItinerary,
        days: [newDay],
      });
    } else if (event.target.name === "city") {
      setNewDay({
        ...newDay,
        [event.target.name]: event.target.value,
      });
      setNewItinerary({
        ...newItinerary,
        days: [newDay],
      });
    } else {
      setNewItinerary({
        ...newItinerary,
        [event.target.name]: event.target.value,
      });
    }
  };

  // Once the form has been submitted, this function will post to the backend
  const handleFormSubmit = async (event) => {
    // Preventing default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("submit");
    console.log(newItinerary);
    props.setViewItin(newItinerary)
    // send the newItinerary to the backend using axios.
    // render the res from backend
    const token = auth.getToken();
    const response = await API.createItinerary(token, newItinerary);
    // props.setViewItin([response.data]);
    console.log(response)
    window.search = response
    // window.location.assign("/ViewItinerary");
    history.push("/ViewItinerary");
  };

  return (
    <div className="container">
      <p className="form-header">Create Your Triptinerary</p>
      {/* Intinerary Preview Info */}
      <Form>
        {/* Input for Image URL */}
        <Form.Group className="mb-3">
          <Form.Label id="image">Image 📷</Form.Label>
          <Form.Control
            value={newItinerary.image}
            name="image"
            onChange={handleInputChange}
            type="text"
            placeholder="Add your image url here"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="title">Title</Form.Label>
          <Form.Control
            value={newItinerary.title}
            name="title"
            onChange={handleInputChange}
            type="text"
            placeholder="The Lone Star Experience"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="summary">Trip Description</Form.Label>
          <Form.Control
            value={newItinerary.description}
            name="description"
            onChange={handleInputChange}
            type="text"
            as="textarea"
            placeholder="Going to a good old fashion texas rodeo"
            rows={3}
          />
        </Form.Group>
        <Form.Label id="price">Itinerary Price</Form.Label>
        <Form.Group className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Points</span>
          </div>
          <Form.Control
            value={newItinerary.price}
            name="price"
            onChange={handleInputChange}
            type="text"
            placeholder="40"
            rows={3}
          />
        </Form.Group>
        <hr />
        {/* Day Form Inputs */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header id="days" name="days" value={newItinerary.days}>
              Day 1
            </Accordion.Header>
            <Accordion.Body>
              <Form.Group id="location" className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  name="city"
                  value={newDay.city}
                  onChange={handleInputChange}
                  type="text"
                  as="textarea"
                  placeholder="Country or City"
                  rows={1}
                />
              </Form.Group>

              {/* Add Activity Start */}
              <Form.Group id="activities" className="mb-3">
                <Form.Label>Activities</Form.Label>
                <br />
                <Form.Label>Where</Form.Label>
                <Form.Control
                  name="where"
                  value={newActivities.where}
                  onChange={handleInputChange}
                  type="text"
                  as="textarea"
                  placeholder="Fort Worth Stockyards"
                  rows={1}
                />
                <br />
                <Form.Label>What</Form.Label>
                <Form.Control
                  name="what"
                  value={newActivities.what}
                  onChange={handleInputChange}
                  type="text"
                  as="textarea"
                  placeholder="Beers, brisket, and bulls"
                  rows={1}
                />
              </Form.Group>
              <Form.Label id="cost">Cost</Form.Label>
              <Form.Group className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <Form.Control
                  name="cost"
                  value={newActivities.cost}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="100.00"
                  rows={3}
                />
              </Form.Group>
              {/* Add Activity End */}
              <Button
                className="btn-add rounded-pill m-2"
                variant="success"
                size="md"
              >
                + Add Day
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
        <Form.Group className="text-center">
          <Button
            className="btn-submit rounded-pill m-2"
            size="md"
            onClick={handleFormSubmit}
          >
            Save Itinerary
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default CreateItinerary;
