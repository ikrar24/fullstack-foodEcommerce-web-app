import React from "react";
import "./FamousItems.css";
import { useNavigate } from "react-router-dom";

const items =  [
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

function FamousItems() {
  const navigate = useNavigate(); 

  const handleSelect = (item) => {
  
    navigate(`/famous/${encodeURIComponent(item.FoodName.toLowerCase())}`);
    
    
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
