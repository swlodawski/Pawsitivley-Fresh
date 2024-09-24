import React from 'react';
import { useQuery, gql } from '@apollo/client';  
import './Products.css';  

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      _id
      name
      description
      image
      price
      ingredients
      isDogFood
    }
  }
`;
const Products = () => {
  // Fetch products 
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  // Handle loading state
  if (loading) return <p>Loading products...</p>;

  // Handle error state
  if (error) return <p>Error loading products: {error.message}</p>;

  const products = data.products;

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img
            src={`http://localhost:3001${product.image}`}  // Fix the image path
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
