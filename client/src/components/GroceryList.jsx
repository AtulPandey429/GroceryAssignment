import React, { useState, useEffect } from 'react';

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/grocery/list');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setGroceries(data);
      setError('');
    } catch (error) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on initial render

  const handleRefresh = () => {
    setLoading(true);
    fetchData(); // Manually trigger fetching data
  };

  return (
    <div className="container mt-4">
      <h2>Grocery List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <>
          <button className="btn btn-sm btn-primary mb-3" onClick={handleRefresh}>
            Refresh
          </button>
          <div className="row">
            {groceries.map((item) => (
              <div key={item._id} className="col-md-4 mb-4">
                <div className="card">
                 
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GroceryList;
