// src/pages/Product/Products.jsx
import React from 'react';
import './products.css';
// import dogSalmon from "../../../../../../dog-salmon.jpg";
// import catFish from "../../../../../../cat-fish.jpg";

const products = [
  {
    name: 'Salmon in the City',
    description:
      'Fit for a king! This is a delicious blend of wholesome ingredients including wild-caught salmon, brown rice, and our special blend of vitamins and minerals.',
    // image: dogSalmon,
    price: 29.99,
    ingredients: [
      'Salmon',
      'Sweet Potato',
      'Butternut Squash',
      'Brown Rice',
      'Fish Broth',
      'Vitamin Blend',
    ],
    isDogFood: true,
  },
  {
    name: 'Fish Frenzy',
    description:
      'Your pet will flip! This blend is great for fish-loving felines looking for a tasty meal with lots of protein.',
    // image: catFish,
    price: 25.99,
    ingredients: ['Salmon', 'Cod', 'Egg', 'Fish Broth', 'Vitamin Blend'],
    isDogFood: false,
  },

];

const Products = () => {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h2>{product.name}</h2>
          <p className="description">{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="ingredients">
            <strong>Ingredients:</strong> {product.ingredients.join(', ')}
          </p>
          <p className="category">
            {product.isDogFood ? 'Dog Food' : 'Cat Food'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;

