import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      const data = await axios.get("http://localhost:1231/signup/fid");
      console.log(data);
      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  const move = (id) => {
    console.log(id);
    navigate(`/View/${id}`);
  };

  const deleteHNDLER = async (id) => {
    console.log(id);
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:1231/signup/deleteUser/${id}`);
          handleSubmit()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>User Information Table</h2>
      <table border={1} cellPadding={10} cellSpacing={0} className="table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Contact</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Login Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, index) => (
            <tr id={e?._id}>
              <td>{index + 1}</td>
              <td>{e?.name}</td>
              <td>{e?.email}</td>
              <td>{e?.password}</td>
              <td>{e?.contact}</td>
              <td>{e?.dob}</td>
              <td>
                {e?.gender === 0
                  ? "Male"
                  : e?.gender === 1
                  ? "Female"
                  : "Other"}
              </td>
              <td>{e?.logInTime}</td>
              <td>
                <button onClick={() => move(e?._id)}>View</button>
                <button onClick={() => deleteHNDLER(e?._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
