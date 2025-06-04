import React, { useRef , useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Componets/LandingPages/Navbar/Navbar";
import Header from "./Componets/LandingPages/Headder/Header";
import FamousItems from "./Componets/LandingPages/FamousItems/FamousItems";
import SelectedFamous from "./Componets/LandingPages/SelectedFamous/SelectedFamous";
import Offers from "./Componets/LandingPages/Offers/Offers"
import FoodReferLink from "./Componets/LandingPages/Offers/FoodRefersLink"
import Menus from "./Componets/LandingPages/Menus/Menus";
import Service from "./Componets/LandingPages/Service/Service";
import BubbleIcons from "./Componets/LandingPages/BubbleIcons/BubbleIcons";
import Footer from "./Componets/LandingPages/Footer/Footer";
import SignUp from "./Componets/LandingPages/SignUp/SignUp";
import Login from "./Componets/LandingPages/Login/Login";
import PageLoader from "./PageLoader/PageLoader";
import Resturent from "./Componets/LandingPages/Resturent/Resturent"
import ReferMenu from "./Componets/LandingPages/Menus/ReferMenu";
import HomeNav from "./Componets/HomePages/HomeNav/HomeNav";
import Items from "./Componets/HomePages/Items/Items";
import FavItems from "./Componets/FavItems/FavItems";
import ContexApi from "./UseContext/UseContex";
import OrderPage from "./Componets/OrderPage/OrderPage";
import UseReducer from "./UseReducer/UseReducer";

function App() {
  const offerRef = useRef(null);
  const menusRef = useRef(null);
  const serviceRef = useRef(null);
  const resturentRef = useRef(null);
  const location = useLocation();

  const hideNavbarRoutes = ["/signup","/login","/favorites","/home"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  const [searchCotextApi, setsearchCotextApi] = useState("")

  return (
    
    <ContexApi.Provider value={searchCotextApi}>
      {!shouldHideNavbar && <Navbar offerRef={offerRef} menusRef={menusRef} serviceRef={serviceRef} resturentRef={resturentRef} />}
      <PageLoader/>
      <Routes>

        {/* Landing Pages */}
        <Route
          path="/"
          element={
            <div className="desktop">
              <div className="mobile">
                <Header />
                <FamousItems />
                <Offers offerRef={offerRef} />
                <Menus menusRef={menusRef} />
                <Service serviceRef={serviceRef}/>
                <Resturent resturentRef={resturentRef}/>
                <BubbleIcons />
                
                
              </div>
            </div>
          }
        />

        {/* Other pages */}
        <Route path="/famous/:FoodName" element={<SelectedFamous />} />
        <Route path="/offerfood/:itemName" element={<FoodReferLink />} />
        <Route path="/menu/:FoodName" element={<ReferMenu/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <div>
            <HomeNav searchCotextApi={setsearchCotextApi}/>
         <Items/>
          </div>
          
        } />

        <Route path="/favorites" element={
          <div>
            <HomeNav/>
            <div className="desktop">
              <div className="mobile">
                <FavItems/>
              </div>
            </div>
                
          </div>
        }/>
        

<Route path="/reducer" element={<UseReducer/>}/>
<Route path="/order/:FoodName" element={<OrderPage/>}/>

      </Routes>
        <Footer />

    
    </ContexApi.Provider>
  );
}

export default App;
