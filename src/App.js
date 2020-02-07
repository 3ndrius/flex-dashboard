import React from 'react';
import './app.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="container">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
