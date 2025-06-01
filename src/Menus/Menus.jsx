import React from "react";
import "./Menus.css";
import { useNavigate } from "react-router-dom";

const menuData = [
  {
    name: "Cheesy Burger",
    price: "$8.99",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    name: "Pepperoni Pizza",
    price: "$12.50",
    img: "https://images.unsplash.com/photo-1601924570236-d73d1dc063bc",
  },
  {
    name: "Creamy Pasta",
    price: "$10.75",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    name: "Grilled Sandwich",
    price: "$6.50",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
  },
];

function Menus({menusRef}) {
  const navigate = useNavigate()

  const handleSelectMenus = (item)=>{
    navigate(`/menu/${item.name.toLowerCase()}`);
    }

  return (
    <section className="menusContainer" ref={menusRef}>
      <div className="menuBox" >
        <h1 className="menuHeading">Our Famous Menus</h1>

        <div className="menuFlex">
          {menuData.map((item, index) => (
            <div className="menuCard" key={index} onClick={() => handleSelectMenus(item)}>
              <img src={item.img} alt={item.name} className="menuImg" />
              <h3 className="menuTitle">{item.name}</h3>
              <p className="menuPrice">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menus;
