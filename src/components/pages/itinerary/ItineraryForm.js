import React from "react";
import { Form, Button } from "react-bootstrap";
import "./ItineraryForm.css";

function ItineraryForm() {
  // set initial form state
  // const [userFormData, setUserFormData] = useState({
  //   title: "",
  //   description: "",
  //   price: "",
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  return (
    <div className="container">
      <h2>Your Triptinerary</h2>
      <Form>
        <Form.Group className="mb-3" id="title">
          <Form.Control
            type="text"
            placeholder="Title"
            // name="title"
            // onChange={handleInputChange}
            // value={userFormData.title}
            // required
          />
        </Form.Group>
        <Form.Group className="mb-3" id="summary">
          <Form.Label>Trip Summary</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Visible to all users"
            rows={3}
          />
        </Form.Group>
        <hr></hr>
        <Form.Group className=" text-bold mb-3" id="trip-day">
          <Form.Label id="day">Day 1</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group className="mb-3" id="trip-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Activities, places to see, restaurants..."
            rows={3}
          />
        </Form.Group>
        <label> Total Price </label>
        <Form.Group className="input-group mb-3" id="day-price">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="text" className="form-control" />
        </Form.Group>
        <Button className="btn-circle" variant="success" size="md">
          +
        </Button>
        <Button className="btn-submit" variant="primary" size="md">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ItineraryForm;
