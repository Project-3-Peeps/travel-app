import React, { useState } from "react";
import { Form, Button, Accordion } from "react-bootstrap";
import API from "../../utils/API";
import "./CreateItinerary.css";

function CreateItinerary() {
  // Create state variables for the fields in the form
  // Setting their initial values to an empty string

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [days, setDays] = useState("");
  // const [activities, setActivities] = useState("");
  // const [price, setPrice] = useState("");

  const url = "http://localhost:5001/api/createItinerary";

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [newItinerary, setNewItinerary] = useState({
    title="",
    description="",
    price="",
    days="1",
      activities="",
              what="",
              where="",
       cost=""
  })

  // Dealing with name field changes to update our state
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "days":
        setDays(value);
        break;
      case "activities":
        setActivities(value);
        break;
      case "what":
        setActivities(value);
        break;
      case "where":
        setPrice(value);
        break;
      case "what":
        setPrice(value);
        break;

      default:
        break;
    }
  };
  // Add another activity to the same day
  function addActivity({}) {}
  // Add day to the intinerary
  function addDay({}) {}

  // Once the form has been submitted, this function will post to the backend
  const handleFormSubmit = (event) => {
    // Preventing default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // Post request
    axios
      .post(url, {
        title: data.title,
        description: data.description,
        price: data.price,
        days: data.days,
        activities: data.activities,
        what: data.what,
        where: data.where,
        cost: data.cost,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  // On submit, alert the user their itinerary title, clear the inputs
  alert(`Thanks for sharing ${title}!`);
  // setTitle("");
  // setDescription("");
  // setDays("");
  // setActivities("");
  // setPrice("");
  setNewItinerary("");

  return (
    <div className="container">
      <p className="form-header">Create Your Triptinerary</p>
      {/* Intinerary Preview Info */}
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label id="title">Title</Form.Label>
          <Form.Control
            // value={title}
            name="title"
            onChange={handleInputChange}
            type="text"
            placeholder="The Lone Star Experience"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="summary">Trip Description</Form.Label>
          <Form.Control
            // value={description}
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
            // value={price}
            name="price"
            onChange={handleInputChange}
            type="text"
            placeholder="40"
            rows={3}
          />
        </Form.Group>
        <hr />
        Day Form Inputs
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header id="days" name="days" value={days}>
              Day 1
            </Accordion.Header>
            <Accordion.Body>
              <Form.Group id="location" className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  name="city"
                  // value={city}
                  type="text"
                  as="textarea"
                  placeholder="Country or City"
                  rows={1}
                />
              </Form.Group>

              {/* Add Activity Start */}
              <Form.Group id="activities" className="mb-3" value={activities}>
                <Form.Label>Activities</Form.Label>
                <br />
                <Form.Label>Where</Form.Label>
                <Form.Control
                  name="where"
                  // value={where}
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
                  // value={what}
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
                  // value={cost}
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
                onClick={addActivity}
              >
                + Add Activity
              </Button>
              <Button
                className="btn-add rounded-pill m-2"
                variant="danger"
                size="md"
              >
                - Remove Activity
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
        <Form.Group className="text-center">
          <Button
            className="btn-add rounded-pill m-2"
            variant="warning"
            size="md"
            onClick={addDay}
          >
            + Add Day
          </Button>
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
