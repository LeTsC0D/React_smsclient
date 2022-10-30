import React from 'react'
import {useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Senddetail({info}) {
  const navigate = useNavigate();
    const otp=Math.floor(100000 + Math.random() * 900000);
    const handledropdownChange=(e)=>{
        async function abc(){
          try {
            const res = await axios.post("https://smsserviceapi.herokuapp.com/sendsms", { "num":""+info.phone});
            console.log(res)
          } catch (err) {  
          }      
        }
        abc() 
        navigate('/');
      }

  return (
    <div>
        <text>{"Hi your OTP is :"+otp} </text>
        <br />
        <button onClick={(e)=>handledropdownChange(e)}>Send</button>
    </div>
  )
}