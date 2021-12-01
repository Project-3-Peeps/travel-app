import React, {useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";

// Import CSS
import "./Modals.css";

const LoginModal = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form onSubmit={props.submit} className="LoginModal">
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={props.change}
            value={props.loginState.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={props.change}
            value={props.loginState.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(props.loginState.email && props.loginState.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginModal;
