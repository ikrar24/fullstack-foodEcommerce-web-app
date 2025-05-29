import React from "react";
import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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



function App() {
  const offerRef = useRef(null)
  const menusRef = useRef(null)
  return (
    <BrowserRouter>
      <Navbar offerRef={offerRef} menusRef={menusRef} />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <div className="desktop">
              <div className="mobile">
                <Header />
                <FamousItems />
                <Offers offerRef={offerRef}/>
                <Menus menusRef={menusRef}/>
                <Service/>
              <BubbleIcons/>
              <Footer/>
              </div>
            </div>
          }
        />

        {/* Details Page */}
        <Route path="/food/:itemName" element={<SelectedFamous />} />
        <Route path="/offerfood/:itemName" element={<FoodReferLink/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
