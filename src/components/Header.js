import React from "react";

const Header = (props) => {
  const { property } = props;
  return <h1 style={{ color: "red" }}>{property}</h1>;
};

export default Header;
