import React, { Component } from "react";
//Easy
class Easy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }
  render() {
    return (
      <div>
        <h2>Name: Johnson</h2>
        <h2>Phone Number: 980 353-4582</h2>
        <h2>DOB: May 27, 1999</h2>
      </div>
    );
  }
}
export default Easy;
