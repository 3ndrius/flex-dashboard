
import React from 'react';
import './button.scss';

function Button({title, primary, light, shortLight, short}) {
      if(primary){ return( <button className="btn btn-primary">{title}</button>)}
      if(light){ return( <button className="btn btn-light">{title}</button>)}
      if(shortLight){ return( <button className="btn btn-short--light">{title}</button>)}
      if(short){ return( <button className="btn btn-short--tran">{title}</button>)}
    
}
  


export default Button;