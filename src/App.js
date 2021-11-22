import React from "react";
import "./App.css";
import RestaurantAPI from "./RestaurantAPI";

function App() {
  return (
    <div>
      <div className="left">
        <header>The picky couple's food picker.</header>
        <p>
          Do you and your significant other share an equal ineptitude for
          deciding on a place to eat?
        </p>
        <p>Well then, you're in the right place.</p>
        <button>Get Started</button>
      </div>
      <div className="right">
        <RestaurantAPI />
      </div>
    </div>
  );
}

export default App;
