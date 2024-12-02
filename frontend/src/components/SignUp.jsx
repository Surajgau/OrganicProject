import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SignUp = () => {
  const [data, setData] = useState({
    name: " ",
    email: " ",
    password: " ",
    contact: " ",
    gender: 0,
  });

  const navigate = useNavigate();

  const handleChange = async (e) => {
    console.log(e.target);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hello try");
      const response = await axios.post(
        "http://localhost:1231/signup/signup",
        data
      );
      console.log(response);
      if (response.data.status === 200) {
        toast.success(response.data.message);
        navigate("/Login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="input-group">
          <label htmlFor="contact">Contact:</label>
          <input type="tel" id="contact" name="contact" required />
        </div>
        <div className="input-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" required>
            <option value="">Select</option>
            <option value={0}>Male</option>
            <option value={1}>Female</option>
            <option value={2}>Other</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/Login">Log in here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
