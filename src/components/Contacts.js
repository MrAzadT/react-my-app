import React, { Component } from "react";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "kamal",
          gmail: "kamal@gmail.com",
          phone: 344 - 554 - 4543,
        },
        {
          id: 2,
          name: "tamal",
          gmail: "tamal@gmail.com",
          phone: 344 - 554 - 4543,
        },
        {
          id: 3,
          name: "anha",
          gmail: "anha@gmail.com",
          phone: 344 - 554 - 4543,
        },
        {
          id: 4,
          name: "lima",
          gmail: "lima@gmail.com",
          phone: 344 - 554 - 4543,
        },
      ],
    };
  }

  render() {
    return <div></div>;
  }
}

export default Contacts;
