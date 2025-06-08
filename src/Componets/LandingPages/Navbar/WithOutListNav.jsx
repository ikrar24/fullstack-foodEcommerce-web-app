import React from "react";
import { Link, useLocation} from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";



function WithOutListNav() {

    const location = useLocation()

const isPathname = ["/signup","/favorites","/login","/home","/profile"];

const hideNavOnPath = isPathname.includes(location.pathname);

  return (
    <>
      <header className={hideNavOnPath ? "hidden" : ""}>

        <nav>
          <ul className="ulContainer ">
            <li className="logoLi">
              <Link to={"/"} className="logoLink">
                F C P
              </Link>
            </li>

          

            <ul className="ulFavBox">
              <li className="heartLi">
                <Link to={"/favorites"} className="heartLink">
                  {""}
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

export default WithOutListNav;
