import React, { Component } from "react";

export default class SpreadOperator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let language = "javascript";
    let country = "USA";
    const name = "David";
    let varObj1 = { key1: "val1", key2: "val2" };
    let varObj2 = { key2: "new2", key3: "val3" };
    let sumObj = Object.assign({}, varObj1, varObj2);
    let spreadObj = { ...varObj1, ...varObj2 };

    console.log(`language is ${language} and ${name} lives in ${country}`);
    console.log("const don't allow redeclaration and let allow redeclaration");
    console.log("sumObj" + JSON.stringify(sumObj));
    console.log("spreadObj" + JSON.stringify(spreadObj));
  }
  render() {
    return (
      <div>
        <h2>this is spread operator component</h2>
      </div>
    );
  }
}
