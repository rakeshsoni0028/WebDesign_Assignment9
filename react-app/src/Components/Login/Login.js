import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignInSide from "./SignInSide";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Handle successful login: Store token in local storage
      console.log("Login successful!", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      // Handle login failure
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <SignInSide></SignInSide>
    </>
  );
};

export default Login;
