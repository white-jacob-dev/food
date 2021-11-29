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
    console.log(props.id);
    if (stepCounter === 1 && isSelected === false) {
      setIsSelected(true);
      // console.log("card isSelected1");
      dispatch(selectionIncrement());
    } else if (stepCounter === 1 && isSelected === true) {
      setIsSelected(false);
      dispatch(selectionDecrement());
    } else if (stepCounter === 2 && isSelected2 === false) {
      setIsSelected2(true);
      // console.log("card isSelected2");
      dispatch(selectionIncrement());
    } else if (stepCounter === 2 && isSelected2 === true) {
      setIsSelected2(false);
      dispatch(selectionDecrement());
    } else if (stepCounter === 3 && isSelected3 === false) {
      setIsSelected3(true);
      // console.log("card isSelected3");
      dispatch(selectionIncrement());
    } else if (stepCounter === 3 && isSelected3 === true) {
      setIsSelected3(false);
      dispatch(selectionDecrement());
    }
  };

  if (stepCounter === 1)
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
  if (stepCounter === 2 && isSelected && isSelected2)
    return (
      <div
        className="card"
        onClick={handleClick}
        style={{
          color: isSelected2 ? "aqua" : "",
        }}
      >
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-distance">{props.distance}</div>
      </div>
    );
  if (stepCounter === 3 && isSelected && isSelected2 && isSelected3)
    return (
      <div
        className="card"
        onClick={handleClick}
        style={{
          color: isSelected3 ? "blueviolet" : "",
        }}
      >
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-distance">{props.distance}</div>
      </div>
    );
  if (stepCounter === 5 && isSelected && isSelected2 && isSelected3)
    return (
      <div
        className="card"
        onClick={handleClick}
        style={{
          color: isSelected3 ? "orange" : "",
        }}
      >
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-distance">{props.distance}</div>
      </div>
    );
  if (stepCounter === 2 && !isSelected) {
    return (
      <div
        className="card"
        onClick={handleClick}
        style={{
          color: isSelected2 ? "lime" : "",
          display: "none",
        }}
      >
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-distance">{props.distance}</div>
      </div>
    );
  } else if (stepCounter === 3 && !isSelected2) {
    return (
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
      <div
        className="card"
        onClick={handleClick}
        style={{
          color: isSelected3 ? "blueviolet" : "",
          display: "none",
        }}
      >
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-distance">{props.distance}</div>
      </div>
    );
  } else if (stepCounter === 5 && !isSelected3) {
    return (
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
          color: "white",
        }}
      >
        <div className="restaurant-name">{props.name}</div>
        <div className="restaurant-distance">{props.distance}</div>
      </div>
    );
}

export default FoodCard;
