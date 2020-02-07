import React from 'react';
import './app.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="container">
        <Header></Header>
        <Main />
      </div>
    </div>
  );
}

export default App;
