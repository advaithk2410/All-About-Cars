// import React, { useState ,useEffect} from 'react';
// import axios from 'axios';

// const AdminPage = () => {
//   const [carsDetail, setCarsDetail] = useState([]);
//   function loadCars() {
    
//     axios.get("http://localhost:3001/allCars").then((res) => {
//       setCarsDetail(res.data);
//     });
//   }
  

//   const handleEdit = (id) => {
//     // Implement edit functionality
//     // You may use modals or another component to handle editing


//   };

//   const handleDelete = (id) => {
//     // Implement delete functionality
//     // Filter out the car with the specified id from the state
//     axios.post("http://localhost:3001/deleteDetail",{id:id}).then(loadCars());
//   };

//   const handleAdd = () => {
//     // Implement add functionality
//     // You may use modals or another component to handle adding a new car record
    
//   };
//   useEffect(() => {
//     loadCars();
//   });

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>SNo</th>
//             <th>Brand</th>
//             <th>ImageName</th>
//             <th>Model</th>
//             <th>Color</th>
//             <th>Price(Lakhs)</th>
//             <th>Bootspace</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {carsDetail.map((car) => (
//             <tr key={car.carId}>
//               <td>{car.brand}</td>
//               <td>{car.imageName}</td>
//               <td>{car.model}</td>
//               <td>{car.color}</td>
//               <td>{car.mileage}</td>
//               <td>{car.bootSpace}</td>
//               <td>{car.price}</td>
//               <td>
//                 <button onClick={() => handleEdit(car.carId)}>Edit</button>
//               </td>
//               <td>
//                 <button onClick={() => handleDelete(car.carId)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button onClick={handleAdd}>Add New Car</button>
//     </div>
//   );
// };

// export default ;



import { useState,useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function AdminPage() {
  const [name, setName] = useState("");
  const [mileage, setMileage] = useState(0);
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);
  const [bootspace, setBootspace] = useState(0);

  const [newPrice, setNewPrice] = useState(0);

  const [carsDetail, setCarsDetail] = useState([]);
  const {adminId}=useParams();
  const addEmployee = () => {
    if(name==="" || mileage===0||model===""|| color===""|| price===0 || bootspace===0){
      alert("fill all blanks to add car");
    }
    else{
      Axios.post("http://localhost:3001/addCar", {
      name: name,
      mileage: mileage,
      model: model,
      color: color,
      price: price,
      bootspace:bootspace
    }).then(() => {
      setCarsDetail([
        ...carsDetail,
        {
          name: name,
          mileage: mileage,
          model: model,
          color: color,
          price: price,
          bootspace:bootspace,
        },
      ]);
    });
    }
    
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/allCars").then((res) => {
      setCarsDetail(res.data);
     });
  };

  const updatePrice = (id) => {
    
    Axios.put("http://localhost:3001/updateDetail", { price: newPrice, id: id }).then(
        getEmployees());
        setNewPrice(0)
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setCarsDetail(
        carsDetail.filter((val) => {
          return val.id != id;
        })
      );
    });
  };
  useEffect(() => {
        getEmployees();
      });
  if(adminId!=="1@"){
    return<div>
      <h1>Loading....</h1>
    </div>
  }

  return (
    <div className="table-responsive">
      {/* <div className="table table-bordered table-striped"> */}
      <h2 className="text-light text-center">Cars Data</h2>
        <div className="justify-content-center">
        <tr>
          <td>
          <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="name"
        />
          </td>
        
       <td>
       <input
          type="number"
          onChange={(event) => {
            setMileage(event.target.value);
          }}
          placeholder="mileage"
        />
       </td>
        
        <td>
        <input
          type="text"
          onChange={(event) => {
            setModel(event.target.value);
          }}
          placeholder="model"
        />
       
        </td>
        {/* </tr>
        <tr> */}
        <td>
        <input
          type="text"
          onChange={(event) => {
            setColor(event.target.value);
          }}
          placeholder="color"
        />
        </td>
        <td>
        <input
          type="text"
          onChange={(event) => {
            setBootspace(event.target.value);
          }}
          placeholder="bootspace"
        />
        </td>
        <td>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          placeholder="price"
        />
        </td>
        
        </tr>
        </div>
        <div className="text-center m-2">
        <button onClick={addEmployee} className="btn btn-primary">Add Cars</button>
        </div>
        
        
      {/* </div> */}
      <div className="employees text-center">
        {/* <button onClick={getEmployees}>Show Employees</button> */}
        <div className="employee table-responsive">
              
              <table className="table table-bordered table-striped">
        <thead>
          <tr>
                <th>Name</th>
                <th>Mileage</th>
                <th>Model</th>
                <th>Color</th>
                <th>Bootspace</th>
                <th>Price</th>
                <th>Edit Price</th>
                <th>Delete</th>
                </tr>
        </thead>
        
        {carsDetail.map((val, key) => {
          return (
            
        <tbody>
          
            <tr key={val.carId}>
              <td>{val.brand}</td>
              <td>{val.mileage}</td>
              <td>{val.model}</td>
              <td>{val.color}</td>
              <td>{val.bootSpace}</td>
              <td>{val.price}</td>
              <td>  <input
                  type="text"
                  placeholder="20..."
                  onChange={(event) => {
                    setNewPrice(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updatePrice(val.carId);
                  }}
                  className="btn btn-warning"
                >
                  {" "}
                  Update
                </button></td>
                <td>
                <button
                  onClick={() => {
                    deleteEmployee(val.carId);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                </td>
            </tr>
         
        </tbody>
            );
          })}  
              </table>
            </div>
          
      </div>
    </div>
  );
}

export default AdminPage;