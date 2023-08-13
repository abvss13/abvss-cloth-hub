import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function ClothsApp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="cloths-app">
      <header className="app-header">
        <h1 className="app-title">Abvss Cloths App</h1>
      </header>
      <main className="product-container">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <ul className="product-list">
            {products.map(product => (
              <li key={product.id} className="product-card">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} alt={product.title} />
                </div>
                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">${product.price}</p>
                  <p className="product-category">Category: {product.category}</p>
                  <p className="product-description">{product.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Abvss Cloths App</p>
      </footer>
    </div>
  );
}

export default ClothsApp;
