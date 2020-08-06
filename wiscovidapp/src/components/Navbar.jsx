import React from "react";

/**
 * Contains everything needed for the navbar
 */
class Navbar extends React.Component {
  render() {
    return (
      <div className="container-fluid nav-width">
        <nav className="navbar navbar-dark">
          <a className="navbar-brand">Wisconsin COVID-19 Dashboard</a>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select County
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item" href="#">
                Dane
              </a>
              <a className="dropdown-item" href="#">
                Sauk
              </a>
              <a className="dropdown-item" href="#">
                Milwaukee
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
