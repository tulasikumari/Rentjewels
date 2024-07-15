import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserApi } from "../apis/Api";
import Navbar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission

    const data = {
      email: email,
      password: password,
    };

    loginUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.token);
          const jsonDecode = JSON.stringify(res.data.userData);
          localStorage.setItem("user", jsonDecode);

          if (res.data.userData.isAdmin) {
            navigate("/admin/dashboard");
          } else {
            navigate("/homepage");
          }
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err.message);
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

          .login-container {
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

          .input-group {
            align-items: center;
          }

          .input-group input {
            flex: 1;
            margin-right: 10px;
            background-color: white; /* Background color of input field */
            border: 1px solid #ccc; /* Border color */
            color: black; /* Text color */
          }

          .social-text,
          .social-media {
            margin-top: 20px;
            text-align: center;
          }

          .social-media a {
            margin-right: 10px;
          }
        `}
      </style>
      <Navbar />

      <div className="box">
        <div className="login-container">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww"
              alt="Background"
            />
          </div>
          <div className="form-container">
            <h2>Login Here!</h2>

            <form onSubmit={handleSubmit}>
              <label>Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-2"
                type="email"
                placeholder="Enter your email"
                value={email} // Ensures the input field is controlled
              />

              <label>Password</label>
              <div className="input-group mb-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password} // Ensures the input field is controlled
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
              <div>
                <p
                  style={{
                    marginTop: "0px",
                    textAlign: "right",
                    color: "black",
                  }}
                >
                  <a href="/ResetPasswordForm">Forgot Password</a>
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="btn btn-primary w-10 h-10"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "black",
                    borderRadius: "2px",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#333";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "black";
                  }}
                >
                  Login
                </button>
              </div>
            </form>

            <p style={{ marginTop: "10px", textAlign: "center", color: "black" }}>
              Don't have an account? Please <a href="/Register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
