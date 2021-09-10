import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, gmail, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1 className="mx-4">Name : {name}</h1>
        <ul className="list-item">
          <li className="list-group-item">Gmail : {gmail} </li>
          <li className="list-group-item">Phone : {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
