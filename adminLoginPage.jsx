import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminLoginPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // // You can perform authentication or API calls here based on the email and password values.
    // // For this example, we'll just log the values to the console.
    // console.log('Email:', email);
    // console.log('Password:', password);

    if((email==="crazyCoder@gmail.com" && password==="heyCars@") || (email==="admincars@gmail.com" && password==="heyAdmin@")){
          navigate("/admin/1@")
    }
    else{
          navigate("/product") 
    }
          
      
     
  };
    return <div>
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="signIn-login-box p-4">
      <h2 className="text-center mb-4">Admin Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" value={password}  onChange={handlePasswordChange} required/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
}
export default AdminLoginPage;