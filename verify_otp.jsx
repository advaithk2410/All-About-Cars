import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const history = useNavigate();
  const location = useLocation();
  const { email, phoneNumber,password,name} = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/verifyOtp",{
        otp:otp,
       }).then((res1)=>{
        if(res1.data==="verified"){
            axios.post("http://localhost:3001/register",{
              Email:email,
              PhoneNo:phoneNumber,
              pwd:password,
              name:name,
            }).then((res2)=>{
              if(res2.data==="success"){
                alert("regiter successfully");
                history('/product',{state: {
                  email,
                  phoneNumber,
                  name,
                }});
              }
              else{
                alert("unable to register");
              }
            })
            
        }
        else{
            alert(res1.data)
            history('/signup');
        }
       })
    // Add OTP verification logic here
    // Compare the user-provided OTP with the one sent to the user's phone number

    // For this example, let's assume OTP verification is successful
    // In a real application, you would handle this on the server-side
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <p>An OTP has been sent to your phone number: {phoneNumber}</p>
    //   <div>
    //     <label>Enter OTP:</label>
    //     <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
    //   </div>
    //   <button type="submit" onClick={handleSubmit}>Verify OTP</button>
    // </form>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="signIn-login-box p-4">
        <h4 className="text-center mb-4">An OTP has been sent to your phone number: {phoneNumber}</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
            Enter OTP:
            </label>
            <input type="password" className="form-control" id="password" value={otp} onChange={(e) => setOtp(e.target.value)} required/>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  
  );
};

export default VerifyOTP;
