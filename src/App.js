import React , { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode , setmode] = useState('light')
  const toogleMode = () =>{
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor ='rgb(22,25,27)';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor ='white';
    }
      
  } 
  return (
    <>
    <Navbar title="Rentro"  abouttext="Rent it" mode={mode} toogleMode = {toogleMode}  />
    <div className="container"><TextForm heading="Enter your text below" mode={mode}/></div>
    <About mode={mode}/>
    </>
  );
}

export default App;
