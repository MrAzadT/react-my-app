import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, gmail, phone } = this.props;
    return (
      <div>
        <h2>name : {name}</h2>
        <p>gmail: {gmail}</p>
        <p>phone : {phone}</p>
      </div>
    );
  }
}

export default Contact;
