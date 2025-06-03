import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import "./Login.css"

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const isFormFilled = Email.trim() !== "" && Password.trim() !== "";

  const submitLogin = (e) => {
    e.preventDefault();

    const storedEmail = JSON.parse(localStorage.getItem("email"));
    const storedHashedPassword = localStorage.getItem("password");

    if (!storedEmail || !storedHashedPassword) {
      alert("User not found, please sign up first!");
      navigate("/signup")
      return;
    }

    const isPasswordCorrect = bcrypt.compareSync(Password, storedHashedPassword);

    if (Email === storedEmail && isPasswordCorrect) {
      navigate("/home");
    } else {
      alert("Invalid email or password!");
    }


  };

  return (
    <section className="logingContaier">
      <div className="loginSmallContaier">
        <div className="loginHeadingBox">
          <h1 className="loginHeading">
            Signin to your <br />
            <span className="websiteName">FCP Account</span>
          </h1>
          <h2 className="loginShortLink">
            Lorem Ipsum dolor sit amet. <br />
            consectetur adipiscing elit.
          </h2>
        </div>

        <form id="loginForm" onSubmit={submitLogin}>
          <div className="EmailInputBox lableBox">
            <input
              type="email"
              placeholder=" "
              id="loginEmail"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="loginEmail" className="EmailLebel inputLable">
              Email address
            </label>
          </div>

          <div className="PasswordInputBox passwordBox">
            <input
              type="password"
              placeholder=" "
              id="loginPassword"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="loginPassword" className="passLebel inputLable">
              Password
            </label>
          </div>

          <div className="loginBtnBox">
            <button
              id="loginBtn"
              type="submit"
              style={{
                backgroundColor: isFormFilled ? "orangered" : "rgba(92, 92, 92, 0.596)",
                color: "white",
                cursor: isFormFilled ? "pointer" : "default",
              }}
              disabled={!isFormFilled}
            >
              Login
            </button>
          </div>
        </form>

        <div className="IfNotAccountBox">

<p className="IfNotAccountPara">
  If You Have An Not Account? <Link className="notAcconts" to="/signup">Sign Up</Link>
</p>

</div>
      </div>

      

    </section>
  );
}

export default Login;