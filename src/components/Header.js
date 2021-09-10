import React from "react";

const Header = (props) => {
  const { property } = props;
  return <h1 style={head}>{property}</h1>;
};

const head = {
  color: "green",
  fontSize: "100px",
};
export default Header;
