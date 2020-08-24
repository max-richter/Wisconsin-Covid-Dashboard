import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import DataSection from './DataSection';
const countyNames = require("./counties.json");

// array of wisconsin counties
const countyData = countyNames.counties;

/**
 * Contains everything needed for the navbar
 */
class NavbarSection extends React.Component {
  state = { selectedCounty: "Dane" };

  onSelectHandler = (eventKey, event) => {
    let tempVal = event.target.innerHTML;
    this.setState({ selectedCounty: tempVal });
  };

  render() {
    
    return (
      <div className="container-fluid nav-width">
        <nav className="navbar navbar-dark">
          <a className="navbar-brand">Wisconsin COVID-19 Dashboard</a>
          <span className="navbar-text ml-auto">Showing Data for:</span>
          <div className="dropdown">
            <DropdownButton
              title={this.state.selectedCounty}
              id="dropdown-menu-align-right"
            >
              {countyData.map((data, index) => {
                return (
                  <Dropdown.Item
                    eventKey={index.toString()}
                    onSelect={this.onSelectHandler}
                  >
                    {data}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </div>
        </nav>
        <DataSection currCounty={this.state.selectedCounty}/>
      </div>
    );
  }
}

export default NavbarSection;
