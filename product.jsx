import React, { useState, useEffect } from 'react';
import axios from "axios";
import CarCard from './carCard';
import { useLocation ,Link} from 'react-router-dom';
import FilterBar from './filter';

const Product = () => {
  const [cars, setCars] = useState([]);
  const location = useLocation();
  const { email, phoneNumber,name} = location.state || {};
  const loadCars=() => {
    axios.get("http://localhost:3001/allCars").then((res) => {
      setCars(res.data);
    });
  }
  useEffect(loadCars, []);
 

  const handleFilter = (price, brand) => {
    // Filter the cars based on price and brand inputs
    let filteredResults = cars;
    if (price !== '') {
      filteredResults = filteredResults.filter((car) => car.price <= parseInt(price));
    }
    if (brand !== '') {
      filteredResults = filteredResults.filter((car) =>
        car.brand.toLowerCase().includes(brand.toLowerCase())
      );
    }
    setCars(filteredResults);
  };
  const onRemoveFilter=()=>{
    loadCars()
  }

  if(email===undefined && phoneNumber===undefined){
    return <div className='text-center text-light'>
      <p>Please sign up to view the content..</p>
      <Link to="/">
            Sign Up
          </Link>
    </div>
  }
  return (
    <div className="container mt-4">
      <h3 className="text-center text-white">Welcome to the world of cars {email.split('@')[0]}</h3>
      <FilterBar onFilter={handleFilter} removeFilter={onRemoveFilter}/>
      <div className="row">
        {cars.map((car) => (
          <CarCard key={car.carId} car={car} email={email}/>
        ))}
      </div>
    </div>
  );
};

export default Product;
