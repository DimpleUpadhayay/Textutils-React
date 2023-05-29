import React, { useState } from 'react'

export default function TextForm(props) {
   

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();//Converting to upper case
        setText(newText);//set text to uper case in textera on click of handleupClick button
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success")
       
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    const clearText = ()=>{
            let newText = '';
            setText(newText)
            props.showAlert("Clear Text","success")
    }
    const copyText = ()=>{
        let text = document.getElementById('myBox');
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy Text","success")
}
    const [text, setText] = useState('');
    // text="wejhgrwjehgrj"//Wrong way to change the state
    // setText("wejhgrwjehgrj");//Correct way to change the state
  
  return (
    <>

    <div className="container" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor:props.mode === 'dark' ? 'gray' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange}></textarea>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary my-3" onClick={clearText}>Clear Text</button>
            <button type="button" className="btn btn-primary my-3 mx-2" onClick={copyText}>Copy Text</button>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Your test summary</h1>
        <p>{text.split(" ").length} Words {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preivew</h2>
        <p>{text.length>0 ? text: "Enter something in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
