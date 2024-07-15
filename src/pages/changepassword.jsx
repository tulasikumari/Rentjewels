import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { changePasswordApi } from "../apis/Api";
import Navbar from "../components/Navbar";

const ChangePassword = () => {
  const user = localStorage.getItem("email");
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");

  const changeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: user,
      changepassword: newPassword,
    };

    changePasswordApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server Error!");
      });
  };

  return (
    <>
      <style>
        {`
          .box {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .change-password-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 1050px;
            height: 520px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 0px 20px 0px;
            margin-top: 50px;
          }

          .image-container {
            width: 50%;
            height: 100%;
            overflow: hidden;
            border-radius: -50px;
            padding: 20px;
          }

          .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }

          .form-container {
            width: 50%;
            height: 100%;
            padding: 50px;
          }

          .form-container h2 {
            margin-bottom: 50px;
            margin: 30px auto;
            font-size: 2.5em;
          }

          .form-container label {
            display: block;
            margin-bottom: 5px;
          }

          .form-container input {
            margin-bottom: 20px;
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .form-container button {
            width: 100%;
            padding: 10px;
            background-color: black;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .form-container button:hover {
            background-color: #333;
          }
        `}
      </style>
      <Navbar />
      <div className="box">
        <div className="change-password-container">
          <div className="form-container">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit} className="change-password-form">
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={changeNewPassword}
                required
              />
              <button type="submit">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
