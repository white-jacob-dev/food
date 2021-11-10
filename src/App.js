import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  var latitude;
  var longitude;
  const [restaurants, setRestaurants] = useState([]);
  
  function success(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    console.log("("+latitude+", "+longitude+")");
  }

  navigator.geolocation.getCurrentPosition(success);


  useEffect(() => {
    axios
      .get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+"%2C"+longitude+"&radius=1500&type=restaurant&key=AIzaSyDoY5Ziii3WZJ6oNcw2loYOzeZSB09cmNU"
      )
      .then((result) => {
        for (let i=0; i<result.data.results.length; i++){
          setRestaurants(oldArray => [...oldArray, result.data.results[i].name])
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div class='test'>
      <header>
        The picky couple's food picker.
      </header>
      <p>
        Do you and your significant other share an equal ineptitude for deciding on a place to eat?
      </p>
      <p>
        Well then, you're in the right place.
      </p>
      <button>
        Get Started
      </button>
      

      {restaurants.map((restaurantName, index) => 
      <div class="restaurants" key={index}>{ restaurantName }</div>  
      )}
    </div>
  );
}

export default App;
