import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber]= useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the OTP to the user's phone number
    // Here, we are simulating the OTP verification using a setTimeout function
    // Replace this with actual OTP sending logic using a server-side API
    axios.post("http://localhost:3001/sendOtp",{phoneNumber}).then((res)=>{
      if(res.data==="otp send"){
          //alert("signIn")
          setTimeout(() => {
            // Navigate to the OTP verification page after OTP is sent
            history('/verify-otp',{state: {
              email,
              phoneNumber,
              password,
              name,
              number,
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
    //     <label>Name:</label>
    //     <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
    //   </div>
    //   <div>
    //     <label>Email:</label>
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //   </div>
    //   <div>
    //     <label>Password:</label>
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    //   </div>
    //   <div>
    //     <label>Phone Number:</label>
    //     <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
    //   </div>
    //   <div>
    //     
    //      <label>Enter Adhar ID proof:</label>
    //      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
    //   <button type="submit" onClick={handleSubmit}>Sign Up</button>
    // </form>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="signIn-login-box p-4">
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="email" value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" id="email" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Enter  Adhar ID proof
            </label>
            <input type="number" className="form-control" id="number" value={number} onChange={(e) => setNumber(e.target.value)} required/>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  
  );
};

export default SignUpForm;
