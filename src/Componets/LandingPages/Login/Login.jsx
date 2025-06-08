import React, { useState, useReducer } from "react";
import { useNavigate,Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import { UserPassFun, UserPassInit } from "../../../PasswordReducer/PassReducer";
import { v4 as uuidv4 } from 'uuid';
import "./Login.css"

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [state, dispatch] = useReducer(UserPassFun, UserPassInit )

  const navigate = useNavigate();
  
  const isFormFilled = Email.trim() !== "" && Password.trim() !== "";
  


  const submitLogin = (e) => {
    e.preventDefault();

   
    const storedHashedPassword = localStorage.getItem("password");

    const storedEmail = JSON.parse(localStorage.getItem("email"));

    if (!storedEmail || !storedHashedPassword) {
      alert("User not found, please sign up first!");
      navigate("/signup")
      return;
    }

    const isPasswordCorrect = bcrypt.compareSync(Password, storedHashedPassword);

    const enteredEmail = Email.trim().toLowerCase();
    
    
    if (isPasswordCorrect && storedEmail === enteredEmail) {
      navigate("/home");
    } else {
      alert("Invalid email or password!");
      return
    }
    const userId = uuidv4()
    
    localStorage.setItem("userId",`${JSON.stringify(userId)}`)
    


    console.log("Entered email:", Email);
    console.log("Stored email:", storedEmail);
    console.log("Entered password:", Password);
    console.log("Stored hashed password:", storedHashedPassword);
    console.log("Password match:", isPasswordCorrect);
    
  
    

// if(Password === isPasswordCorrect){
//   console.log(true)
// }else{
//   console.log(false)
// }
    
     

  };


  // i am not changing the normal useState Becouse this is Alredy Defind but currently i create useReducer
  const passwordHandle = (e) => {

    setPassword(e.target.value)
    
    dispatch({

      type:"USER_PASSWORD",
      password: e.target.value,
      feild: e.target.name,
      
    })
  

  }

// console.log(state);

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
              onChange={passwordHandle}
              name="password"
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