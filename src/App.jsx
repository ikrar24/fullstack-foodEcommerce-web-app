import React, { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Componets/Navbar/Navbar";
import Header from "./Componets/Headder/Header";
import FamousItems from "./Componets/FamousItems/FamousItems";
import SelectedFamous from "./Componets/SelectedFamous/SelectedFamous";
import Offers from "./Componets/Offers/Offers";
import FoodReferLink from "./Componets/Offers/FoodRefersLink";
import Menus from "./Menus/Menus";
import Service from "./Componets/Service/Service";
import BubbleIcons from "./Componets/BubbleIcons/BubbleIcons";
import Footer from "./Componets/Footer/Footer";
import SignUp from "./Componets/SignUp/SignUp";

function App() {
  const offerRef = useRef(null);
  const menusRef = useRef(null);
  const location = useLocation();

  const hideNavbarRoutes = ["/signup"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar offerRef={offerRef} menusRef={menusRef} />}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <div className="desktop">
              <div className="mobile">
                <Header />
                <FamousItems />
                <Offers offerRef={offerRef} />
                <Menus menusRef={menusRef} />
                <Service />
                <BubbleIcons />
                <Footer />
              </div>
            </div>
          }
        />

        {/* Other pages */}
        <Route path="/food/:itemName" element={<SelectedFamous />} />
        <Route path="/offerfood/:itemName" element={<FoodReferLink />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
