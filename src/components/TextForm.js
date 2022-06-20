import React ,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log('clicked' + text)
    let newText  = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = ()=>{
    console.log('clicked' + text)
    let newText  = text.toLowerCase();
    setText(newText)
  }
  
  
  const handleonchange = (event)=>{
    console.log('on chnage')
    setText(event.target.value)
    
  }
  const handlefindChange = (event) => {
    findWord(event.target.value);
    
  };
  const handleReplaceChange = (event) => {
    replaceWord(event.target.value)
  };
  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord,rWord);
    setText(newText);
  };
  
  const [text , setText] = useState('')
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("")
  return (
    <>
    <div className={`container text-${props.mode ==='light'?'dark':'light'} `}> 
      <h1>{props.heading}</h1>
      <div className="mb-3 text-light">
      <textarea className="form-control" label="enter" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} style={{color: props.mode==='light'?'black':'#816797' , backgroundColor:props.mode==='light'?'white':'#1B2430'}} rows="3"></textarea>
      <textarea className="form-control" id="exampleFormControlTextarea1" value={fWord} onChange={handlefindChange} style={{color: props.mode==='light'?'black':'#816797' , backgroundColor:props.mode==='light'?'white':'#1B2430'}} rows="3"></textarea>
      <textarea className="form-control" id="exampleFormControlTextarea1" value={rWord} onChange={handleReplaceChange} style={{color: props.mode==='light'?'black':'#816797' , backgroundColor:props.mode==='light'?'white':'#1B2430'}} rows="3"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick} >To uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick} >To lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleReplaceClick} >Replace</button>

  
  </div>
  <div className="className mx-2 " style={{color: props.mode==='light'?'black':'#816797'}} >
    <h1>Your text summary</h1>
    <p>{text.split(" ").length } word and {text.length} charachters</p>
    <p>{0.08 *text.split(" ").length } time to read</p>
    <h1>Preview</h1>
    <p>{text}</p>
  </div>
   </>
  
  )
}
