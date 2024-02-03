import React, { useState } from 'react';

const ProductList = () => {
  const initialProducts = [
    { name: 'Banana', price: 1.99 },
    { name: 'Apple', price: 0.99 },
    { name: 'Cherry', price: 2.49 },
    // ... more products
  ];

  const [products, setProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState('name'); // Default sorting option

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortBy(selectedOption);

    if (selectedOption === 'name') {
      // Sort by name
      const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
      setProducts(sortedProducts);
    } else if (selectedOption === 'price') {
      // Sort by price
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    }
  };

  return (
    <div>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
      <div id="resultContainer">
        {products.map((product, index) => (
          <div key={index}>
            Name: {product.name}, Price: ${product.price.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
