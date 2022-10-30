import React from 'react'
import Senddetail from './Senddetail'
import {Routes,Route,useNavigate } from 'react-router-dom';


export default function Contactinfo({info}) {
  const navigate = useNavigate();

  const handlesend=(e)=>{

    navigate('/sendOTP');
  }
  
  return (
    <div>
        {info.firstname+" "+info.lastname}
        <br />
        {info.phone}
        <br />
       
        <button onClick={(e)=>handlesend(e)}>Send Message</button>
        <Routes>
          <Route path="/sendOTP" element={<Senddetail info={info}/>} />
        </Routes>

    </div>
  )
}
