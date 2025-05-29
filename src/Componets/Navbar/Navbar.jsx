import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
function Navbar({offerRef,menusRef,serviceRef,resturentRef}) {
  const scrollToOffers = ()=>{
    offerRef?.current?.scrollIntoView({behavior:"smooth"})
    
    
  }
  
  const scrollToMenus =()=>{
    menusRef?.current?.scrollIntoView({behavior:"smooth"})

  }

  return (
    <>
      <header>
        <nav>
          <ul className="ulContainer">
            <li className="logoLi">
              <Link to={"/"} className="logoLink">
                F C P
              </Link>
            </li>

            <ul className="ulList">
              <li className="logoLi">
                <Link to={"#"} className="menuLink" onClick={scrollToMenus}>
                  Menu
                </Link>
                <Link to={"#"} className="offersLink" onClick={scrollToOffers}>
                  Offers
                </Link>
                <Link to={"#"} className="serviceLink">
                  Service
                </Link>
                <Link to={"#"} className="resturantLink">
                  Resturant
                </Link>
              </li>
            </ul>

            <ul className="ulFavBox">
              <li className="heartLi">
                <Link to={"#"} className="heartLink">
                  {" "}
                  <FaHeart />
                </Link>
              </li>

              <li className="favLi">
                <Link className="favLink">
                  <FaShoppingCart />
                </Link>
              </li>
            </ul>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
