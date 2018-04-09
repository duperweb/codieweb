import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Table from './Table';
//import Sidemenu from './Sidemenu';
import NavMenu from './NavMenu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className="App">
          <section>
            <Table />
          </section>
        </main>
        <footer>
          <NavMenu />
        </footer>
      </div>
    );
  }
}

export default App;
