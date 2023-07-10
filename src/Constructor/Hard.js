import React, { Component } from "react";

class Hard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          Name: "Johnson Doe",
          Number: 9803334355,
          Birthday: "05/27/1999",
        },
        {
          Name: "Jane Doe",
          Number: 1234567890,
          Birthday: "08/15/1990",
        },
      ],
    };
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Contacts</h1>
        {contacts.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

const BasicInfo = ({ person }) => {
  const { Name, Number, Birthday } = person;
  return (
    <div>
      <h2>Name: {Name}</h2>
      <h2>Phone Number: {Number}</h2>
      <h2>DOB: {Birthday}</h2>
    </div>
  );
};

export default Hard;
