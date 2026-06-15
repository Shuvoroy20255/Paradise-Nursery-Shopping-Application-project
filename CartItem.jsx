import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice'; // Adjust path if necessary

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all plants in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  // Calculate individual subtotal cost for a specific plant type
  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  const handleCheckoutShopping = (e) => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#4CAF50' }}>Shopping Cart</h2>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h3>
      
      <div>
        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
        ) : (
          cartItems.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '15px 0' }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} />
              
              <div style={{ flex: '1', marginLeft: '20px' }}>
                <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                <p style={{ margin: '0', color: '#555' }}>Unit Price: ${item.price}</p>
                <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>Subtotal: ${calculateTotalCost(item)}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => handleDecrement(item)} style={{ padding: '2px 8px', cursor: 'pointer' }}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)} style={{ padding: '2px 8px', cursor: 'pointer' }}>+</button>
              </div>

              <button 
                onClick={() => handleRemove(item.name)} 
                style={{ marginLeft: '20px', padding: '5px 10px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <button 
          onClick={onContinueShopping} 
          style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Continue Shopping
        </button>
        <button 
          onClick={handleCheckoutShopping} 
          style={{ padding: '10px 20px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
