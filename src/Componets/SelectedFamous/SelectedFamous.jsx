import React from "react";
import { useParams } from "react-router-dom";

const Data = [
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
    img: "https://images.unsplash.com/photo-1613145992535-15e52941c94c",
    age: "12"
  }
];

function SelectedFamous() {
  const { itemName } = useParams();

  const food = Data.find(
    (item) => item.name.toLowerCase() === itemName.toLowerCase()
  );

  if (!food) return <h2>Item Not Found</h2>;

  return (
    <div>
      <h2>Item Details</h2>
      <p><strong>Name:</strong> {food.name}</p>
      <p><strong>Image URL:</strong> {food.img}</p>
      <p><strong>Age (if any):</strong> {food.age || "N/A"}</p>
      <img src={food.img} alt={food.name} style={{ width: "200px", borderRadius: "20px" }} />
    </div>
  );
}

export default SelectedFamous;
