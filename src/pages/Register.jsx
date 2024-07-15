// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { createUserApi } from "../apis/Api";
// import Navbar from "../components/Navbar";

// const Register = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   // const [userImage, setUserImage] = useState(null);

//   const changeFirstname = (e) => {
//     setFirstName(e.target.value);
//   };

//   const changeLastname = (e) => {
//     setLastName(e.target.value);
//   };

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const changePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const changeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   // const handleImageChange = (e) => {
//   //   const file = e.target.files[0];
//   //   setUserImage(file);
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if password and confirmation password match
//     if (password !== confirmPassword) {
//       toast.error("Password and confirmation password don't match");
//       return;
//     }

//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       // userImage: userImage,
//     };

//     createUserApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//         }
//       })
//       .catch((err) => {
//         toast.error("Server Error");
//         console.log(err.message);
//       });
//   };

//   return (
//     <>
//       <style>
//         {`
//           body {
//             overflow: auto;
//             margin: 0;
//             font-family: 'Arial', sans-serif;
//           }
//           .register-container {
//             height: 100vh;
//             padding: 10px;
//             background: url("https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww") center center / cover no-repeat;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             overflow-y: auto; // Allow vertical scrolling
//           }
//           .form-container {
//             border: 3px solid teal;
//             border-radius: 10px;
//             padding: 22px;
//             width: 35%;
//             text-align: left;
//             background-color: rgba(255, 255, 255, 0.7);
//             margin-right: 0px;
//             flex-direction: column;
//             align-items: center;
//             margin-top: 50px;
//           }

//           .image-container {
//             width: 100px; // Set your desired width
//             height: 100px; // Set your desired height
//             border-radius: 50%; // This will create a circular container
//             overflow: hidden; // This ensures the image stays within the container
//             margin-bottom: 20px;
//           }

//           .image-container img {
//             width: 100%; // Make the image fill the container
//             height: 100%; // Make the image fill the container
//             object-fit: cover; // Maintain aspect ratio and cover the container
//             border-radius: 50%; // Ensure the image is also circular
//           }

//           @media (max-width: 768px) {
//             .form-container {
//               width: 80%;
//             }
//           }

//           @media (max-width: 576px) {
//             .form-container {
//               width: 90%;
//             }
//           }
//         `}
//       </style>
//       <Navbar />

//       <div className="register-container">
//         <div className="form-container">
//           <h2 style={{ margin: "0 0 20px" }}>Create your Account!</h2>
//           <form>
//             <div className="image-container">
//               {/* Display the user profile image */}
//               {/* {userImage && (
//                 <img src={URL.createObjectURL(userImage)} alt="Profile" />
//               )} */}
//             </div>

//             {/* <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="form-control mb-2"
//             /> */}

//             <label>Firstname</label>
//             <input
//               onChange={changeFirstname}
//               type="text"
//               className="form-control mb-2"
//               placeholder="Enter your firstname"
//             />

//             <label>Lastname</label>
//             <input
//               onChange={changeLastname}
//               type="text"
//               className="form-control mb-2"
//               placeholder="Enter your lastname"
//             />

//             <label>Email Address</label>
//             <input
//               onChange={changeEmail}
//               type="email"
//               className="form-control mb-2"
//               placeholder="Enter your email"
//             />

//             <label>Password</label>
//             <div className="input-group mb-2">
//               <input
//                 onChange={changePassword}
//                 className="form-control"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//               />
//               <button
//                 className="btn btn-outline-secondary"
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
//               </button>
//             </div>

//             <label>Confirm Password</label>
//             <input
//               onChange={changeConfirmPassword}
//               type="password"
//               className="form-control mb-2"
//               placeholder="Confirm your password"
//             />

//             <button
//               onClick={handleSubmit}
//               className="btn btn-primary w-100"
//               style={{
//                 backgroundColor: "teal",
//                 borderColor: "teal",
//                 borderRadius: "5px",
//                 transition: "background-color 0.3s",
//               }}
//             >
//               Create an Account
//             </button>

//             <p
//               className="text-black text-decoration-none mt-2"
//               style={{ display: "flex", justifyContent: "center" }}
//             >
//               Already have an account?{" "}
//               <a href="/login" className="text-teal">
//                 Login
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { toast } from "react-toastify";
// import { createUserApi } from "../apis/Api";
// import Navbar from "../components/Navbar";

// const Register = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const changeFirstname = (e) => {
//     setFirstName(e.target.value);
//   };

//   const changeLastname = (e) => {
//     setLastName(e.target.value);
//   };

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const changePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const changeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       toast.error("Password and confirmation password don't match");
//       return;
//     }

//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//     };

//     createUserApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//         }
//       })
//       .catch((err) => {
//         toast.error("Server Error");
//         console.log(err.message);
//       });
//   };

//   return (
//     <>
//       <style>
//         {`
//           .box {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 110vh;
//           }

//           .login-container {
//             display: flex;
//             justify-content: space-around;
//             align-items: center;
//             padding: 5px;
//             width: 1000px;
//             height: 590px;
//             background-color: #ffffff;
//             border-radius: 10px;
//             box-shadow: 0px 0px 20px 0px #CD478A;
//           }

