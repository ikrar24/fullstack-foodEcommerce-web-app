import React, { useState } from "react";
import "./SignUp.css";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [Name, setName] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");


  const navigate = useNavigate();

  const storeFormData = (e) => {
    e.preventDefault();

    const existingEmail = JSON.parse(localStorage.getItem("email"));

    if (existingEmail === Email) {
      alert("User already exists!");
      return;
    }

    const hashedPassword = bcrypt.hashSync(Password, 10);

    localStorage.setItem("username", JSON.stringify(Name));
    localStorage.setItem("phone Number", JSON.stringify(PhoneNum));
    localStorage.setItem("email", JSON.stringify(Email));
    localStorage.setItem(" Address", JSON.stringify( Address));
    localStorage.setItem("password", hashedPassword); // ✅ No JSON.stringify
    navigate("/login");


    console.log("hello")
  };

  const [ChangeEyes, setChangeEyes] = useState(false);
  const eyeIcon = () => {
    setChangeEyes((prev) => !prev);
  };

  return (
    <section className="containerOfSignUp">
      <div className="setScreen">
        <div className="headindBox">
          <h1 className="createHeadind">
            Create your <br />
            <span className="headingSpan">FCP Account</span>
          </h1>
        </div>

        <form className="signUpForm" onSubmit={storeFormData}>
          <div className="formBox">
            {/* Full Name */}
            <div className="lableBox">
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" "
                required
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className="inputLable">
                Full Name<span>*</span>
              </label>
            </div>

            {/* Phone Number */}
            <div className="lableBox">
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder=" "
                required
                value={PhoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
              <label htmlFor="phoneNumber" className="inputLable">
                Phone Number<span>*</span>
              </label>
            </div>


 {/* Address */}
 <div className="lableBox">
              <input
                type="address"
                name=" Address"
                id="address"
                placeholder=" "
                required
                value={ Address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="address" className="inputLable">
                Address<span>*</span>
              </label>
            </div>


            {/* Email */}
            <div className="lableBox">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="inputLable">
                Email Address<span>*</span>
              </label>
            </div>

            {/* Password */}
            <div className="passwordBox">
              <input
                type={ChangeEyes ? "text" : "password"}
                name="password"
                id="password"
                placeholder=" "
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className="inputLable">
                Password<span>*</span>
              </label>
              <i
                className={`fa-solid ${ChangeEyes ? "fa-eye" : "fa-eye-slash"}`}
                id="eyes"
                onClick={eyeIcon}
                style={{ cursor: "pointer" }}
              ></i>
            </div>

           

          
          </div>

          <div className="buttonBox">
            <button className="CreateAccountBtn">Create Account</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;