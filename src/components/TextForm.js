import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const changeUpper = ()=>{
    let UpperWords=text.toUpperCase();
    setText(UpperWords);
    props.showAlert('Convereted to upper case','success');
    document.title='Converted to upper case';
  }
  const changeLower = ()=>{
    let lowerWord=text.toLowerCase();
    setText(lowerWord);
    props.showAlert('Convereted to lower case','success');
    document.title='Converted to lower case';
  }
  const ClearAll = ()=>{
    text.toLowerCase();
    setText("");
    props.showAlert('All Text Cleared','success');
    document.title='Text Cleared';
  }
  const handleCopy = ()=>{
  
    navigator.clipboard.writeText(text);
    props.showAlert('Text Copied','success');
    // document.title='Text Copied';
    // document.execCommand('copy');
  }
  
  const handleExtraSpaces = ()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra Spaces Removed','success');
    document.title='Extra spaces removed';
  }

  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  return (
<>
<div className="my-3 container" style={{color:props.mode==='light'?'#020e3c':'white'}}>
    <label htmlFor="myBox"><h2>{props.heading}</h2></label>
    <textarea className="form-control" id="myBox" rows="7" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#041761', color:props.mode==='light'?'#020e3c':'white'}} value={text}></textarea>
    <button disabled={text.length===0} className='btn btn-primary rounded-0 my-3' onClick={changeUpper}>Upper Case</button>
    <button disabled={text.length===0} className='btn btn-primary rounded-0 my-3 mx-2' onClick={changeLower}>Lower Case</button>
    <button disabled={text.length===0} className='btn btn-primary rounded-0 my-3 mx-2' onClick={ClearAll}>Clear All</button>
    <button disabled={text.length===0} className='btn btn-primary rounded-0 my-3 mx-2' onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className='btn btn-primary rounded-0 my-3 mx-2' onClick={handleExtraSpaces}>Remove Spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==='light'?'#020e3c':'white'}}>
<h2>Text Summary</h2>
<p>{text.split(/\s+/).filter((x)=>{return x.length!==0}).length} Words and {text.length} Characters</p>
<p>{text.split(" ").filter((x)=>{return x.length!==0}).length*0.008} Minutes Read</p>
<h3>Preview</h3>
<p>{text.length>0?text:'Please Enter Text to generate preview'}</p>
</div>
</>
  )
}
