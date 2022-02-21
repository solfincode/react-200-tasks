import React, { Component } from "react";

export default class ComponentDidMount extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps " + props.prop_value);
    return { tmp_state: props.prop_value };
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor call");
  }
  componentDidMount() {
    console.log("component did mount call");
    console.log(this.state.tmp_state);
  }
  render() {
    console.log("render call");
    return <h2>this is getDerivedStateFromProps</h2>;
  }
}
