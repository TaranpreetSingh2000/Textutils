import React,{useState} from 'react'


export default function Textform(props) {

  const[text,settext]=useState('');

    const handleUpClick=()=>{
        console.log("Upper case was clicked" +text);
       // settext("You have clicked on handleUpClick")  // It change the value of text
       let newtext=text.toUpperCase(); 
       settext(newtext);   // It will convert it to upper case by using javascript upper case function
       props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick=()=>{
      console.log("Lower case was clicked" +text);
     let newtext=text.toLowerCase(); 
     settext(newtext);   
     props.showAlert("Converted to Lowercase","success");

  }

  // Speak
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Converted to speech","success");

  }

  // Copy text
  var handlecopy=()=>{
   
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied","success");


  }


  // Remove extra spaces

  const handleExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/);  // This will make an array of string which has 2 or more spaces between
    settext(newtext.join(" "))   // It will join the array with 1 space
    props.showAlert("Extra spaces successfully removed","success");

  }
    const handleOnChange=(event)=>{
        console.log("On change");
        settext(event.target.value);   // fire the event

    }
 //text="new text" // wronf way to change the state
 //settext("new text"); // correct way to change the state

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#10154c'}} >
    <h1>{props.heading}</h1>

    <div className="mb-3">
  <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#0f2142':'white',color:props.mode==='dark'?'white':'#10154c'}} id="myBox" rows="8"></textarea> {/*listen the event*/}
  </div>
  <button className="btn btn-primary my-4 mx-2"  onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary my-4 mx-2"  onClick={handleLoClick}>Convert to lowercase</button>
  <button className="btn btn-primary my-4 mx-2"  onClick={speak}>Speak</button>
  <button className="btn btn-primary my-4 mx-2" onClick={handlecopy}>Copy text</button>
  <button className="btn btn-primary my-4 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

</div>
    
    <div className="container my-3  " style={{color:props.mode==='dark'?'white':'#10154c'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
