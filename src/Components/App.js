import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Table from './Table';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className="App">
          <Table />
        </main>
            <Footer />
      </div>
    );
  }
}

export default App;
