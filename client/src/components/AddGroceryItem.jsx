import React, { useState } from 'react';

const AddGroceryItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/grocery/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: itemName,
          quantity: itemQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add item');
      }

      setItemName('');
      setItemQuantity('');
      setErrorMessage('');
      
      const data = await response.json();
      console.log(data); // Handle success messages
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage('Failed to add item. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Grocery Item</h2>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="itemName" className="form-label">Item Name</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="itemQuantity" className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="itemQuantity"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default AddGroceryItem;
