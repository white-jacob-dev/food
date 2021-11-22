import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard.js";

function RestaurantAPI() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    var latitude = 39.659;
    var longitude = -79.96;
    fetch("https://secret-scrubland-29763.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+"%2C"+longitude+"&radius=1500&type=restaurant&key=AIzaSyDoY5Ziii3WZJ6oNcw2loYOzeZSB09cmNU")
    // fetch("http://universities.hipolabs.com/search?country=France")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
          // result.results.forEach((item) => {
          //   console.log(item.name);
          // }); 
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items)
    const restaurants = items.map((item, index) => (
      <FoodCard
        key={index}
        name={items[index].name}
        distance={items[index].vicinity}
      />
    ));

    return [restaurants];
  }
}

export default RestaurantAPI;
