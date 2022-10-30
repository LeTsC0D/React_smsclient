import logo from './otpgeneration.jpg';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useState} from "react"
import Vonage from '@vonage/server-sdk'
import SMS from '@vonage/server-sdk/lib/Messages/SMS.js'

const vonage = new Vonage({
  apiKey: "2cb07ee0",
  apiSecret: "HxJiai0ODI6tnqu0"
})

function App() {
const [sms,setsms]=useState("")
const [contact,setContact]=useState([
  {firstname:"shashank",lastname:"srivastva",phone:"909",otp:"123"},
  {firstname:"biku",lastname:"srivastva",phone:"343",otp:"12345"}
])

const handleChange=(event)=>{
  setsms(event.target.value)
  vonage.messages.send(
    new SMS("jafh", "8987383244", "Vonage"),
    (err, data) => {
      if (err) {
        console.error("Message failed with error:", err);
      } else {
        console.log(`Message ${data.message_uuid} sent successfully.`);
      }
    }
  );

  console.log(sms)
}

const handledropdownChange=(e)=>{
  console.log(e.target.value)
}


  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <input onChange={(e)=>handleChange(e)}/>

      <select onChange={(e)=>handledropdownChange(e)} >
          {
          contact.map((item,index) => (
            <option key={index} value={index}>
              {item.firstname+" "+item.lastname}
            </option>
          ))
          }
      </select>

      </header>
    </div>
  );
}

export default App;


{   
  /* <DropdownButton id="dropdown-basic-button" value={sms} title="Dropdown button" onChange={(e)=>handledropdownChange(e)}>
    {
      contact.map((value,index)=>{
        return (
          <>
          <Dropdown.Item key={index} value={value.firstname}>{value.firstname}</Dropdown.Item>
          </>
        )
      })
    }
    </DropdownButton> */
}