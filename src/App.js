import React, { useState } from "react";
import "./App.css";
import RestaurantAPI from "./RestaurantAPI";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";

function App() {
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [IsStarted, setIsStarted] = useState(false);
  const [ButtonText, setButtonText] = useState(["Get Started"]);
  const buttonArray = ["We've Picked"];
  const [InstructionText, setInstructionText] = useState([
    "Do you and your significant other share an equal ineptitude for deciding on a place to eat?",
  ]);
  const instructionArray = [
    "Each person picks 5 restaurants from the list to the right that you could tolerate going to.",
  ];
  const [HeaderText, setHeaderText] = useState([
    "The picky couple's food picker.",
  ]);
  const headerArray = ["Pick your places."];

  const handleGetStarted = () => {
    setInstructionText(instructionArray);
    setButtonText(buttonArray);
    setHeaderText(headerArray);
    setIsStarted(true);
    setShowRestaurants(true);
  };

  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <div className="left">
        <header style={{ marginLeft: IsStarted ? "24vw" : "" }}>
          {HeaderText}
        </header>
        <p className="instruction-text">{InstructionText}</p>
        <p># of restaurants you've picked: {count}</p>
        <p className="sub-text" style={{ display: IsStarted ? "none" : "" }}>
          Well then, you're in the right place.
        </p>
        <button className="main-button" onClick={handleGetStarted}>
          {ButtonText}
        </button>
      </div>
      <div className="right">{showRestaurants ? <RestaurantAPI /> : ""}</div>
    </div>
  );
}

export default App;
