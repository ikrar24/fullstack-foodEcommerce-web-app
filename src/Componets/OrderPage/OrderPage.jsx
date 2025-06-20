import React, { useEffect, useState, useReducer } from "react";
import "./OrderPage.css";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { reducerFun, formState} from "./OrderFunctions";

const itemsData = [
  {
    FoodName: "Burger",
    FoodRatings: "⭐⭐⭐⭐⭐",
    FoodPrice: "200",
    OfferPrice: "150",
    FoodImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpZA0dD1bGXj1PlCYamdMp6W67qZF8ZdXrw&s",
    FoodDescriptions: "Delicious burger with juicy patty and fresh veggies.",
  },
  {
    FoodName: "Pizza",
    FoodRatings: "⭐⭐⭐⭐⭐",
    FoodPrice: "250",
    OfferPrice: "200",
    FoodImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpZA0dD1bGXj1PlCYamdMp6W67qZF8ZdXrw&s",
    FoodDescriptions: "Cheesy pizza with your favorite toppings.",
  },
  {
    FoodName: "Pasta",
    FoodRatings: "⭐⭐⭐⭐⭐",
    FoodPrice: "180",
    OfferPrice: "140",
    FoodImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpZA0dD1bGXj1PlCYamdMp6W67qZF8ZdXrw&s",
    FoodDescriptions: "Creamy pasta made with fresh ingredients.",
  },
];






















function OrderPage() {
  const { FoodName } = useParams();
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
      updatedStorage = stored.filter((i) => i.FoodName !== item.FoodName);
      updatedState = favItems.filter((name) => name !== item.FoodName);
    } else {
      updatedStorage = [...stored, item];
      updatedState = [...favItems, item.FoodName];
    }

    localStorage.setItem("favDish", JSON.stringify(updatedStorage));
    setFavItems(updatedState);
  };

  const isFavorited = (name) => favItems.includes(name);

  const food = itemsData.find(
    (item) => item.FoodName.toLowerCase() === FoodName?.toLowerCase()
  );


  if (!food) {
    return (
      <div className="notFoundGifBox">
        <img
          src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
          alt="Not Found"
          className="notFound"
        />
      </div>
    );
  }




  const [state, dispatch] = useReducer( reducerFun , formState)


  const inputValueHandle =(e)=>{
          dispatch({
           type:"INPUT_VALUE",
           field: e.target.name, 
           value: e.target.value,
          });

  }




const orderPlace = (e)=>{
  e.preventDefault()

  console.log(state, FoodName);
}
  return (
    <section className="mainContainer">
      <div className="itemsContainer">
        <div className="itemImgBox">
          <img src={food.FoodImg} className="itemImg" alt={food.FoodName} />
        </div>

        <div className="itemBox">
          <h1 className="itemName">{food.FoodName}</h1>

          <main className="itemDecriptionsBox">
            <h2 className="decriptions">{food.FoodDescriptions}</h2>
          </main>

          <div className="ratingBox">
            <h3 className="rating">{food.FoodRatings}</h3>
          </div>

          <div className="foodPriceBox">
            {food.OfferPrice && (
              <p className="foodPriceOffer">
                <del>{food.FoodPrice}</del>
              </p>
            )}
            <p className="foodPrice">
              ₹{food.OfferPrice ? food.OfferPrice : food.FoodPrice}
            </p>
          </div>

          <div className="buyBtnBox addToCartBox">
            <div className="FavIcon">
              <FaHeart
                className="heartIcon"
                style={{
                  color: isFavorited(food.FoodName) ? "red" : "gray",
                }}
                onClick={() => toggleFavorite(food)}
              />
            </div>
          </div>
        </div>
      </div>




<form className="orderDtailsForm" onSubmit={orderPlace}>

<input type="text" 
name="Name" 
placeholder="Name" 
value={state.Name} 
onChange={inputValueHandle}
 />

<input 
type="Address" 
name="Address" 
placeholder="Address" 
value={state.Address} 
onChange={inputValueHandle} 
/>

<input type="text" 
name="PinCode" 
placeholder="Pin Code"
 value={state.PinCode} 
onChange={inputValueHandle}
/>

<input 
type="number" 
name="Phone" 
placeholder="Phone" 
value={state.Phone} 
onChange={inputValueHandle}
/>

<select name="PaymentSections">
<option value=" ">Select Payment</option>
<option value="cash">Cash On Delevery</option>
<option value="online">Online Payment</option>
</select>

<button className="orderPlaceBtn">Order Place</button>
      </form>  


    </section>
  );
}

export default OrderPage;
