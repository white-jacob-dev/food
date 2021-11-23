import React, { useState } from "react";
import "./FoodCard.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";

function FoodCard(props) {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isSelected === true) {
      dispatch(increment());
      setIsSelected(true);
    } else {
      setIsSelected(false);
      dispatch(decrement());
    }
  };

  return (
    <div
      className="card"
      onClick={handleClick}
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
