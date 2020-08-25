import React from 'react';
import NavbarSection from './components/NavbarSection';
import AppFooter from './components/AppFooter';
import './App.css';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavbarSection />
        <AppFooter />
      </div>
    );
  }
}

export default App;
