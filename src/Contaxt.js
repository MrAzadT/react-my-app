import React, { Component } from "react";

const Context = React.createContext();

export class provider extends Component {
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
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
