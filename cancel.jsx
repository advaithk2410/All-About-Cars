import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CancelOrder = () => {
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
 
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios.post("http://localhost:3001/CancleOrder",{model}).then((res)=>{
      if(res.data==="Enter model and band"){
          //alert("signIn")
          setTimeout(() => {
            // Navigate to the OTP verification page after OTP is sent
            history('/verify-otp',{state: {
             model,
             brand,
            }});
          }, 2000);
      }
      else{
          alert(res.data)
      }
     })
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>Model:</label>
    //     <input type="text" value={model} onChange={(e) => setName(e.target.value)} required />
    //   </div>
    //   <div>
    //     <label>Brand:</label>
    //     <input type="email" value={brand} onChange={(e) => setEmail(e.target.value)} required />
    //   </div>
    //   
    //   
    // </form>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="signIn-login-box p-4">
        <h2 className="text-center mb-4">Cancle Order</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="model" className="form-label">
              Model
            </label>
            <input type="text" className="form-control" id="email" value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">
              Brand
            </label>
           </div>
          <div className="text-left">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              
              CancleOrder
            </button>
          </div>
        </form>
      </div>
    </div>
  
  );
};

export default CancleOrder;
