// CarDetails.js
import React from 'react';
import { useParams } from 'react-router-dom'; // If using React Router
import { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import interior1 from "../images/interior1.jpg";
import interior2 from "../images/interior2.jpg";
const CarDetails = () => {
  const { id } = useParams();
  const {email}=useParams() // If using React Router to get the car ID
  // Fetch car details using the carId and display them
  const [currentCar, setCurrentCar] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:3001/fetchCar/${id}`).then((res) => {
      setCurrentCar(res.data);
    });
  }, []);

  if (!currentCar || currentCar.length === 0) {
    return <div>Loading...</div>;
  }
  const imageUrl = require(`../images/${currentCar[0].imageName}.jpg`);
  return (
    <div className='text-white'>
      <h1 className='text-center'>Check your car..</h1>
      <Container>
        <Row>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imageUrl}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={interior1}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={interior2}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <div>
              <h4>{currentCar[0].brand}</h4>
              <ul>
                <li>Price: {currentCar[0].price} lakhs</li>
                <li>Mileage: {currentCar[0].mileage}</li>
                <li>Bootspace: {currentCar[0].bootSpace} litres</li>
                <li>Color: {currentCar[0].color}</li>
                <li>Accesories</li>
                <div>
                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something"/>
      <label class="form-check-label" for="check2">Cars Wiper</label>
                </div>
          <div>
          <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something"/>
      <label class="form-check-label" for="check2">Cars Covers</label></div>      
      <div>
      <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something"/>
      <label class="form-check-label" for="check2">Smart Car Sterio</label>
      </div>
     <div>
     <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something"/>
      <label class="form-check-label" for="check2">Interior Chrome</label>
     </div>
      <div>
      <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something"/>
      <label class="form-check-label" for="check2">Puncture Repair Kit</label>
      </div>
      
              </ul>
              <div className="mt-4">


                <Link to={`/payment/${email}`}><button type="button" className="btn btn-primary mr-2 m-2">
                  Buy Now
                </button></Link>
                <Link to={`/loandetail/${email}`}><button type="button" className="btn btn-primary mr-2 m-2">
                  Check Loan Offers
                </button></Link>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarDetails;
