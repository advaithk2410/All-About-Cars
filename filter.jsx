import React, { useState } from 'react';

const FilterBar = ({ onFilter,removeFilter }) => {
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');

  const handleFilter = () => {
    // Call the onFilter prop passing the current price and brand values
    onFilter(price, brand);
  };
  const RemoveFilter=()=>{
    removeFilter();
  }

  return (
    <div className='text-center text-light p-2'>
      <label>
        Price:
        <input type="number" className='m-1' value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Brand:
        <input type="text" className='m-1' value={brand} onChange={(e) => setBrand(e.target.value)} />
      </label>
      <button onClick={handleFilter} className='btn btn-primary m-1'>Apply Filter</button>
      <button onClick={RemoveFilter} className='btn btn-primary m-1'>Remove Filter</button>
    </div>
  );
};

export default FilterBar;
