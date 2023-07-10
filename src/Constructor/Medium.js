import React, { Component } from "react";
//Medium
class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        Name: "Johnson Doe",
        Number: 9803334355,
        Birthday: "05/27/1999",
      },
    };
  }
  render() {
    //equivalent to const person = this.state.person
    const { person } = this.state;
    return (
      <div>
        <BasicInfo person={person} />
      </div>
    );
  }
}

const BasicInfo = ({ person }) => {
  const { Name, Number, Birthday } = person;
  return (
    <div>
      <h2>Name: {this.props.Name}</h2>
      <h2>Phone Number: {this.props.Number}</h2>
      <h2>DOB: {this.props.Birthday}</h2>
    </div>
  );
};
export default Medium;
