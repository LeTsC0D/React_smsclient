import logo from './otpgeneration.jpg';
import './App.css';
import {useState} from "react"
import Contactinfo from "./Contactinfo"

function App() {
  const [contactinfoflag,setcontactinfoflag]=useState(0)
  const [indexcontactinfo,setindexcontactinfo]=useState(0)
  const contact=[
    {firstname:"shashank",lastname:"srivastva",phone:"8987383244"},
    {firstname:"krishna",lastname:"srivastva",phone:"8987383244"}
  ]

  const handledropdownChange=(e)=>{
    setcontactinfoflag(1)
    setindexcontactinfo(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select onChange={(e)=>handledropdownChange(e)} >
          {
          contact.map((item,index) => (
            <option key={index} value={index}>
              {item.firstname+" "+item.lastname}
            </option>
          ))
          }
      </select>


      {
        (contactinfoflag===1) && <Contactinfo info={contact[indexcontactinfo]}/>
      }


      </header>
    </div>
  );
}

export default App;
