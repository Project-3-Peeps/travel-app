import React, {useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";

// Import CSS
import "./Modals.css";

const SignupModal = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <Form onSubmit={props.submit} className="SignupModal">
      {/* show alert if server response is bad */}
      <Alert
        dismissible
        onClose={() => setShowAlert(false)}
        show={showAlert}
        variant="danger"
      >
        Something went wrong with your signup!
      </Alert>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your username"
          name="username"
          onChange={props.change}
          value={props.signupState.username}
          required
        />
        <Form.Control.Feedback type="invalid">
          Username is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your email address"
          name="email"
          onChange={props.change}
          value={props.signupState.email}
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
          placeholder="password"
          name="password"
          onChange={props.change}
          value={props.signupState.password}
          required
        />
        <Form.Control.Feedback type="invalid">
          Password is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Button
        disabled={
          !(
            props.signupState.username &&
            props.signupState.email &&
            props.signupState.password
          )
        }
        type="submit"
        variant="success"
      >
        Signup
      </Button>
    </Form>
  );
};

export default SignupModal;
