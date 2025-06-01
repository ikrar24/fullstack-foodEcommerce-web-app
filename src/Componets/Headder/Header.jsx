import React from "react";
import "./Header.css";
import foodBg from "../../assets/food-bg.jpg";
import { useNavigate } from "react-router-dom";
function Header() {

  const navigate = useNavigate()
const ReferToSingUp = ()=>{
navigate("/login")
}

  return (
    <>
      <div
        className="bgBox"
        style={{ backgroundImage: `url(${foodBg})` }}
        loading="lazy"
      >
        <div className="headingContainer">

<div className="forAlign">

          <div className="headingBox">
            <h1 className="firstHeading">
              Be The Faster Delevriry Of Your Food.
            </h1>
            <h2 className="secondHeading">
              Lrorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi dignissimos quos maxime est ullam tempora doloribus enim
              ea omnis modi!
            </h2>
          </div>

          <div className="signNowBtnBox loginNowBtnBox">
            <button onClick={ReferToSingUp} className="signNowBtn loginNowBtn">Login Now</button>
          </div>


        </div>
        </div>
      </div>
    </>
  );
}

export default Header;
