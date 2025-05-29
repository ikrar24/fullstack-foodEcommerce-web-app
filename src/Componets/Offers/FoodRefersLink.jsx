import React from "react";
import { useParams } from "react-router-dom";

const offerData = [
    {
      offerFoodName: "Burger",
      offerPreviesPrice: "200$",
      offerCurrentPrice: "100$",
      offerDetails: "Today 50% Discount On All Food",
      offerImg:
        "https://images.unsplash.com/photo-1512152272829-e3139592d56f?fm=jpg&q=60&w=3000",
     
    },
    {
      offerFoodName: "Pizza",
      offerPreviesPrice: "250$",
      offerCurrentPrice: "125$",
      offerDetails: "Buy 1 Get 1 Free Today",
      offerImg:
        "https://images.unsplash.com/photo-1548365328-8b849e0ba7ef?fm=jpg&q=60&w=3000",
     
    },
  ];

function FoodReferLink() {
  const { itemName } = useParams();

  const food = offerData.find(
    (item) => item.offerFoodName.toLowerCase() === itemName.toLowerCase()
  
  );

  if (!food) return <h2>Item Not Found</h2>;

  return (
    <div>
      <h2>Item Details</h2>
      <p><strong>Name:</strong> {food.offerFoodName}</p>
      <p><strong>Image URL:</strong> {food.offerImg}</p>
      <p><strong>Price(if any):</strong> {food.offerCurrentPrice || "N/A"}</p>
      <img src={food.offerImg} alt={food.offerFoodName} style={{ width: "200px", borderRadius: "20px" }} />
    </div>
  );
}

export default FoodReferLink;
