import React, { useState } from "react";
import "./App.css";
import RestaurantAPI from "./RestaurantAPI";
import { useSelector, useDispatch } from "react-redux";
import { stepIncrement } from "./StepCounterSlice";
import { selectionReset } from "./SelectionCounterSlice";
import $ from "jquery";

function App() {
  const randomGenerator = Math.random() < 0.5;
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [ButtonText, setButtonText] = useState(["Get Started"]);
  const buttonArray = ["Continue", "Decide"];
  const [InstructionText, setInstructionText] = useState([
    "Do you and your significant other share an equal ineptitude for deciding on a place to eat?",
  ]);
  const instructionArray = [
    "First, each person picks 5 restaurants from the list to the right that you could tolerate going to.",
    "Next, each person picks 3 restaurants from the remaining restaurants.",
    "Finally, each person picks 1 restaurant from what's left.",
    "Now, because 2 adult human beings couldn't decide on a restaurant to eat, a robot will decide for you.",
    "Not what you wanted? Too bad. Go eat.",
  ];
  const [HeaderText, setHeaderText] = useState([
    "The picky couple's food picker.",
  ]);
  const headerArray = ["Pick your places.", "Decision time.", "Go eat."];

  //Redux state logic
  const dispatch = useDispatch();
  const selectionCounter = useSelector((state) => state.selectionCounter.value);
  const stepCounter = useSelector((state) => state.stepCounter.value);

  const handleButtonClick = () => {
    if (stepCounter === 4) {
      console.log("RANDOM GENERATOR IS: " + randomGenerator);
      if (randomGenerator === true) {
        $(".card:visible").first().hide();
      } else if (randomGenerator === false) {
        $(".card:visible:not(:first)").hide();
      }
    }
    dispatch(stepIncrement());
    switch (stepCounter) {
      case 0:
        console.log("Step counter = 1");
        setButtonText(buttonArray[0]);
        setInstructionText(instructionArray[0]);
        setHeaderText(headerArray[0]);
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
        setButtonText(buttonArray[1]);
        setInstructionText(instructionArray[3]);
        setHeaderText(headerArray[1]);
        //do some logic based on this step
        break;
      case 4:
        console.log("Step counter = 5");
        setInstructionText(instructionArray[4]);
        setHeaderText(headerArray[2]);
        break;

      default:
        console.log("something went wrong");
        break;
    }
    dispatch(selectionReset());
    setShowRestaurants(true);
  };

  return (
    <div>
      <div className="left">
        <header
          style={{
            marginLeft:
              stepCounter === 5
                ? "34.7vw"
                : stepCounter === 4
                ? "27vw"
                : stepCounter !== 0
                ? "24.4vw"
                : "",
          }}
        >
          {HeaderText}
        </header>
        <p className="instruction-text">{InstructionText}</p>
        <p
          style={{
            display:
              stepCounter !== 0 && stepCounter !== 4 && stepCounter !== 5
                ? ""
                : "none",
          }}
        >
          # of restaurants you've picked: {selectionCounter}
        </p>
        <p
          className="sub-text"
          style={{ display: stepCounter !== 0 ? "none" : "" }}
        >
          Well then, you're in the right place.
        </p>
        <button
          className="main-button"
          onClick={handleButtonClick}
          style={{ display: stepCounter === 5 ? "none" : "" }}
        >
          {ButtonText}
        </button>
      </div>
      <div className="right">{showRestaurants ? <RestaurantAPI /> : ""}</div>
    </div>
  );
}

export default App;
