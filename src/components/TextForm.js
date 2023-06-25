import React from 'react'
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
    
    const handleCopy = () =>{
        var newText = document.getElementById("myBox")
        newText.select();
        navigator.clipboard.writeText(newText.value)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))

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
        <div className="container">
        <h1 className='my-3'>{props.heading}</h1>
        <label htmlFor="myBox" className='mb-2'></label>
        <div className="mb-4">
        <textarea className="form-control" value={text} placeholder='Type or Paste...' onChange={handleonChange} id="myBox" rows="10"></textarea>
        </div>
        <div className="">
        <button className="btn btn-primary mx-3" onClick={handleupClick}>Convert to UpperCase</button> 
        <button className="btn btn-primary mx-3" onClick={handlelowerClick}>Convert to LowerCase</button>
        <button className="btn btn-success mx-3" onClick={handleCopy}>COPY</button>
        <button className="btn btn-warning mx-3" onClick={handleExtraSpaces}>REMOVE EXTRA SPACES</button>
        <button className="btn btn-danger mx-3" onClick={handleclearClick}>CLEAR</button>
        </div>
        <div className="float-none my-4">
            <h2>
                Your text Summary
            </h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p className="display-6">{text}</p>
        </div>
    </div>
  )
}
