import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard.js";

function RestaurantAPI() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function showPosition(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      fetch(
        "https://secret-scrubland-29763.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
          latitude +
          "%2C" +
          longitude +
          "&radius=1500&type=restaurant&key=AIzaSyDoY5Ziii3WZJ6oNcw2loYOzeZSB09cmNU"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.results);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div style={{ color: "white" }}>Loading Restaurants...</div>;
  } else {
    const restaurants = items.map((item, index) => (
      <FoodCard
        key={index}
        id={index}
        name={items[index].name}
        distance={items[index].vicinity}
      />
    ));

    return [restaurants];
  }
}

export default RestaurantAPI;
