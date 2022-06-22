import React  from "react";
// import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  // const [mode , setmode] = useState('light')
  // const style = {color: mode==='light'?'black':'#816797' , backgroundColor: mode==='light'?'white':'#1B2430'} 

  // const toogleMode = () =>{
  //   if(mode ==='light'){
  //     setmode('dark');
  //     document.body.style.backgroundColor ='rgb(22,25,27)';
  //   }
  //   else{
  //     setmode('light')
  //     document.body.style.backgroundColor ='white';
  //   }
   
      
  // } 
  return (
    <>
    {/* <Navbar title="Rentro"  abouttext="Rent it" mode={mode} toogleMode = {toogleMode}  />
    <div className="container"><TextForm style={style}  heading="Enter your text below" mode={mode}/></div>
    <About mode={mode}/> */}

<div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
    </>
  );
}

export default App;
