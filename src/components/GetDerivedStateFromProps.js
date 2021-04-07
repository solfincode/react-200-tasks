import React, { Component } from "react";

export default class GetDerivedStateFromProps extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log(props.prop_value);
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor call");
  }
  render() {
    console.log("render call");
    return <h2>this is getDerivedStateFromProps</h2>;
  }
}
