import React from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
const LoanSchemes = () => {
  const {email}=useParams() 
  const loanSchemes = [
    {
      id: 1,
      name: 'Scheme 1',
      interestRate: '5%',
      maxAmount: '₹10,000',
    },
      {
        id: 2,
        name: 'Scheme 2',
        interestRate: '5%',
        maxAmount: '₹10,000',
      },
      {
        id: 3,
        name: 'Scheme 3',
        interestRate: '7%',
        maxAmount: '₹30,000',
      },
      {
        id: 4,
        name: 'Scheme 4',
        interestRate: '6%',
        maxAmount: '₹40,000',
      },
      {
        id: 5,
        name: 'Scheme 5',
        interestRate: '5%',
        maxAmount: '₹50,000',
      },
      {
        id: 6,
        name: 'Scheme 6',
        interestRate: '8%',
        maxAmount: '₹60,000',
      },
    // Add four more loan schemes with similar data
  ];
  if(email===""){
    return<div>
      Loading....
    </div>
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-white">Loan Schemes</h2>
      <div className="row">
        {loanSchemes.map((scheme) => (
          <div key={scheme.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{scheme.name}</h5>
                <p className="card-text">Interest Rate: {scheme.interestRate}</p>
                <p className="card-text">Maximum Amount: {scheme.maxAmount}</p>
                <Link to={`/loanquery/${email}`}><button type="button" className="btn btn-primary mr-2 m-2">
                  Try Scheme
                </button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanSchemes;
