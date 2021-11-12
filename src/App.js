import React, { useState } from "react";
import "./App.css";
import RestaurantAPI from "./RestaurantAPI";
import FoodCard from "./FoodCard";

function App() {
  var latitude = 39.659;
  var longitude = -79.96;

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    console.log("(" + latitude + ", " + longitude + ")");
  }
  navigator.geolocation.getCurrentPosition(success);

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
        <FoodCard name="Red Lobster" distance="20.23 miles" />
        <RestaurantAPI />
      </div>
    </div>
  );
}

export default App;
