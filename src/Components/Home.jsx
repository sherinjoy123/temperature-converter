import React, { useState } from 'react'

import { MDBInput, MDBRadio, MDBBtn } from "mdb-react-ui-kit";
function Home() {
    const[temperature,setTemperature]=useState("");
    const[unit,setUnit]=useState("celsius");
    const[result,setResult]=useState("");

    const handleTemperaturechange = (e)=>{
        const value = e.target.value;
        setTemperature(value);

        if(!isNaN(value)&& value!==""){
            if(unit =="celsius"){
                setResult(((value*9)/5+32).toFixed(2)+"°F");
            }else{
                setResult(((value-32)*5/9).toFixed(2)+"°C");
            }
        }else{
            setResult("");
        }

    }
    const handleUniteChange = (e)=>{
        setUnit(e.target.value);
        setTemperature("");
        setResult("");
    }
    const handleclear = ()=>{
       
        setTemperature("");
        setResult("");
    }
  return (
    <div>
        <div className="row " style={{backgroundColor:"bisque",minHeight:"100vh"}}>
            <h1 className='text-center p-5 m-4' style={{fontFamily:"sans-serif"}}>Enter Temperature</h1>
            <div className="col-4"></div>
            <div className="col-4 p-4 m-5">
            <MDBInput  value={temperature} onChange={handleTemperaturechange} label="Enter Temperature Value" id="form1" type="text" />
            <br />
               <div className="d-flex justify-content-center mb-3">
                 <MDBRadio value="celsius" onChange={handleUniteChange} checked={unit=="celsius"}     name='flexRadioDefault' id='flexRadioDefault1' label='Celsius'  />
                <MDBRadio   value="Fahrenheit" onChange={handleUniteChange} checked={unit=="Fahrenheit"}    name='flexRadioDefault' id='flexRadioDefault2' label='Fahrenheit' defaultChecked  />
               </div>
         

          <div className='text-center'>
          <MDBBtn color="primary"  onClick={handleclear} className="mb-3 p-3" style={{textAlign:"center"}}>
            Clear
          </MDBBtn>
          {
            result &&(
                <h3 className='mt-4'>
                    converted temperature : {result}
                </h3>
            )
          }
          </div>

            </div>
            <div className="col-4"></div>
        </div>
    </div>
  )
}

export default Home
