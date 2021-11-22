import React, { useState } from "react";
import "./FoodCard.css";

function FoodCard(props) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    if (isSelected === true) {
      setIsSelected(false);
    } else setIsSelected(true);
  };

  return (
    <div
      className="card"
      onClick={handleSelect}
      style={{
        color: isSelected ? "lime" : "",
      }}
    >
      <div className="restaurant-name">{props.name}</div>
      <div className="restaurant-distance">{props.distance}</div>
    </div>
  );
}

export default FoodCard;
