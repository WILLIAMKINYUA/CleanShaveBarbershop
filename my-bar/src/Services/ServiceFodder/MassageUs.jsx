import React from 'react'
import { useState } from 'react'
import ServiceNav from '../ServiceNav'
import"./Massage.css"
import { Massages } from '../../Massage'
import { Link } from 'react-router-dom'


const MassageUs = () => {
  const[massage,setMassage]=useState(Massages)
const filterOrder=(order)=>{
setMassage(Massages.filter((x)=>{return x.title===order}))
}
  return (
    <div className='salonpage'><ServiceNav/>
    <div className="description"><div className="content">
    <h1 className='salonname'>Massage</h1>
    <p className="salonpara">Comfort and Efficiency is elevated by an epic massage section </p>
  <div className="main">
   <section className="first">
  <div className="bone">
<ul className='group'>
  <li onClick={()=>filterOrder("Full Body Massage")} className="blink">Full Body Massage</li>
  <li onClick={()=>filterOrder("Deep Tissue Massage")} className="blink">Deep Tissue Massage</li>
  <li onClick={()=>filterOrder("Foot massage")} className="blink">Foot massage</li>
  <li onClick={()=>filterOrder("Head Massage ")} className="blink">Head Massage </li>
</ul>
  </div>
    </section>
    <section className="second">
    {massage.map((x)=>(<div className='display'key={x.id}>
      <img src={x.image} alt='Not supported' className='displayImage'/>
      <div className="details">
    <h1 className='displaytitle'>{x.title}</h1>
    <Link to='/form'><button className='bwn'>Make appointment</button></Link>
    
    </div>   </div>))}
    </section></div>
    </div></div>
    </div>
  )
}

export default MassageUs