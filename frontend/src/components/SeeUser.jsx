import axios from "axios";
import React, { useEffect, useState } from "react";

const SeeUser = () => {
  const [data, setdata] = useState([]);

  const handleSubmit = async (e) => {
    try {
      const resp = await axios.get("http://localhost:1231/signup/fid");
      console.log(resp);
      setdata(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div>
      <h2>Sample Table</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{e?.name}</td>
              <td>{e?.email}</td>
              <td>{e?.contact}</td>
              <td>
                {e?.gender === 0
                  ? "Male"
                  : e?.gender === 1
                  ? "Female"
                  : "Other"}
              </td>
              <td>
                <button className="action-button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeeUser;
