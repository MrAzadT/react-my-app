import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    const { name, gmail, phone } = this.props;
    return (
      <div>
        <h1>name : {name}</h1>
        <p>gmail: {gmail}</p>
        <p>phone : {phone}</p>
      </div>
    );
  }
}

export default Contact;
