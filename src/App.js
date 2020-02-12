import React, { useState, useEffect } from 'react'
import './app.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [menu, setMenu]  = useState(false);

let handleMenu = () => {
  setMenu(!menu);
  document.querySelector('.sidebar').style.positon = "absolute";
  }

  useEffect(() => {
      function myFunction(x) {
          if (x.matches) { // If media query matches
            document.body.style.color = "yellow";
           
          } else {
            setMenu(false);
            document.body.style.color = "green";
            document.querySelector('.sidebar').style.positon = "absolute";
          
          }
        }
        let x = window.matchMedia("(min-width: 1920px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) 
     
    });

  return (
    <div className="App">
       <Sidebar />
      <div className="container">
        <Header menuSwitch={handleMenu}/>
        <Main />
      </div>
    </div>
  );
}

export default App;
