import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, gmail, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h1 className="mx-4">
          {name}
          <i onClick={this.onShowClick} class="fas fa-sort-down"></i>
        </h1>
        <ul className="list-item">
          <li className="list-group-item">{gmail} </li>
          <li className="list-group-item">{phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
