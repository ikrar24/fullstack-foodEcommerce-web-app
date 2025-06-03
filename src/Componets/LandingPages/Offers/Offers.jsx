import React, { useState, useEffect } from "react";
import "./Offers.css";
import { useNavigate } from "react-router-dom"; // ✅ Correct hook
import chefModel from "../../../assets/chef-modal.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const offerData = [
  {
    FoodName: "Burger",
    FoodRatings: "⭐⭐⭐⭐⭐",
    FoodPrice: "200",
    OfferPirce: "",
    FoodImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpZA0dD1bGXj1PlCYamdMp6W67qZF8ZdXrw&s",
    FoodDescriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore provident voluptatum exercitationem sit quos maiores atque vero officiis, modi fugiat assumenda non dolor laudantium magnam amet voluptatibus reiciendis saepe?",
    offerDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    offerBgImg: `${chefModel}`,
  },
  {
    FoodName: "Pizza",
    FoodRatings: "⭐⭐⭐⭐⭐",
    FoodPrice: "200",
    OfferPirce: "",
    FoodImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpZA0dD1bGXj1PlCYamdMp6W67qZF8ZdXrw&s",
    FoodDescriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore provident voluptatum exercitationem sit quos maiores atque vero officiis, modi fugiat assumenda non dolor laudantium magnam amet voluptatibus reiciendis saepe?",
    offerDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    offerBgImg: `${chefModel}`,
  },
  {
    FoodName: "Pasta",
    FoodRatings: "⭐⭐⭐⭐⭐",
    FoodPrice: "200",
    OfferPirce: "",
    FoodImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpZA0dD1bGXj1PlCYamdMp6W67qZF8ZdXrw&s",
    FoodDescriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore provident voluptatum exercitationem sit quos maiores atque vero officiis, modi fugiat assumenda non dolor laudantium magnam amet voluptatibus reiciendis saepe?",
    offerDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    offerBgImg: `${chefModel}`,
  },
];

function Offers({ offerRef }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [changeClass, setChangeClass] = useState(false);
  const navigate = useNavigate(); // ✅ Hook from react-router-dom

  useEffect(() => {
    if (changeClass) {
      const timer = setTimeout(() => setChangeClass(false), 500);
      return () => clearTimeout(timer);
    }
  }, [changeClass]);

  const goPrev = (e) => {
    e.stopPropagation(); // Prevent navigation when arrow is clicked
    setCurrentIndex((prev) => (prev - 1 + offerData.length) % offerData.length);
    setChangeClass(true);
  };

  const goNext = (e) => {
    e.stopPropagation(); // Prevent navigation when arrow is clicked
    setCurrentIndex((prev) => (prev + 1) % offerData.length);
    setChangeClass(true);
  };

  const referToOffer = (item) => {
    navigate(`/offerfood/${item.FoodName.toLowerCase()}`);
  };

  return (
    <div className="mainContainerOfOffer" ref={offerRef}>
      {offerData.map((offer, index) =>
        index === currentIndex ? (
          <section
            className="offerContainer"
            onClick={() => referToOffer(offer)}
            key={index}
          >
            <FaAngleLeft className="leftArrow" onClick={goPrev} />

            <div className="imgContainer">
              <div className="imgBg">
                <img
                  src={offer.offerBgImg}
                  alt="Offer Background"
                  className={`chefImg ${changeClass ? "sliderChangeAni" : ""}`}
                />
              </div>
            </div>

            <div className="offerDetailsBox">
              <div className="OfferImageBox">
                <img
                  src={offer.FoodImg}
                  alt={offer.FoodName}
                  className={`offerDish ${changeClass ? "sliderChangeAni" : ""}`}
                  loading="lazy"
                />
                <p
                  className={`OfferDishName ${changeClass ? "sliderChangeAni" : ""}`}
                >
                  {offer.FoodName}
                </p>
                <button
                  className={`offerOrderBtn ${changeClass ? "sliderChangeAni" : ""}`}
                >
                  Order Now
                </button>
              </div>

              <div className="OfferParaBox">
                <p
                  className={`offerDetailsHead ${changeClass ? "sliderChangeAni" : ""}`}
                >
                  {offer.offerDetails}
                </p>
                <p
                  className={`offerCurrentprice ${changeClass ? "sliderChangeAni" : ""}`}
                >
                  <span
                    className={`crossPrice ${changeClass ? "sliderChangeAni" : ""}`}
                  >
                    {offer.OfferPirce}
                  </span>{" "}
                  {offer.FoodPrice}
                </p>
              </div>
            </div>

            <FaAngleRight className="rightArrow" onClick={goNext} />
          </section>
        ) : null
      )}
    </div>
  );
}

export default Offers;
