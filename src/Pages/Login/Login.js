import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleFormSub = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  const navigateSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="min-vh-100  w-50 mx-auto container">
      <h1 className="text-center text-primary mt-2">Please Login</h1>
      <Form onSubmit={handleFormSub}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="mt-2">
        New To Mursalin's Car?{" "}
        <span onClick={navigateSignUp} className="text-primary cursor-my-pointer">
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
