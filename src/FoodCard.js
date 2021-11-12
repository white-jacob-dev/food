import React from "react";
import "./FoodCard.css";

class FoodCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="restaurant-name">{this.props.name}</div>
        <div className="restaurant-distance">{this.props.distance}</div>
      </div>
    );
  }
}

export default FoodCard;
