import React from "react";
import "./FamousItems.css";
import { useNavigate } from "react-router-dom";

const items = [
  {
    FoodName: "Burger",
    img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?fm=jpg&q=60&w=3000"
  },
  {
    FoodName: "Pizza",
    FoodImg: "https://images.unsplash.com/photo-1601924579960-1fbb790303d5"
  },
  {
    FoodName: "Sushi",
    FoodImg: "https://images.unsplash.com/photo-1546069901-eacef0df6022"
  },
  {
    FoodName: "Pasta",
    FoodImg: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
  },
  {
    FoodName: "Tacos",
    FoodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpZA0dD1bGXj1PlCYamdMp6W67qZF8ZdXrw&s",

  },
  
];

function FamousItems() {
  const navigate = useNavigate(); 

  const handleSelect = (item) => {
    navigate(`/food/${item.FoodName.toLowerCase()}`);
    
  };

  return (
    <div className="famousItemMainContainer">
      <h2 className="famousItemTitle">Famous Items</h2>

      <div className="famousItemSliderHorizontal">
        {items.map((item, index) => (
          <div
            key={index}
            className="famousItemCard"
            onClick={() => handleSelect(item)}
          >
            <img src={item.FoodImg} alt={item.FoodName} className="famousItemImg" />
            <h3 className="famousItemName">{item.FoodName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FamousItems;
