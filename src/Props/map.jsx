import React, { Component } from "react";

class Mapp extends Component {
  state = {};
  render() {
    const nums = [1, 2, 3, 4, 5];
    const names = ["alice", "tolu"];

    return (
      //     nums.map((newnums) => (
      // newnums * newnums
      //     ))

      names.map((capnames) => capnames.toUpperCase())
    );
  }
}

export default Mapp;
