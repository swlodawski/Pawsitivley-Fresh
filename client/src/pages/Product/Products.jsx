import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import './Products.css';

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

  const [selectedPetId, setSelectedPetId] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Handle loading state
  if (loadProducts) return <p>Loading...</p>;

  // Handle error state
  if (errorProducts) {
    console.error("Error loading products:", errorProducts);
    return <p>Error loading products: {errorProducts.message}</p>;
  }

  const products = dataProducts.products;

  const { data: petProductsData } = useQuery(GET_PRODUCTS_SELECTED_PET, {
    variables: { petId: selectedPetId },
    skip: !selectedPetId,
  });

  useEffect(() => {
    if (selectedPetId && petProductsData) {
      setFilteredProducts(petProductsData.productsForPet);
    } else {
      setFilteredProducts(products);
    }
  }, [petProductsData, products, selectedPetId]);

  // Get the selected pet
  const selectedPet = pets.find((pet) => pet._id === selectedPetId);

  // Filter products based on selected pet and allergies
  const displayedProducts = filteredProducts.filter((product) => {
    const hasAllergy = pets[selectedPetId]?.allergies.some((allergy) =>
      product.ingredients.includes(allergy)
    );

    const isDog = selectedPet?.animal === "Dog";
    const isCat = selectedPet?.animal === "Cat";
    const isMatchingProduct = isDog ? product.isDogFood : (isCat ? !product.isDogFood : true);

    return !hasAllergy && isMatchingProduct;
  });

  return (
    <>
      <div className="page-container">
        <div className="select-pet-container">
          <h2 id='select-pet-header'>I want to see Foods for:</h2>
          {pets.map((pet) => (
            <div key={pet._id}>
              <div className='radio-container'>
                <label id='pet-name-label'>
                  <input
                    type="radio"
                    value={pet._id}
                    checked={selectedPetId === pet._id}
                    onChange={() => setSelectedPetId(pet._id)}
                  />
                  {pet.name}
                </label>
              </div>
            </div>
          ))}
        </div>
        
        {selectedPetId && (
          <h2 id='pet-result-header'>
            Here are some products that match{" "}
            {selectedPet.name}'s needs:
          </h2>
        )}

        <div className="products-container">
          {displayedProducts.length === 0 ? (
            <p>No matching products found based on your pet's allergies.</p>
          ) : (
            displayedProducts.map((product) => (
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
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Products;

