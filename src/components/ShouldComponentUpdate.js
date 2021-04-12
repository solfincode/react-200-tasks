import React, { Component } from "react";

export default class ShouldComponentUpdate extends Component {
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
    this.setState({ tmp_state2: true });
  }
  shouldComponentUpdate(props, state) {
    console.log("shouldComponentUpdate call");
    return state.tmp_state2;
  }
  render() {
    console.log("render call");
    return (
      <>
        <h2>this is shouldComponentUpdate</h2>
        <p>
          shouldComponentUpdate return boolean value. if it is true then render
          function will be executed again
        </p>
      </>
    );
  }
}
