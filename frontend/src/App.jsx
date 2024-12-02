import { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./components/Login";

import SignUp from "./components/SignUp";
import Contact from "./components/Contact";

import View from "./components/View";
import SeeUser from "./components/SeeUser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// import UserDetials from "./Component/UserDetails";
// import ViewSingleUser from "./Component/ViewSingleUser";
function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
         
          <Route path="/View/:id" element={<View/>}></Route>
        
          <Route path="/SeeUser" element={<SeeUser/>}></Route>
        

          

        </Route>
      </Routes>
      <ToastContainer/>

    </>
  );
}

export default App;
