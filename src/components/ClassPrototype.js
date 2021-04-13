import React, { Component } from "react";

export default class ClassPrototype extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //es5 prototype
    let countFunc = (function () {
      function count(nums) {
        this.numbers = nums;
      }
      count.prototype.showNum = function () {
        console.log(this.numbers);
      };
      return count;
    })();
    let countProto = new countFunc("from prototype 100");
    countProto.showNum();
    //es6 class
    class CountClass {
      constructor(num) {
        this.number = num;
      }
      showNum() {
        console.log(`${this.number}`);
      }
    }

    //init instance
    let count = new CountClass("from class hundred");
    count.showNum();
  }
  render() {
    return (
      <div>
        <h2>class and prototype component</h2>
      </div>
    );
  }
}
