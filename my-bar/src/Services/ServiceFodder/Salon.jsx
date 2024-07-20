import React from 'react'
import { useState } from 'react'
import ServiceNav from '../ServiceNav'
import"./Salon.css"
import { Salons } from '../../Salon'
import { Link } from 'react-router-dom'
const SalonUS = () => {
  const[salon,setSalon]=useState(Salons)
const filterOrder=(order)=>{
setSalon(Salons.filter((x)=>{return x.title===order}))
}
  return (
    <div className='salonpage'><ServiceNav/>
    <div className="description"><div className="content">
    <h1 className='salonname'>Salon</h1>
    <p className="salonpara">My dress ,my choice but beauty  starts with the hairstyle</p>
  <div className="main">
   <section className="first">
  <div className="bone">
<ul className='group'>
  <li onClick={()=>filterOrder("Deadlock Repair")} className="blink">Deadlock Repair</li>
  <li onClick={()=>filterOrder("Make-up Application")} className="blink">Make-up Application</li>
  <li onClick={()=>filterOrder("Stylistic Weaving")} className="blink">Stylistic Weaving</li>
  <li onClick={()=>filterOrder("Salon Services")} className="blink">Salon Services</li>
</ul>
  </div>
    </section>
    <section className="second">
    {salon.map((x)=>(<div className='display'key={x.id}>
      <img src={x.image} alt='Not supported' className='displayimage'/>
    <h1 className='displaytitle'>{x.title}</h1>
    <Link to="/form">
    <button className='bwn'>Make appointment</button></Link>
    </div>))}
    </section></div>
    </div></div>
    </div>
  )
}

export default SalonUS