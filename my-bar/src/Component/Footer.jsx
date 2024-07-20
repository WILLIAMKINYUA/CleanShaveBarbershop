import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import"./Footer.css"
const Footer = () => {
  return (<div className="whole">
    <div className="whose">
<main className='footerpage'>
<div className="left">
    <h4 className="footerhead">Contact</h4>
<div className="count">
    <p className="footarea">
    43 Naivasha-Nairobi Rd,
    </p>
    <div className="personal">
        <Link to={"#"} className='plinkfoot' >+(254)-758-388-340</Link>
        <Link to={"#"}  className='plinkfoot'>+(254)-780-313-060</Link>
        <Link to={"https://accounts.google.com/servicelogin?hl=en-gb"}   
        className='plinkfoot'>
           cleanshavebarbershop@yahoo.com
        </Link>

        
    </div>
</div>

</div>
<div className="center">
<h4 className="footerhead">Sources</h4>
    <div className="firstfooter">
        <Link to="/about" className='linkfooter'>About us</Link>
        <Link to="/service" className='linkfooter'>Services</Link>
        <Link to="/contact" className='linkfooter'>Privacy.</Link>
        <Link to="/" className='linkfooter'>Vision</Link>
        <Link to="/" className='linkfooter'>Mission</Link>
        <Link to="/" className='linkfooter'>Terms</Link>
        
    </div>
    <div className="secondfooter">
        <Link to="/" className='linkfooter'>Partners</Link>
        <Link to="/" className='linkfooter'>Business</Link>
        <Link to="/" className='linkfooter'>Careers</Link>
        <Link to="/" className='linkfooter'>Blog</Link>
        <Link to="/" className='linkfooter'>FAQ</Link>
        <Link to="/" className='linkfooter'>Creative</Link>
    </div>

</div>
<div className="right">
<h4 className="footerhead">Links</h4>
        <Link to="/service" className='linkfooters'>Our Vision</Link>
        <Link to="/about" className='linkfooters'>About us</Link>
        <Link to="/contact" className='linkfooters'>Contact us</Link>
        <div className="social">
        <div className="socialicon">
    <TiSocialInstagram size={19}/>
    </div>
    <div className="socialicon">
    <FaTwitter size={19} />
    </div>
    <div className="socialicon">
    <IoLogoLinkedin size={19} />
    </div>
    <div className="socialicon">
    <FaFacebookF size={19} />

    </div>
        </div>
        
</div>

</main>
<div className="copyright">
   <p className="details">
   Copyright &copy;2023 . All Rights Reserved. — Designed with love by William Kinyua 
   <p className='control'><span>Distributed by </span><span className='brand'>KinyWilly Studios</span></p>
   </p>
</div>
</div></div>
  )
}

export default Footer