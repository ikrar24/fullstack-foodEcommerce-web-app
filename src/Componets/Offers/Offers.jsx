import React, { useState, useEffect } from "react";
import "./Offers.css";
import { useNavigate } from "react-router-dom"; // ✅ Correct hook
import chefModel from "../../assets/chef-modal.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const offerData = [
  {
    offerFoodName: "Burger",
    offerPreviesPrice: "200$",
    offerCurrentPrice: "100$",
    offerDetails: "Today 50% Discount On All Food",
    offerImg:
      "https://images.unsplash.com/photo-1512152272829-e3139592d56f?fm=jpg&q=60&w=3000",
    offerBgImg: chefModel,
  },
  {
    offerFoodName: "Pizza",
    offerPreviesPrice: "250$",
    offerCurrentPrice: "125$",
    offerDetails: "Buy 1 Get 1 Free Today",
    offerImg:
      "https://images.unsplash.com/photo-1548365328-8b849e0ba7ef?fm=jpg&q=60&w=3000",
    offerBgImg: chefModel,
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
    navigate(`/offerfood/${item.offerFoodName.toLowerCase()}`);
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
                  src={offer.offerImg}
                  alt={offer.offerFoodName}
                  className={`offerDish ${changeClass ? "sliderChangeAni" : ""}`}
                  loading="lazy"
                />
                <p
                  className={`OfferDishName ${changeClass ? "sliderChangeAni" : ""}`}
                >
                  {offer.offerFoodName}
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
                    {offer.offerPreviesPrice}
                  </span>{" "}
                  {offer.offerCurrentPrice}
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
