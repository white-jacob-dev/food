import React, { useState } from "react";
import "./FoodCard.css";
import { useSelector, useDispatch } from "react-redux";
import { selectionIncrement, selectionDecrement } from "./SelectionCounterSlice";

function FoodCard(props) {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const stepCounter = useSelector((state) => state.stepCounter.value);

  const handleClick = () => {
    if (!isSelected === true) {
      dispatch(selectionIncrement());
      setIsSelected(true);
    } else {
      setIsSelected(false);
      dispatch(selectionDecrement());
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
