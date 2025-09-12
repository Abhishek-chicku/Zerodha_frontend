import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Server from "../Envoirment";
import "./SignUp.css";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = inputValue;

  const handleOnChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleError = (msg) => toast.error(msg, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${Server}api/auth/signup`,
        inputValue,
        { withCredentials: true }
      );

      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => (window.location.href = "/login"), 1000);
      } else {
        handleError(data.message);
      }
    } catch (error) {
      handleError("Server error, try again!");
    }
  };

  return (
    <div className="signup-container">
      <div className="overlay">
        <div className="card">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-white">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleOnChange}
                placeholder="Enter your username"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter your email"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter your password"
                className="form-control"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{
                background: "linear-gradient(to right, #00c6ff, #0072ff)",
                border: "none",
              }}
            >
              Signup
            </button>
          </form>
          <p className="text-center mt-3 text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-warning">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;

