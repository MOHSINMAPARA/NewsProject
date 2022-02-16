import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

 const Navbar = () => {
  return (
    <ul className='Navbar'>
      <li>
        <NavLink className="color" to="/WorldNews"> World News </NavLink>    
      </li > 
      <li >
        <NavLink  className="color" to="/IndiaNews"> India News</NavLink>    
      </li > 
       
       
      <li >
        <NavLink className="color" to="/Articles">Articles </NavLink>    
      </li> 
       
      <li >
        <NavLink className="color" to="/ContactUS">Contact US </NavLink>    
      </li> 
        

    </ul>
  )
}
export default Navbar;