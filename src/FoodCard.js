import React, { useState } from "react";
import "./FoodCard.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectionIncrement,
  selectionDecrement,
} from "./SelectionCounterSlice";

function FoodCard(props) {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const dispatch = useDispatch();
  const stepCounter = useSelector((state) => state.stepCounter.value);

  const handleClick = () => {
    if (stepCounter === 1 && isSelected === false) {
      setIsSelected(true);
      dispatch(selectionIncrement());
    } else if (stepCounter === 1 && isSelected === true) {
      setIsSelected(false);
      dispatch(selectionDecrement());
    } else if (stepCounter === 2 && isSelected2 === false) {
      setIsSelected2(true);
      dispatch(selectionIncrement());
    } else if (stepCounter === 2 && isSelected2 === true) {
      setIsSelected2(false);
      dispatch(selectionDecrement());
    } else if (stepCounter === 3 && isSelected3 === false) {
      setIsSelected3(true);
      dispatch(selectionIncrement());
    } else if (stepCounter === 3 && isSelected3 === true) {
      setIsSelected3(false);
      dispatch(selectionDecrement());
    }
  };

  if (stepCounter === 2 && !isSelected) {
    return (
      //IF STEP COUNTER = 2 AND CARD IS NOT SELECTED, HIDE CARD
      <div
        className="card"
        onClick={handleClick}
        style={{
          color: isSelected ? "lime" : "",
          display: "none",
        }}
      >
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-distance">{props.distance}</div>
      </div>
    );
  } else if (stepCounter === 3 && !isSelected2) {
    return (
      //IF STEP COUNTER = 3 AND CARD IS NOT SELECTED, HIDE CARD
      <div
        className="card"
        onClick={handleClick}
        style={{
          color: isSelected2 ? "aqua" : "",
          display: "none",
        }}
      >
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-distance">{props.distance}</div>
      </div>
    );
  } else if (stepCounter === 4 && !isSelected3) {
    return (
      //IF STEP COUNTER = 3 AND CARD IS NOT SELECTED, HIDE CARD
      <div
        className="card"
        onClick={handleClick}
        style={{
          color: isSelected3 ? "orange" : "",
          display: "none",
        }}
      >
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-distance">{props.distance}</div>
      </div>
    );
  } else
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
