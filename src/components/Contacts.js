import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "kamal",
        gmail: "kamal@gmail.com",
        phone: "344-554-4543",
      },
      {
        id: 2,
        name: "tamal",
        gmail: "tamal@gmail.com",
        phone: "344-554-4543",
      },
      {
        id: 3,
        name: "anha",
        gmail: "anha@gmail.com",
        phone: "344-554-4543",
      },
      {
        id: 4,
        name: "lima",
        gmail: "lima@gmail.com",
        phone: "344-554-4543",
      },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
