import "./style.css";


import React, { Component } from "react";

class Card extends Component {
  
  render() {
      let badgeText 
      if (this.props.jokes.openSpots === 0) {
          badgeText = "SOLD OUT"
      }
      else if (this.props.jokes.location === "Online") {
          badgeText = "ONLINE"
      }
      
    return (
        <div className="objects">
            {badgeText && <div className="badge">{badgeText}</div>}
          <img src={`../images/${this.props.jokes.img}`} alt="" />
          <div className="rating">
            <span>{this.props.jokes.stats.rating}</span> <b>--</b>
            <span>{this.props.jokes.stats.reviewCOunt}</span>
            
            {/* <span>{this.props.jokes.location}</span> */}
          </div>
          <p className="title">{this.props.jokes.title}</p>
          <p className="price">From {this.props.jokes.price} / person</p>
        </div>
     
    );
  }
}



export default Card;
