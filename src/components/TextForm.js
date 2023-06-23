import React from 'react'
import "./TextForm.css";
import { useState } from 'react'

export default function TextForm(props) {

    const handleupClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handlelowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick = () =>{
        let newText = "";
        setText(newText)
        
    }

    const handleonChange = (event)=>{
        setText(event.target.value)
    }
    const [text,setText]= useState("")

    return (
    <div>
        <h1 className='my-3'>{props.heading}</h1>
        <label htmlFor="myBox" className='mb-2'></label>
        <div className="mb-4">
        <textarea className="form-control1" value={text} placeholder='Type or Paste...' onChange={handleonChange} id="myBox" rows="10"></textarea>
        </div>
        <div className="">
        <button className="btn btn-primary mx-3" onClick={handleupClick}>Convert to UpperCase</button> 
        <button className="btn btn-primary mx-3" onClick={handlelowerClick}>Convert to LowerCase</button>
        <button className="btn btn-danger mx-3" onClick={handleclearClick}>CLEAR</button>
        </div>
    </div>
  )
}
