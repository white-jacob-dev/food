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
    "First, each person picks 5 restaurants from the list to the right that you could tolerate going to.",
    "Next, each person picks 3 restaurants from the remaining restaurants.",
    "Finally, each person picks 1 restaurant from what's left.",
    "Now, a restaurant will be picked randomly from the 2 restaurants each person settled on."
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
        console.log("Step counter = 1");
        setInstructionText(instructionArray[0]);
        //do some logic based on this step
        break;
      case 1:
        console.log("Step counter = 2");
        setInstructionText(instructionArray[1]);
        //do some logic based on this step
        break;
      case 2:
        console.log("Step counter = 3");
        setInstructionText(instructionArray[2]);
        //do some logic based on this step
        break;
      case 3:
        console.log("Step counter = 4");
        setInstructionText(instructionArray[3]);
        //do some logic based on this step
        break;
      default:
        console.log("something went wrong");
        break;
    }
    dispatch(selectionReset());
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
