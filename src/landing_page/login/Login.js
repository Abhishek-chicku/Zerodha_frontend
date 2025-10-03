import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Server from "../Envoirment";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleError = (msg) => toast.error(msg, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${Server}/login`, inputValue, {
        withCredentials: true,
      });

      if (data.success) {
        handleSuccess(data.message);
        setTimeout(
          () => (window.location.href = "https://dashboard-zerodha-cjig.onrender.com/"),
          1000
        );
      } else {
        handleError(data.message);
      }
    } catch (error) {
      handleError("Server error, try again!");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #00c6ff, #0072ff)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
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
            <label className="form-label">Password</label>
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
            Login
          </button>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;




