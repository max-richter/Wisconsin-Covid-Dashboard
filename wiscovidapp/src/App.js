import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import logo from './logo.svg';
import NavbarSection from './components/NavbarSection';
import './App.css';
import DataSection from './components/DataSection';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavbarSection />
        <DataSection />
      </div>
    );
  }
}

export default App;
