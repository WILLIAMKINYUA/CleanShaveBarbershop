import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import"./Contact.css"
import { useState } from 'react';
import Footer from '../Component/Footer';


const ContactUs = () => {
  const [user, setUser] = useState({ Name: "", Email: "", Subject: "", Message: "" });

  return (
    <div className='contactpage'>
    <div className="iconside">
     <div className="contacticon">
      <div className="cion">
        < FaLocationDot size={25}/>
        </div>
      <div className="cinfo">
        <h6 className="cinfohead">Location:</h6>
        <p className="first">43 Naivasha-Nairobi Rd,</p>
        <p className="second">Naivasha 1250</p>
      </div>
      </div>

     <div className="contacticon">
      <div className="cion"><FaClock size={25}/></div>
      <div className="cinfo">
        <h6 className="cinfohead">Open Hours:</h6>
        <p className="first">Sunday-Friday:</p>
        <p className="second">11:00 AM - 11:00 PM</p>
      </div>
      </div>
     <div className="contacticons">
      <div className="cion"><MdEmail size={25}/></div>
      <div className="cinfo">
        <h6 className="cinfohead">Email:</h6>
        <p className="first">cleanshavebarbershop@yahoo.com</p>
      </div>
      </div>

     <div className="contacticon">
      <div className="cion"><FaPhone size={25}/></div>
      <div className="cinfo">
        <h6 className="cinfohead">Call:</h6>
        <p className="first">+254758388340</p>
        <p className="first">+254780313060</p>
      </div>
      </div>
    </div>
    <div className="formside">
        <form >
          <div className="details">
            < input type='text' name='Name' value={user.Name} placeholder='Your Name' className='names' onChange={(event) => setUser({ ...user, Name: event.target.value })} />
            < input type='email' name='Email' value={user.Email} placeholder='Your Email' className='email' onChange={(event) => setUser({ ...user, Email: event.target.value })} />
          </div>
          <input type="text" name='Subject' value={user.Subject} placeholder='Subject' className='subject' onChange={(event) => setUser({ ...user, Subject: event.target.value })} />
          <textarea name="Message" id= "message" cols="10" rows="10" value={user.Message} placeholder='Message' onChange={(event) => setUser({ ...user, Message: event.target.value })}></textarea>
          <button className="formbtn" type="submit">Send Message</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;