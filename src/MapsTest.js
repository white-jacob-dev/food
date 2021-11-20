import React from "react";
import { Loader } from "@googlemaps/js-api-loader"

function MapsTest() {
    
  const loader = new Loader({
    apiKey: "AIzaSyDoY5Ziii3WZJ6oNcw2loYOzeZSB09cmNU",
    version: "weekly",
    libraries: ["places"]
  });

  const mapOptions = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 4
  };
  
  loader.load()
  .then((google) => {
    new google.maps.Map(document.getElementById("map"), mapOptions);
  })
  .catch(error => {
    console.log(error)
  });

  return (
      <div id='map'></div>
  )
}

export default MapsTest;
  
