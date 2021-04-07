import React, { Component } from "react";

export default class RenderFunc extends Component {
  render() {
    console.log("render call");
    return <h2>this is render function</h2>;
  }
}
