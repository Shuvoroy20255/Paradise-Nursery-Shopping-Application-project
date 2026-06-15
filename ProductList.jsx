import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice'; // Adjust this path if CartSlice is in the same folder

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Grouped plant data (3 categories, 6 plants each)
  const categories = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=200" },
        { name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=200" },
        { name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=200" },
        { name: "Boston Fern", price: 22, image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=200" },
        { name: "Aloe Vera", price: 10, image: "https://images.unsplash.com/photo-1596547610141-9eb0607994cc?w=200" },
        { name: "English Ivy", price: 14, image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=200" }
      ]
    },
    {
      category: "Aromatic Plants",
      plants: [
        { name: "Lavender", price: 20, image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=200" },
        { name: "Rosemary", price: 12, image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?w=200" },
        { name: "Mint", price: 8, image: "https://images.unsplash.com/photo-1603013631023-fb91b409748b?w=200" },
        { name: "Basil", price: 9, image: "https://images.unsplash.com/photo-1618173746638-54cc83631fb2?w=200" },
        { name: "Jasmine", price: 25, image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=200" },
        { name: "Thyme", price: 11, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200" }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "ZZ Plant", price: 24, image: "https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4?w=200" },
        { name: "Pothos", price: 13, image: "https://images.unsplash.com/photo-1596547613725-be96489445ee?w=200" },
        { name: "Cast Iron Plant", price: 28, image: "https://images.unsplash.com/photo-1597055181300-e3633a207518?w=200" },
        { name: "Jade Plant", price: 16, image: "https://images.unsplash.com/photo-1598880940375-4a55ec256191?w=200" },
        { name: "Chinese Evergreen", price: 21, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200" },
        { name: "Succulent", price: 7, image: "https://images.unsplash.com/photo-1509423424749-37362a3943b4?w=200" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="product-list-container">
      {/* Navbar Section */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', background: '#4CAF50', color: 'white' }}>
        <div><h2>Paradise Nursery</h2></div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Plants</a>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            🛒 <span style={{ background: 'red', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' }}>{totalCartItems}</span>
          </div>
        </div>
      </nav>

      {/* Plant Grid Display */}
      <div style={{ padding: '20px' }}>
        {categories.map((cat, idx) => (
          <div key={idx} style={{ marginBottom: '40px' }}>
            <h2 style={{ borderBottom: '2px solid #4CAF50', paddingBottom: '10px' }}>{cat.category}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
              {cat.plants.map((plant, pIdx) => {
                const isAlreadyInCart = cartItems.some(item => item.name === plant.name);
                return (
                  <div key={pIdx} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
                    <h3 style={{ margin: '10px 0 5px' }}>{plant.name}</h3>
                    <p style={{ fontWeight: 'bold', color: '#555' }}>${plant.price}</p>
                    <button 
                      onClick={() => handleAddToCart(plant)} 
                      disabled={isAlreadyInCart}
                      style={{
                        padding: '8px 15px',
                        backgroundColor: isAlreadyInCart ? '#ccc' : '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isAlreadyInCart ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isAlreadyInCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
