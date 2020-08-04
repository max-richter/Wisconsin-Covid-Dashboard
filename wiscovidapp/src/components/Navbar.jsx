import React from "react";



/**
 * Contains everything needed for the navbar
 */
class Navbar extends React.Component {
  render() {
    return (
      <div class="container-fluid nav-width">
        <nav class="navbar navbar-dark">
          <a class="navbar-brand">Wisconsin COVID-19 Dashboard</a>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select County
            </button>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <a class="dropdown-item" href="#">
                Dane
              </a>
              <a class="dropdown-item" href="#">
                Sauk
              </a>
              <a class="dropdown-item" href="#">
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
