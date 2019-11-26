import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Profile />
        <Footer />
      </div>
    
    );
  }
}

export default App;
