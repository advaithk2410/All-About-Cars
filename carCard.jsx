// CarCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car,email}) => {
  const imageUrl=require(`../images/${car.imageName}.jpg`);
 
 
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card">
        <img src={imageUrl} alt={car.brand} className="card-img-top" />
        <div className="card-body">
      <h2 className="card-title">{car.brand}</h2>
      <p className="card-text">Price: {car.price} Lakhs</p>
      {/* Add a link to the CarDetails component passing the car ID */}
      <Link to={`/car/${car.carId}/${email}`}>View Details</Link>
      </div>
      </div>
    </div>
  );
};

export default CarCard;
