import React, { useState } from "react";

import { Modal, Button, Form, Container } from "react-bootstrap";
import { RealEstateState } from "../Context/EstateContext";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SignupPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");

  const { alert, setAlert } = RealEstateState();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(e);
    if (!email || !password || !confirmPass || password !== confirmPass) {
      e.preventDefault();
      // dispatch(messageAlert("Fill Data Properly"));
      // console.log("error in ekcm ");
      setAlert({
        open: true,
        message: "Fill data properly",
        type: "danger",
      });
      // return;
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${res.user.email}`,
        type: "success",
      });
      navigate("/login");
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "warning",
      });
    }
  };
  return (
    <Container className="my-5">
      <h1 className="text-center">Register Page</h1>
      <Form>
        <Form.Group className="mb-3" controlId="signupForm">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={confirmPass}
            onChange={(e) => setconfirmPass(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSignup(e)}
        >
          Submit
        </Button>
      </Form>
      <div className="text-secondary">
        Already have Account ?{" "}
        <Link to="/login" className="text-success underline">
          Login{" "}
        </Link>
      </div>
    </Container>
  );
};

export default SignupPage;
