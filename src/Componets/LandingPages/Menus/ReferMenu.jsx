import React, { useState } from "react";
import{ FaHeart} from "react-icons/fa";
import { useParams } from "react-router-dom";
import "../../HomePages/Items/Items.css";
const Data = [
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
  

function ReferMenu() {
 

  const [favItems, setFavItems] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("favDish")) || [];
    return stored.map((item) => item.FoodName);
  });

  const toggleFavorite = (item) => {
    const stored = JSON.parse(localStorage.getItem("favDish")) || [];
    const isFav = favItems.includes(item.FoodName);

    let updatedStorage;
    let updatedState;

    if (isFav) {
      // Remove from favorites
      updatedStorage = stored.filter((i) => i.FoodName !== item.FoodName);
      updatedState = favItems.filter((name) => name !== item.FoodName);
    } else {
      // Add to favorites
      updatedStorage = [...stored, item];
      updatedState = [...favItems, item.FoodName];
    }

    // Update both localStorage and state
    localStorage.setItem("favDish", JSON.stringify(updatedStorage));
    setFavItems(updatedState);
  };

  const isFavorited = (name) => favItems.includes(name);




  const { FoodName } = useParams();
  
  
  
  const food = Data.find((item) => {
    if (!item.FoodName || !FoodName) return false;
    return item.FoodName.toLowerCase() === FoodName.toLowerCase();
  });
  
  
  
    
    if (!food) return <div className="notFoundGifBox"><img
      src={`https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif`}
      alt="No Results"
      className="notFound"
    />
  </div>;
  


  const oderReferHendel = (item) => {
    console.log(item);
  };

  return (
<section className="mainContainer">
      {
        [food].map((item, index) => (
          <div
            className="itemsContainer"
            key={index}
            onClick={() => oderReferHendel(item)}
          >
            <div className="itemImgBox">
              <img src={item.FoodImg} className="itemImg" alt={item.FoodName} />
            </div>

            <div className="itemBox">
              <h1 className="itemName">{item.FoodName}</h1>

              <main className="itemDecriptionsBox">
                <h2 className="decriptions">{item.FoodDescriptions}</h2>
              </main>

              <div className="ratingBox">
                <h3 className="rating">{item.FoodRatings}</h3>
              </div>

              <div className="foodPriceBox">
                <span className="offerPrice">

                <p className="foodPriceOffer">{item.OfferPirce}</p>
                </span>
                <p className="foodPrice">{item.FoodPrice}</p>
              </div>

              <div className="buyBtnBox addToCartBox">
                <div className="FavIcon">
                  <FaHeart
                    className="heartIcon"
                    style={{
                      color: isFavorited(item.FoodName) ? "red" : "gray",
                    }}
                    onClick={() => toggleFavorite(item)}
                  />
                </div>
                <button className="buyBtn">Order</button>
              </div>
            </div>
          </div>
        ))
       }
    </section>
  );
}

export default ReferMenu;
