import React, { Component } from 'react';
//import './style.css';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import EnterInfo from './components/EnterInfo';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchBar />
        <EnterInfo />
        <Footer />
      </div>
    );
  }
}

export default App;
