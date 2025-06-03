import React from "react";
import { FaHeart, FaShoppingCart , FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./HomeNav.css";
import { useNavigate } from "react-router-dom";
// import Items from "../Items/Items";


function HomeNav({searchCotextApi}) {

  const navigate = useNavigate()

  const [SearchInput, setSearchInput] = useState("")

const favReferTolink = ()=>{
// navigate link
navigate("/favorites")
}

  return (
    <>
  
    <nav className="HomeNav">
  <div className="HomeNavContent">
    <div className="websiteName">
      <a href="/home" className="websiteNameLink">FCP</a>
    </div>

    <div className="searchBarContainer">
      <input
        type="text"
        id="searchInput"
        value={SearchInput}
        placeholder="Search"
        onChange={(e)=>{
          setSearchInput(e.target.value)
          searchCotextApi(e.target.value)
        }}
      />
      <FaSearch className="searchIcon"/>
    </div>

    <div className="favIcons">
    <FaHeart onClick={favReferTolink}/>
    <FaShoppingCart/>
    </div>
  </div>
</nav> 


    {/* <div className="desktop">
              <div className="mobile">
    <Items searchValue={SearchInput} /> 
                
              </div>
            </div> */}
    </>
  );
}

export default HomeNav;
