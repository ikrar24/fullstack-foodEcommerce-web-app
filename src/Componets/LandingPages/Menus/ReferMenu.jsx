import React from "react";
import { useParams } from "react-router-dom";
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
  

function ReferMenu() {
  const { itemName } = useParams();

  const food = menuData.find(
    (item) => item.name.toLowerCase() === itemName.toLowerCase()
  
  );

  if (!food) return <h2>Item Not Found</h2>;

  return (
    <div>
      <h2>Item Details</h2>
      <p><strong>Name:</strong> {food.name}</p>
      <p><strong>Image URL:</strong> {food.img}</p>
      <p><strong>Price(if any):</strong> {food.price || "N/A"}</p>
      <img src={food.img} alt={food.name} style={{ width: "200px", borderRadius: "20px" }} />
    </div>
  );
}

export default ReferMenu;
