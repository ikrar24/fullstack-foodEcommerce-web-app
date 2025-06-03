import React, { useState, useEffect } from 'react';
import "../HomePages/Items/Items.css";
import { FaHeart } from 'react-icons/fa';

function FavItems() {
  const [favItems, setFavItems] = useState([]);

  // Load fav items on component mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favDish")) || [];
    setFavItems(stored);
  }, []);


  
  const toggleFavorite = (item) => {
    const stored = JSON.parse(localStorage.getItem("favDish")) || [];
    const isFav = stored.some((i) => i.FoodName === item.FoodName);

    let updatedStorage;

    if (isFav) {
      // Remove from favorites
      updatedStorage = stored.filter((i) => i.FoodName !== item.FoodName);
    } else {
      // Add to favorites
      updatedStorage = [...stored, item];
    }

    // Update localStorage and state
    localStorage.setItem("favDish", JSON.stringify(updatedStorage));
    setFavItems(updatedStorage);
  };

  const isFavorited = (name) =>
    favItems.some((item) => item.FoodName === name);

  const oderReferHendel = (item) => {
    console.log("Order referred for:", item.FoodName);
  };

  return (
    <section className="mainContainer">
      {favItems.length > 0 ? (
        favItems.map((item, index) => (
          <div
            className="itemsContainer"
            key={index}
            onClick={() => oderReferHendel(item)}
          >
            <div className="itemImgBox">
              <img
                src={item.FoodImg}
                className="itemImg"
                alt={item.FoodName}
              />
            </div>

            <div className="itemBox">
              <h1 className="itemName">{item.FoodName}</h1>

              <main className="itemDecriptionsBox">
                <h2 className="decriptions">{item.FoodDescriptions}</h2>
              </main>

              <div className="ratingBox">
                <h3 className="rating">{item.FoodRatings}</h3>
              </div>

              <div className="buyBtnBox addToCartBox">
                <div className="FavIcon">
                  <FaHeart
                    className="heartIcon"
                    style={{
                      color: isFavorited(item.FoodName) ? "red" : "gray",
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent parent click
                      toggleFavorite(item);
                    }}
                  />
                </div>
                <button className="buyBtn">Order</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="notFoundGifBox">
          <img
            src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
            alt="No Results"
            className="notFound"
          />
        </div>
      )}
    </section>
  );
}

export default FavItems;
