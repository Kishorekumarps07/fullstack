import React from "react";
import Navbar from "./Navbar";
import './home.css'
// import hm from './assets/4.png'
import hm from './assets/4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobileAlt, faWifi } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";


const Home=()=>
{
    return(
        <>
        <div>
            
                <Navbar/>    
        </div>
        <div style={{flexDirection:'row',display:'flex'}}>
           <img className="t" style={{width:800,height:700}} src={hm}></img>
           <div style={{marginLeft:50}}>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="ft">Experience the best of Entertainment with MyJio.</h1>
            <br></br>
            <br></br>
            <p className="rt">Your online mobile reharge transation is completely gauranteed and seure</p>
            <p className="rt">Earn reward points & get bonus anytime,anywhere</p>
            <br></br>
            <br></br>
            <div style={{flexDirection:'column',display:'flex'}}>

           <NavLink to="/plan"> <button className="innovation-button">
      Trending Now!
    </button></NavLink>
    <br/>
    <div style={{marginLeft:30}}>
        <NavLink to="/about">

    <button className="innovation-button">
        
     #View More
    </button>
        </NavLink>

    </div>
    
  
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <footer>

            <div className="footer-icons">
        <FontAwesomeIcon icon={faCreditCard} />
        <div style={{marginLeft:20}}>

        <FontAwesomeIcon icon={faMobileAlt} />
        </div>
        <div style={{marginLeft:20}}>

        <FontAwesomeIcon icon={faWifi} />
        </div>
        {/* Add more icons as needed */}
      </div>
      <p>&copy; Reliance private limited!!!</p>
            </footer>
           </div>
        </div>
       
        </>
    );
};

export default Home;