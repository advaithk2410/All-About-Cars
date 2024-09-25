import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../images/bgImage.jpg"

function Home(){

    return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage:`url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center text-white">
        <h1>Welcome to All About Car's</h1>
        
        <div className="mt-4">
    
          
          <Link to="/signup"><button type="button" className="btn btn-primary mr-2 m-2">
            Sign Up
          </button></Link>
        <Link to="/signin"><button type="button" className="btn btn-primary mr-2 m-2">
            Sign In
          </button></Link>
         
       
      
        </div>
      </div>
    </div>
  )        
}
export default Home;