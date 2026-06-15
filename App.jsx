import React, { useState } from 'react';
import './App.css';
import ProductList from './Components/ProductList'; // Adjust path if necessary

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleStart = () => {
    setShowProductList(true);
  };

  return (
    <div className="App">
      {!showProductList ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Where your green dreams come to life.</p>
          <button className="get-started-btn" onClick={handleStart}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
