import React, { useRef , useState, useEffect } from "react";
import { Routes, Route, useLocation , useNavigate, matchPath} from "react-router-dom";
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
import Profile from "./Componets/Profile/Profile";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Protect from "./ProtectionRaute/Protect";
import WithOutListNav from "./Componets/LandingPages/Navbar/WithOutListNav";


function App() {
  const offerRef = useRef(null);
  const menusRef = useRef(null);
  const serviceRef = useRef(null);
  const resturentRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const hideNavbarRoutes = ["/signup","/login","/favorites","/home","/profile","/famous/:FoodName","/offerfood/:itemName","/menu/:FoodName"]
  const shouldHideNavbar = hideNavbarRoutes.some((path) =>
  matchPath({ path, end: true }, location.pathname)
);

  const [searchCotextApi, setsearchCotextApi] = useState("")

console.log(location);




  return (
    
    <ContexApi.Provider value={searchCotextApi}>
      {shouldHideNavbar? <WithOutListNav className="hideBar"/> : <Navbar offerRef={offerRef} menusRef={menusRef} serviceRef={serviceRef} resturentRef={resturentRef} />}
      <PageLoader/>
      <Routes>

        {/* Landing Pages */}
        <Route
          path="/"
          element={
            <div key={location.key} className="desktop">
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




{/* Mian NavBar Link  */}
<Route path="/resturent" element={<Resturent/>} />
<Route path="/offers" element={<Offers/>}/>
<Route path="/menu" element={<Menus/>}/>
<Route path="/service" element={<Service/>}/>


        {/* Other pages */}
        <Route path="/famous/:FoodName" element={<SelectedFamous />} />
        <Route path="/offerfood/:itemName" element={<FoodReferLink />} />
        <Route path="/menu/:FoodName" element={<ReferMenu/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
       
       
   
        <Route path="/home" element={
        <Protect>
        <>
          <HomeNav searchCotextApi={setsearchCotextApi} />
          <Items />
        </>
      </Protect>
      
        } />

        <Route path="/favorites" element={
          <Protect>
          <div>
            <HomeNav/>
            <div className="desktop">
              <div className="mobile">
                <FavItems/>
              </div>
            </div>
                
          </div>
          </Protect>
        }/>
        

        <Route path="/order/:FoodName" element={<Protect><OrderPage /></Protect>} />

        <Route path="/profile" element={<Protect><Profile /></Protect>} />
<Route path="*" element={<div>
  Route Is Not Found
</div>}/>

      </Routes>

        <Footer />
        <ToastContainer />
    </ContexApi.Provider>
  );
}

export default App;
