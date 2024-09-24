import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import "./products.css";
// Query to get all the products in seed data
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
// Query to get all products for the selected pet
const GET_PRODUCTS_SELECTED_PET = gql`
  query GetProductsForPet($petId: ID!) {
    productsForPet(petId: $petId) {
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
// Hard-coded pets data
const pets = [
  {
    _id: "0", 
    animal: "Dog",
    name: "Auggie",
    size: "Large",
    allergies: ["Turkey", "Chicken", "Chicken Broth", "Bone Broth"],
  },
  {
    _id: "1", 
    animal: "Cat",
    name: "Oliver",
    size: "Small",
    allergies: ["Eggs"],
  },
  {
    _id: "2", 
    animal: "Dog",
    name: "Lucy",
    size: "Medium",
    allergies: ["Vitamin Blend"],
  },
];
// Logic to render all desired products for the page
const Products = () => {
  // Fetch products
  const {
    loading: loadProducts,
    error: errorProducts,
    data: dataProducts,
  } = useQuery(GET_PRODUCTS);
  // Set it so initially no pet is selected until the radio is selected ie: null
  const [selectedPetId, setSelectedPetId] = useState("");
  // Set initial array of filtered products to empty array which is updated when selected pet queries run
  const [filteredProducts, setFilteredProducts] = useState([]);
  // Handle loading state
  if (loadProducts) return <p>Loading...</p>;
  // Handle error state
  if (errorProducts) {
    console.error("Error loading products:", errorProducts);
    return <p>Error loading products: {errorProducts.message}</p>;
  }
  // Instantiate new variable to represent all products
  const products = dataProducts.products;
  // Call query to get products only for the selected pet
  const { data: petProductsData } = useQuery(GET_PRODUCTS_SELECTED_PET, {
    variables: { petId: selectedPetId },
  });
  // Use effect hook to update the filtered set of products when changes made (like if selecting a different pet)
  // useEffect(() => {
  //   if (selectedPetId && petProductsData) {
  //     setFilteredProducts(petProductsData.productsForPet);
  //   } else {
  //     setFilteredProducts(products);
  //   }
  // }, [petProductsData, products, selectedPetId]);
  console.log(products);
  console.log(pets);
  return (
    <>
      <div className="select-pet-container">
        <h2>I want to see Foods for:</h2>
        {pets.map((pet) => (
          <div key={pet._id}>
            <label>
              <input
                type="radio"
                value={pet._id}
                checked={selectedPetId === pet._id}
                onChange={() => setSelectedPetId(pet._id)}
              />
              {pet.name}
            </label>
          </div>
        ))}
        {selectedPetId && (
          <h2>
            Here are some products that match{" "}
            {pets.find((pet) => pet._id === selectedPetId).name}'s needs:
          </h2>
        )}
        <div className="products-container">
          {products.length === 0 ? (
            <p>No matching products found based on your pet's allergies.</p>
          ) : (
            products.map((product) => {
              if (!selectedPetId) {
                return;
              }
              return pets[selectedPetId].allergies.some((allergies) =>
                product.ingredients.includes(allergies)
              ) ? null : (
                <div key={product._id} className="product-card">
                  <img
                    src={`../../src/assets/seed-images/${product.image}`} 
                    alt={product.name}
                    className="product-image"
                  />
                  <h2>{product.name}</h2>
                  <p className="description">{product.description}</p>
                  <p className="price">${product.price.toFixed(2)}</p>
                  <p className="ingredients">
                    <strong>Ingredients:</strong>{" "}
                    {product.ingredients.join(", ")}
                  </p>
                  <p className="category">
                    {product.isDogFood ? "Dog Food" : "Cat Food"}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Products;

