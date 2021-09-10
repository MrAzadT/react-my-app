import React from "react";

const Header = (props) => {
  const { property } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info ">
      <div className="container">
        <a href="/" className="navbar-brand">
          {property}
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                My Portfolio
              </a>
            </li>
            <li class="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
