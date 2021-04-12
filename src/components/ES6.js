import React, { Component } from "react";

export default class ES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let language = "javascript";
    let country = "USA";
    console.log(`language is ${language} country is ${country}`);
  }
  render() {
    return <h2>this is es6 template literal</h2>;
  }
}
