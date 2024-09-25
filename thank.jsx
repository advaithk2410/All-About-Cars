import React from 'react';
import { useParams} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const Thanks = () => {
  const {email}=useParams() 
  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/sendmail/${email}`,).then((res) => {
     
    });
  }, []);
  return (
    <div className='container text-center text-white m-5'>
      <h1>Thank You!</h1>
      <p>We recieve your payment.</p>
      <p>Thank you for using our service. We appreciate your support!.Our support person will contact you for further process.</p>
    </div>
  );
};

export default Thanks;
