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
    fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDoY5Ziii3WZJ6oNcw2loYOzeZSB09cmNU")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          // result.forEach((item) => {
          //   console.log(item.name);
          // });
          console.log(result);
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
    const restaurants = items.map((item, index) => (
      <FoodCard
        key={index}
        name={items[index].name}
        distance={items[index].domains[0]}
      />
    ));

    return [restaurants];
  }
}

export default RestaurantAPI;
