import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./CreateItinerary.css";

function CreateItinerary() {
  // Create state variables for the fields in the form
  // Setting their initial values to an empty string
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [days, setDays] = useState("");
  const [activities, setActivities] = useState("");
  const [price, setPrice] = useState("");

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
      case "days":
        setDays(value);
        break;
      case "activities":
        setActivities(value);
        break;
      case "price":
        setPrice(value);
        break;

      default:
        break;
    }
  };

  // Once the form has been submitted, this function will post to the backend
  const handleFormSubmit = (event) => {
    // Preventing default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // On submit, alert the user their itinerary title, clear the inputs
    alert(`Thanks for sharing ${title}!`);
    setTitle("");
    setDescription("");
    setDays("");
    setActivities("");
    setPrice("");
  };

  // const addDaysClick = (event) => {
  //   let days = 1;
  //   console.log(event.target);
  //   setDays(days++);
  //   console.log(days);

  return (
    // Create a itinerary view component with stars / rating logic?
    // const [stars,setStars]= useState(0);
    // const ratingClick = event => {
    // console.log(event.target)
    // }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // const [day,setDay] = useState(1)

    // <div>
    //   users.map((itinerary) => (

    //   ))
    // </div>
    <div className="container">
      <p className="form-header">Create Your Triptinerary</p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            value={title}
            name="title"
            onChange={handleInputChange}
            type="text"
            placeholder="Title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="summary">Trip Description</Form.Label>
          <Form.Control
            value={description}
            name="description"
            onChange={handleInputChange}
            type="text"
            as="textarea"
            placeholder="Visible to all users"
            rows={3}
          />
        </Form.Group>
        <hr />
        <Form.Group className=" text-bold mb-3">
          <Form.Label htmlFor="description" name="days">
            {`Day ${days}`}
          </Form.Label>
          <Form.Control name="days" rows={1} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Activities</Form.Label>
          <Form.Control
            value={description}
            name="activities"
            onChange={handleInputChange}
            type="text"
            as="textarea"
            placeholder="Activities, places to see, restaurants..."
            rows={5}
          />
        </Form.Group>
        <Form.Label htmlFor="price">Price</Form.Label>
        <Form.Group className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <Form.Control
            value={price}
            name="price"
            onChange={handleInputChange}
            type="text"
            placeholder="Amount"
            rows={3}
          />
        </Form.Group>
        <Form.Group>
          <Button className="btn-add rounded-pill" variant="success" size="md">
            +
          </Button>
          <Button
            className="btn-submit rounded-pill"
            size="md"
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default CreateItinerary;
