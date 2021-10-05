import React from 'react';
import './Header.css';
import logo from './logo.png';



const Header = () => {  
  return (
    <div className="header">
      <img src= {logo} alt="Alpha Adventise" />
      <br></br>
      <br></br>
      <h2>Simple Form Sheet</h2>
    </div>
  );
}
 
export default Header;