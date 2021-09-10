import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>name : {this.props.name}</h2>
        <h3>gmail: {this.props.gmail}</h3>
        <h4>phone : {this.props.phone}</h4>
      </div>
    );
  }
}

export default Contact;
