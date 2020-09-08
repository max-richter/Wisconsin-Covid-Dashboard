import React from 'react';
import NavbarSection from './components/NavbarSection';
import AppFooter from './components/AppFooter';
import './App.css';

/**
 * Parent component (top of the tree)
 */
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
