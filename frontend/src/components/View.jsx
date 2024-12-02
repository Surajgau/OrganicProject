import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View() {
  const [data, setData] = useState();

  console.log(data,"jk")
  
  const id = useParams().id;
  
  console.log(id,"id")
  
  const getData = async () => {
    try {
        console.log("object")
      const da = await axios.get(`http://localhost:1231/signup/fbp/${id}`);
      console.log(da, "jk");
      setData(da.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required   value={data?.name}/>
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required   value={data?.email}/>
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className="input-group">
        <label htmlFor="contact">Contact:</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          required
          value={data?.contact}
        />
      </div>
    </>
  );
}

export default View;
