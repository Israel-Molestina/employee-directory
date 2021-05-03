import React from "react";

function Header() {
  return (
    <header>
      <img
        src={require("../../images/emp-directory.png").default}
        alt="header"
        className="img-fluid"
      />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <section className="container-fluid justify-content-center">
          <section className="justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <span class="navbar-brand mb-0 h1">Home</span>
              </li>
            </ul>
          </section>
        </section>
      </nav>
    </header>
  );
}

export default Header;
