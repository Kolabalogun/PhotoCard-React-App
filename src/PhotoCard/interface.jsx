import Card from "./card";
import React, { Component } from "react";

import Navbar from "./navBar";

class Interface extends Component {
  state = {
    JokesArray: [
      {
        id: 1,
        img: "product-1.jpg",
        stats: {
          rating: "5.0",
          reviewCOunt: "30",
        },
        location: "Online",
        title: "Lorem ipsum dolor, sit amet.",
        price: "$120",
        openSpots: 17,
      },
      {
        id: 2,
        img: "product-2.jpg",
        stats: {
          rating: "4.0",
          reviewCOunt: 10,
        },
        location: "Online",
        title: "Lorem ipsum dolor, sit amet.",
        price: "$190",
        openSpots: 0,
      },
      {
        id: 3,
        img: "product-6.jpg",
        stats: {
          rating: "1.0",
          reviewCOunt: 50,
        },
        location: "Online",
        title: "Lorem ipsum dolor, sit amet.",
        price: "$220",
        openSpots: 10,
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          {this.state.JokesArray.map((jokes) => (
            <Card key={jokes.id} jokes={jokes} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Interface;
