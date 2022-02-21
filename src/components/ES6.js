import React, { Component } from "react";

export default class ES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let language = "javascript";
    let country = "USA";
    const name = "David";
    console.log(`language is ${language} and ${name} lives in ${country}`);
    console.log("const don't allow redeclaration and let allow redeclaration");
  }
  render() {
    return <h2>this is es6 template literal</h2>;
  }
}
