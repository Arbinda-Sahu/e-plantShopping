import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    category: "Indoor Plants",
    price: 10,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 15,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 20,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Tulsi",
    category: "Medicinal Plants",
    price: 12,
    image: "https://via.placeholder.com/150"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const groupedProducts = products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <h1>Paradise Nursery Products</h1>

      {Object.keys(groupedProducts).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "20px"
            }}
          >
            {groupedProducts[category].map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "200px",
                  textAlign: "center"
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "150px" }}
                />
                <h3>{product.name}</h3>
                <p>${product.price}</p>

                <button onClick={() => handleAddToCart(product)}>
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
