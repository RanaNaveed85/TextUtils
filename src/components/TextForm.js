import React, {useState } from 'react'


export default function TextForm(props) {

  const [text, setText] = useState('');// ('Enter Text here2 ');

   //Event handler on text change in TexBox
   const handleonChange = (event) =>
   {
     // console.log("On Change");
     setText(event.target.value);
 
   }


  //Upper/Capiteal words Case
  const handleUpClick = () =>
  {
    // console.log("UpperCase was clicked: " + text);
    let newText = text.toUpperCase() ;
    
    setText(newText);
    props.showAlert("Converted to UPPER CASE", "success");

  }
  
 

 

  //Lower Case handler
  const handleLoClick = () =>
  {
    // console.log("UpperCase was clicked: " + text);
    let newText = text.toLowerCase() ;
    
    setText(newText);

    props.showAlert("Converted to lower case", "danger");
  }

  // Capital characater of each word
    const handleCapitalFirstClick = () =>
    {
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) 
        {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);  
        }      
        const newText = arr.join(" ");      
        setText(newText); 

        props.showAlert("Converted Capital characater of each word", "info   ");
    }

  // Clear Text handler
    const handleClearClick = () =>
    {
      // console.log("UpperCase was clicked: " + text);
      let newText = '' ;
      
      setText(newText);

    props.showAlert("Text has been Clear", "warning");

    
    }  

   

  //Copy Text from Text Area
  const handleCopyClick = () =>
  {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);

    props.showAlert("Text has been Coppied", "dark ");

  }

  //Remove Extra Spaces
  const  handleExtraSpaces  = ()=>
  {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));

  props.showAlert("Extra Spaces have been Removed", "danger");

  }


 

  return (
    <> 
    <div className='container ' style={{color: props.mode==='dark'?'white':'#042743'}}> 
    {/* <div className='container ' style={{color: props.mode==='dark'?'#042743':'white'}}>  */}

    
        <h1> {props.heading} </h1>
        <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">Exmple Text Area</label> */}
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='light'?'white ':'grey', color: props.mode==='dark'?'white ':'#042743'}}  id="myBox" rows="8"></textarea>
        </div> 

        {/* #0c1581e3 */}
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}        >Upper</button>

        <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick} >lower</button>

        <button type="button" className="btn btn-primary mx-1" onClick={handleCapitalFirstClick} >Capitalize</button>

        <button type="button" className="btn btn-primary mx-1" onClick={handleCopyClick} >Copy</button>  

        <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</button>     
        
        <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces } >Remove Extra Spaces</button>  
        
        
        
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white ':'#042743'}}>
        
        <h2>Your Text Sumamry</h2>

        <p>{text.split(" ").length - 1} Words and {text.length} Characters</p>   

        <p>{ Math.ceil( 0.008 * (text.split(" ").length  - 1))} Minutes to read</p>

          <h3><strong>Preview</strong> </h3>
          <p>{text.length > 0? text: "Ener your Text int the TextBox above, to review here"}</p>
    </div>

 

    </>

  )
}
