import React , {useState} from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  const [mode , setmode] = useState('light')
  const style = {color: mode==='light'?'black':'#816797' , backgroundColor: mode==='light'?'white':'#1B2430'} 

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
    <Router> 
    <Navbar title="Rentro"  abouttext="Rent it" mode={mode} toogleMode = {toogleMode}  />
    
     <Switch>
       <Route  exact path="/about">
            <About mode={mode} />
          </Route>
         <Route exact path="/">
          <TextForm style={style}  heading="Enter your text below" mode={mode}/>
          </Route>
          
          
          
          
        </Switch>
 </Router>
  
    </>
  )

}

export default App;
