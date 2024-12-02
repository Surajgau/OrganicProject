import React, { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import cookies from "js-cookie"

const Login = () => {
  const [data, setData] = useState({
    email: " ",
    password: " ",
  });
  const navigate=useNavigate();
  const handleChange = async (e) => {
    console.log(e.target);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hello try ");
      const dataa = await axios.post(
        "http://localhost:1231/signup/login",
        data
      );
      console.log(dataa);
      setData(dataa.data.body);

      if(dataa.data.status===200){
        toast.success(dataa.data.message);
        // cookies.set("userInfo",JSON.stringify(dataa.data.body))
        // sessionStorage.setItem("user",JSON.stringify(dataa.data.body))
        // localStorage.setItem("user",JSON.stringify(dataa.data.body))

        cookies.set("user",JSON.stringify(dataa.data.body));

        navigate("/")

      }
      else{
        toast.error(dataa.data.message)
      }
    } catch (error) {
      console.log("object");
      console.log(error);
    }
  };

  return (
    <div className="main">
      <h3>Enter your login Details</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label htmlFor="first">Email:</label>
        <input
          type="email"
          id="first"
          name="email"
          placeholder="Enter your Username"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          required
        />
        <div className="wrap">
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>
        Not registered?
        <Link to="/signUp" style={{ textDecoration: "none" }}>
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
