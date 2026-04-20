import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Indoor Plants",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 12,
    category: "Indoor Plants",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Rose",
    price: 20,
    category: "Flowering Plants",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Tulip",
    price: 18,
    category: "Flowering Plants",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Lavender",
    price: 14,
    category: "Flowering Plants",
    image: "https://via.placeholder.com/150",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div style={{ padding: "20px" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#2d6a4f",
          color: "white",
          padding: "15px",
          marginBottom: "20px",
        }}
      >
        <h2>Paradise Nursery</h2>
        <div>
          Cart Items: {totalCartItems}
        </div>
      </nav>

      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "30px" }}>
          <h2>{category}</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    width: "200px",
                    padding: "15px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />

                  <h3>{plant.name}</h3>
                  <p>Price: ${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    style={{
                      background: "#40916c",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
