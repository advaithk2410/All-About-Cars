import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const LoanQuery = () => {
  const {email}=useParams() 
  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/sendmail/${email}`,).then((res) => {
     //alert(res)
    });
  }, []);
  return (
    <div className='container text-center text-white m-5'>
      <h1>Thank You!</h1>
      <p>We recieve your request.</p>
      <p>We appreciate your support!.Our support person will contact you for further loan process.</p>
    </div>
  );
};

export default LoanQuery;