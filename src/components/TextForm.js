import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    console.log(newtext);
    setText(newtext);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    console.log(newtext);
    setText(newtext);
    props.showAlert("Converted to lowercase", "success");
  };

   const handleClearClick = () => {
    let newtext = ' '
    console.log(newtext);
    setText(newtext);
    props.showAlert("Text cleared", "success");
  };

  const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        // window.alert('Copied');
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        // window.alert('Extra spaces removed');
        props.showAlert("Extra spaces removed", "success");
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking", "success");
    }

  const handleOnChange = (event) => {
    setText(event.target.value);

  };

  return (
    <>
      <div className="mb-3"  style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="9"
          value={text}
          onChange={handleOnChange} 
         style={{backgroundColor: props.mode === 'dark' ? 'gery' : 'white'}}
          
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary me-5" onClick={handleUpClick}>upper</button>

      <button type="button" className="btn btn-primary me-5" onClick={handleLoClick}>lower</button>

      <button type="button" className="btn btn-primary me-5" onClick={handleClearClick}>Clear </button>

      <button type="button" className="btn btn-primary me-5" onClick={handleCopyClick}>Copy </button>

      <button className="btn btn-warning me-5" onClick={handleExtraSpaces}>Remove Spaces</button>

      <button className="btn btn-success me-5" onClick={handleSpeak}>Speak</button>

      <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>

        <h2>Your text summry</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}

     
        <p> {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>

        



        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>



      </div>




    </>
  )
}
