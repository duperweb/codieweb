import React from 'react';
import './App.css';
import Header from "./Header"
import Table from './TableComponents/Table';
import NavMenu from './NavMenu';


const App = () => (
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



export default App;
