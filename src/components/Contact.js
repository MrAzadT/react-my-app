import React, { Component } from "react";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, gmail, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h1 className="mx-4">
          {name}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          ></i>
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          ></i>
        </h1>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{gmail} </li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
