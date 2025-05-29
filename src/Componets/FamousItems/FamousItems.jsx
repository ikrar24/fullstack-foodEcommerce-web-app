import React from "react";
import "./FamousItems.css";
import { useNavigate } from "react-router-dom";

const items = [
  {
    name: "Burger",
    img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?fm=jpg&q=60&w=3000"
  },
  {
    name: "Pizza",
    img: "https://images.unsplash.com/photo-1601924579960-1fbb790303d5"
  },
  {
    name: "Sushi",
    img: "https://images.unsplash.com/photo-1546069901-eacef0df6022"
  },
  {
    name: "Pasta",
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
  },
  {
    name: "Tacos",
    img: "https://images.unsplash.com/photo-1613145992535-15e52941c94c"
  }
];

function FamousItems() {
  const navigate = useNavigate(); 

  const handleSelect = (item) => {
    navigate(`/food/${item.name.toLowerCase()}`);
    
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
            <img src={item.img} alt={item.name} className="famousItemImg" />
            <h3 className="famousItemName">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FamousItems;
