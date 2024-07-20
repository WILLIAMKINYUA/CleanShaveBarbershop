import React from 'react'
import ServiceNav from './ServiceNav'
import"./Service.css"
import Footer from '../Component/Footer'
import ImageSlider from './ServiceFodder/VideoSlider'
const Service = () => {
  return (
    <div className='spage'><ServiceNav/>
<p className="servicepara"style={{position:"absolute",top:"23%",zIndex:'1'}}>
  We offer the above  services profesionally
</p><Footer/>
    </div>
  )
}

export default Service