import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=AIzaSyDoY5Ziii3WZJ6oNcw2loYOzeZSB09cmNU"
      )
      .then((result) => {
        for (let i=0; i<result.data.results.length; i++){
          setRestaurants(oldArray => [...oldArray, result.data.results[i].name])
        }
        console.log(restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {restaurants.map(restaurantName => 
        <div>{ restaurantName }</div>  
      )}
    </div>
  );
}

export default App;
