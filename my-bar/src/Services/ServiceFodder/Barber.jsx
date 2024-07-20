import React from 'react'
import { useState } from 'react'
import ServiceNav from '../ServiceNav'
import"./Salon.css"
import { Barbers } from '../../Barber'
import { Link } from 'react-router-dom'
const BarberUs = () => {
  const[barber,setBarber]=useState(Barbers)
const filterOrder=(order)=>{
setBarber(Barbers.filter((x)=>{return x.title===order}))
}
  return (
    <div className='salonpage'><ServiceNav/>
    <div className="description"><div className="content">
    <h1 className='salonname'>Barber</h1>
    <p className="salonpara">Being smart depends on the haircut from a skilled professional</p>
  <div className="main">
   <section className="first">
  <div className="bone">
<ul className='group'>
  <li onClick={()=>filterOrder("Deadlock Repair")} className="blink">Deadlock Repair</li>
  <li onClick={()=>filterOrder("Stylistic Haircut")} className="blink">Stylistic Haircut</li>
  <li onClick={()=>filterOrder("Beard Trimming")} className="blink">Beard Trimming</li>
  <li onClick={()=>filterOrder("Hair Therapy")} className="blink">Hair Therapy</li>
</ul>
  </div>
    </section>
    <section className="second">
    {barber.map((x)=>(<div className='display'key={x.id}>
      <img src={x.image} alt='Not supported' className='displayImage'/>
    <h1 className='displaytitle'>{x.title}</h1>
    <Link to="/form">
    <button className='bwn'>Make appointment</button></Link>
    </div>))}
    </section></div>
    </div></div>
    </div>
  )
}

export default BarberUs