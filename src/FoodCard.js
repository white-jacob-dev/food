import React, { useState } from "react";
import "./FoodCard.css";

function FoodCard(props) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    if (isSelected === true) {
      props.updateCounter(-1);
      setIsSelected(false);
    } else {
      props.updateCounter(1);
      setIsSelected(true);
    }
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
