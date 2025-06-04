import React from "react";
import "./Menus.css";
import { useNavigate } from "react-router-dom";

const menuData = [
  {
    FoodName: "Pasta",
    FoodRatings: "⭐⭐⭐⭐⭐",
    FoodPrice: "200",
    OfferPirce: "",
    FoodImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpZA0dD1bGXj1PlCYamdMp6W67qZF8ZdXrw&s",
    FoodDescriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore provident voluptatum exercitationem sit quos maiores atque vero officiis, modi fugiat assumenda non dolor laudantium magnam amet voluptatibus reiciendis saepe?",
  },
  {
    FoodName: "Pasta Hero",
    FoodRatings: "⭐⭐⭐⭐⭐",
    FoodPrice: "200",
    OfferPirce: "",
    FoodImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpZA0dD1bGXj1PlCYamdMp6W67qZF8ZdXrw&s",
    FoodDescriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore provident voluptatum exercitationem sit quos maiores atque vero officiis, modi fugiat assumenda non dolor laudantium magnam amet voluptatibus reiciendis saepe?",
  },
  {
    FoodName: "Pasta Masala",
    FoodRatings: "⭐⭐⭐⭐⭐",
    FoodPrice: "200",
    OfferPirce: "",
    FoodImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpZA0dD1bGXj1PlCYamdMp6W67qZF8ZdXrw&s",
    FoodDescriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore provident voluptatum exercitationem sit quos maiores atque vero officiis, modi fugiat assumenda non dolor laudantium magnam amet voluptatibus reiciendis saepe?",
  },
];

function Menus({ menusRef }) {
  const navigate = useNavigate();

  const handleSelectMenus = (item) => {
    navigate(`/menu/${item.FoodName.toLowerCase()}`);
    
  };

  return (
    <section className="menusContainer" ref={menusRef}>
      <div className="menuBox">
        <h1 className="menuHeading">Our Famous Menus</h1>

        <div className="menuFlex">
          {menuData.map((item, index) => (
            <div
              className="menuCard"
              key={index}
              onClick={() => handleSelectMenus(item)}
             
            >
              <img src={item.FoodImg} alt={item.FoodName} className="menuImg" />
              <h3 className="menuTitle">{item.FoodName}</h3>
              <p className="menuPrice">{item.FoodPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menus;
