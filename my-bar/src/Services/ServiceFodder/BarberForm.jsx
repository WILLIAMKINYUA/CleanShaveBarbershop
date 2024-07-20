import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import"./BarberForm.css"
const BarberForm = () => {
    const[form,setform]=useState({Name: "", Email: "",IdNumber:"",Message:""})
  return (
    <div>   <h3 className='carhead'style={{textAlign:"center"}}>CleanShave Barbershop</h3>
    <p className="carpara">
     Comfort,Stylistic,epic exprience and Classic  looks is all we offer. 
    </p>
    
        <form  className='form'>
        <div className="formhandle">
  <div className="personalinfo">
    <label htmlFor="name">Name:</label>
    < input type="text" value={form.Name}onChange={(event)=>setform({...form, Name: event.target.value })} placeholder='Client Name....'required className='ms'/>
    <label htmlFor="name" >Client`s Email:</label>
    <input type="email" value={form.Email} onChange={(event)=>setform({...form,Email: event.target.value})} placeholder='text@gmail.com'className='ms'required/>
    <label htmlFor="Idnumber">Client National Identication No:</label>
<input type="number" value={form.IdNumber} onChange={(event)=>setform({...form,IdNumber: event.target.value})}placeholder='37987345'className='ms' required/>
<div className="time">
<label htmlFor="date">Appointment Date:</label>
    <input type="date"required/>
<label htmlFor="time">Appropriate time</label>
<input type="time"/>

</div>

    <label htmlFor="message">Services to be offered:</label>
<textarea name="messaage" value={form.Message} onChange={(event)=>setform({...form,Message:event.target.value})}id="message" cols="30" rows="10" required>
    Which services would you like us to specify on.....
</textarea>
</div>
<div className="btnApplication">
<button className='formbtn'>Make an Appointment</button>
<Link to="/service">
<button className='formbtn'>Back</button></Link></div>
</div>
        </form>
        </div>
  )
}

export default BarberForm