import React  from "react";
// import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./components/Create";

import{
  BrowserRouter as Router , 
  Route , 
  Switch
} from 'react-router-dom'
import BlogDetails from "./components/BlogDetails";
import ErrorPage from "./components/ErrorPage";
  function App() {
 
  return (
    <>
   


  <Router> 
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
        <Home/>
          </Route>
          <Route exact path="/create">
            <Create/>
          </Route>
          <Route exact path="/blog/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <ErrorPage/>
          </Route>
          
          
        </Switch>
      </div>
    </div>
  </Router>
   
      
    </>
  );
}

export default App;
