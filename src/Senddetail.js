import React from 'react'
import {useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Senddetail({info,sethistory}) {
  const navigate = useNavigate();
    const otp=Math.floor(100000 + Math.random() * 900000);
    const handledropdownChange=(e)=>{
        async function abc(){
          try {
            // const res = await axios.post("https://localhost:3001/sendsms", { "num":""+info.phone});

            const res = await axios.post(" https://smsserviceapi.herokuapp.com/sendsms", { "num":""+info.phone});
            console.log(res)
          } catch (err) {  
          }      
        }
        abc() 
        sethistory({fullname:info.firstname+" "+info.lastname,time:(new Date()).getTime(),otp:otp})
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
