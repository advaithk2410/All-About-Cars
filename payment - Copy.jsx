// src/PaymentOptions.js
import React from 'react';
import paytm from "../images/paytm.webp";
import debit from "../images/debitCard.png";
import credit from "../images/creditCard.png";
import apay from "../images/amazonPay.png"
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


const PaymentOptions = () => {
  const {email}=useParams() 
  return (
    <div className="payment-container text-white">
      <h1>Choose a Payment Option</h1>
      <div className="payment-options">
        <div className="payment-option">
        <Link to={`/thank/${email}`}>
        <img src={credit} alt="Credit Card" />
          
        </Link>
        <Link to={`/thank/${email}`}>
       
        <span>Credit Card</span>
        </Link>
        </div>
        <div className="payment-option">
        <Link to={`/thank/${email}`}>
          <img src={debit} alt="Debit Card" />
          </Link>
          <Link to={`/thank/${email}`}>
          <span>Debit Card</span>
          </Link>
        </div>
        <div className="payment-option">
        <Link to={`/thank/${email}`}>
          <img src={paytm} alt="Paytm" />
          </Link>
          <Link to={`/thank/${email}`}>
          <span>Paytm</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
