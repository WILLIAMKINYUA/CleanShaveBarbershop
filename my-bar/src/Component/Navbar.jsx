import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"; // Ensure this path is correct based on your project structure
import { LogoData } from '../logo';
const NavbarUs = () => {
  const[logo,setLogo]=useState(LogoData)
  const FilterLogo=(logos)=>{setLogo(logo.filter((x)=>x.id===logos))}
  return (
    <div className="merge">
      <div className='nav'>
      {logo.map((x)=>(
     <div className="logo"key={x.id}>
        <img src={x.image} alt="Not Found" className='logoname'/>
      </div>))}
     
        <h3 className='navhead'> Clean Shave <span className="two">Barbershop</span></h3>
        <div className="navlink">
          <Link to="/" className='linknav'>Home</Link>
          <Link to="/service" className='linknav'>Service</Link>
          <Link to="/about" className='linknav'>About</Link>
          <Link to="/contact" className='linknav'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarUs;
