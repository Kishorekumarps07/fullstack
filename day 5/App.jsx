import React from "react";
import Login from "./login";

import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Register from "./register";
import Navbar from "./Navbar";
import Home from "./home";
import Plan from "./plans";
import About from "./about";
import Jio from "./jio";
import Admin from "./admin";

function App()
{
  return(
    <div >
      <Router>
      <Routes>
       <Route path="/reg" element={<Register/>}/>
       <Route path="/" element={<Login/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/plan" element={<Plan/>}/>
       <Route path="/jio" element={<Jio/>}/>
       <Route path="/admin" element={<Admin/>}/>
       
 
     
      </Routes>
      </Router>
    </div>
  );
}

export default App






