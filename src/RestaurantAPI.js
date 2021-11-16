import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

function RestaurantAPI() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=United+States")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          result.forEach((item) => {
            console.log(item.name);
          });
          // console.log(result);
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
    const restaurants = items.map((item, index) => <FoodCard key={index} name={items[index].name} distance="20.23 miles" />)

    return [restaurants];
  }
}

export default RestaurantAPI;
