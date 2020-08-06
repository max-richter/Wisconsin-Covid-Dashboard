import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import DataSection from './components/DataSection';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <DataSection />
      </div>
    );
  }
}

export default App;
