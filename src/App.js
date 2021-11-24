import React, { useState } from "react";
import "./App.css";
import RestaurantAPI from "./RestaurantAPI";
import { useSelector, useDispatch } from "react-redux";
import { stepIncrement } from "./StepCounterSlice";
import {
  selectionIncrement,
  selectionDecrement,
  selectionReset,
} from "./SelectionCounterSlice";

function App() {
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [IsStarted, setIsStarted] = useState(false);
  const [ButtonText, setButtonText] = useState(["Get Started"]);
  const buttonArray = ["Continue"];
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

  //Redux state logic
  const dispatch = useDispatch();
  const selectionCounter = useSelector((state) => state.selectionCounter.value);
  const stepCounter = useSelector((state) => state.stepCounter.value);

  const handleButtonClick = () => {
    dispatch(stepIncrement());
    switch (stepCounter) {
      case 0:
        console.log("1st step");
        //do some logic based on this step
        break;
      case 1:
        console.log("2nd step");
        //do some logic based on this step
        break;
      default:
        console.log("something went wrong");
        break;
    }
    dispatch(selectionReset());
    setInstructionText(instructionArray);
    setButtonText(buttonArray);
    setHeaderText(headerArray);
    setIsStarted(true);
    setShowRestaurants(true);
  };

  return (
    <div>
      <div className="left">
        <header style={{ marginLeft: IsStarted ? "24vw" : "" }}>
          {HeaderText}
        </header>
        <p className="instruction-text">{InstructionText}</p>
        <p style={{ display: stepCounter !== 0 ? "" : "none" }}>
          # of restaurants you've picked: {selectionCounter}
        </p>
        <p
          className="sub-text"
          style={{ display: stepCounter !== 0 ? "none" : "" }}
        >
          Well then, you're in the right place.
        </p>
        <button className="main-button" onClick={handleButtonClick}>
          {ButtonText}
        </button>
      </div>
      <div className="right">{showRestaurants ? <RestaurantAPI /> : ""}</div>
    </div>
  );
}

export default App;