//           .image-container {
//             width: 50%;
//             height: 100%;
//             overflow: hidden;
//             border-radius: 10px;
//             padding: 5px;
//           }

//           .image-container img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             border-radius: 10px;
//           }

//           .form-container {
//             width: 50%;
//             height: 100%;
//           }

//           .form-container h2 {
//             margin: 10px auto;
//             font-size: 2em;
//           }

//           .form-container label {
//             display: block;
//             margin-bottom: 5px;
//           }

//           .input-group {
//             display: flex;
//             align-items: center;
//           }

//           .input-group input {
//             flex: 1;
//             margin-right: 10px;
//           }

//           .social-text,
//           .social-media {
//             margin-top: 20px;
//             text-align: center;
//           }

//           .social-media a {
//             margin-right: 10px;
//           }
//         `}
//       </style>

//       <Navbar />

//       <div className="box">
//         <div className="login-container">
//           <div className="image-container">
//             <img
//               src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww"
//               alt="Background"
//             />
//           </div>
//           <div className="form-container">
//             <FontAwesomeIcon
//               icon={faUser}
//               style={{
//                 fontSize: "50px",
//                 margin: "auto",
//                 display: "block",
//                 marginBottom: "10px",
//                 borderRadius: "50%",
//                 background: "black",
//                 padding: "10px",
//                 color: "white",
//               }}
//             />
//             <h2>Create your Account!</h2>

//             <form>
//               <label>Firstname</label>
//               <input
//                 onChange={changeFirstname}
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Enter your firstname"
//               />

//               <label>Lastname</label>
//               <input
//                 onChange={changeLastname}
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Enter your lastname"
//               />

//               <label>Email Address</label>
//               <input
//                 onChange={changeEmail}
//                 type="email"
//                 className="form-control mb-2"
//                 placeholder="Enter your email"
//               />

//               <label>Password</label>
//               <div className="input-group mb-2">
//                 <input
//                   onChange={changePassword}
//                   className="form-control"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   className="btn btn-outline-secondary"
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
//                 </button>
//               </div>

//               <label>Confirm Password</label>
//               <input
//                 onChange={changeConfirmPassword}
//                 type="password"
//                 className="form-control mb-2"
//                 placeholder="Confirm your password"
//               />

//               <button
//                 onClick={handleSubmit}
//                 className="btn btn-primary w-100"
//                 style={{
//                   backgroundColor: "#CD478A",
//                   borderColor: "#CD478A",
//                   borderRadius: "5px",
//                   transition: "background-color 0.3s",
//                 }}
//               >
//                 Create an Account
//               </button>

//               <p
//                 style={{ marginTop: "20px", textAlign: "center", color: "black" }}
//               >
//                 Already have an account? Please <a href="/login">Login</a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Register;

import React, { useState } from "react";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { createUserApi } from "../apis/Api";
import Navbar from "../components/Navbar";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const changeFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastname = (e) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith("@gmail.com")) {
      toast.error("Email must contained @gmail.com ");
      return;
    }


    if (password !== confirmPassword) {
      toast.error("Password and confirmation password don't match");
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    createUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
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
            // width: 900%; /* Adjust the width value as needed */
          }
          

          .login-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 5px;
            width: 1050px;
            height: 550px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 0px 20px 0px ;
            margin-top: 50px;
          }

          .image-container {
            width: 52%;
            height: 99%;
            overflow: hidden;
            border-radius: 10px;
            padding: 5px;
          }

          .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }

          .form-container {
            width: 40%;
            height: 90%;
          }

          .form-container h2 {
            margin: 10px auto;
            font-size: 2em;
          }

          .form-container label {
            display: block;
            margin-bottom: 5px;
          }

          .input-group {
            display: flex;
            align-items: center;
          }

          .input-group input {
            flex: 1;
            margin-right: 10px;
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
          <div className="form-container">
            <h2>Create your Account!</h2>

            <form>
              <label>Firstname</label>
              <input
                onChange={changeFirstname}
                type="text"
                className="form-control mb-2"
                placeholder="Enter your firstname"
              />

              <label>Lastname</label>
              <input
                onChange={changeLastname}
                type="text"
                className="form-control mb-2"
                placeholder="Enter your lastname"
              />

              <label>Email Address</label>
              <input
                onChange={changeEmail}
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
              />

              <label>Password</label>
              <div className="input-group mb-2">
                <input
                  onChange={changePassword}
                  className="form-control"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>

              <label>Confirm Password</label>
              <input
                onChange={changeConfirmPassword}
                type="password"
                className="form-control mb-2"
                placeholder="Confirm your password"
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary "
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "black",
                    borderRadius: "2px",
                    transition: "background-color 0.3s",
                  }}
                >
                  Create an Account
                </button>
                </div>

                <p
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Already have an account? Please <a href="/login">Login</a>
                </p>
             
            </form>
          </div>
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww"
              alt="Background"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
