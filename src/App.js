import React, { useState, useEffect } from 'react'
import './app.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [menu, setMenu]  = useState(false);

let handleMenu = () => {

if(menu){
  document.querySelector('.sidebar').style.display = "none";
  document.querySelector('.dashboard').classList.remove('dashboard--active');
  setMenu(false)
}
  if(!menu){
    document.querySelector('.sidebar').style.display = "block";
    document.querySelector('.sidebar').style.positon = "absolute";
    document.querySelector('.dashboard').classList.add('dashboard--active');

    setMenu(true)
    }
  }
  useEffect(() => {

      function myFunction(x) {
          if (x.matches) { // If media query matches
              document.querySelector('.sidebar').style.positon = "absolute";
              document.querySelector('.sidebar').style.display = "block";
              document.querySelector('.dashboard').classList.remove('dashboard--active');
              setMenu(false)
            
          } else {
  
            if(!menu){
              document.querySelector('.sidebar').style.display = "none"
              document.querySelector('.dashboard').classList.remove('dashboard--active');
            }    
          }
        }
        let x = window.matchMedia("(min-width: 1920px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) 
     
    },[menu]);

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
