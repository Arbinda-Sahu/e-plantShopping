import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./redux/CartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Cost: ${totalCost}</h3>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100px", height: "100px" }}
            />

            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button onClick={() => handleIncrease(item)}>+</button>
              <button onClick={() => handleDecrease(item)}>-</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))
      )}

      <button style={{ marginTop: "20px", marginRight: "10px" }}>
        Continue Shopping
      </button>

      <button style={{ marginTop: "20px" }}>Checkout</button>
    </div>
  );
}

export default CartItem;
