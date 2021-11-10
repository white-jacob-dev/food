import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      {restaurants.map((restaurantName, index) => 
        <div key={index}>{ restaurantName }</div>  
      )}
    </div>
  );
}

export default App;
