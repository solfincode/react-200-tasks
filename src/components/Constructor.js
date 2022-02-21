import React, { Component } from "react";

export default class Constructor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor call");
  }
  render() {
    console.log("render call");
    return <h2>this is constructor</h2>;
  }
}
