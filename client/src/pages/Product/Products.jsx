// src/pages/Product/Products.jsx
import React from 'react';
import './products.css';
import dogSalmon from '../../assets/seed-images/seed-images-no-background/dog-salmon-removebg-preview.png';
import catFish from '../../assets/seed-images/seed-images-no-background/cat-fish-removebg-preview.png';
import catMeat from '../../assets/seed-images/seed-images-no-background/cat-meat-removebg-preview.png';
import dogTurkey from '../../assets/seed-images/seed-images-no-background/dog-turkey-removebg-preview.png';
import dogBeef from '../../assets/seed-images/seed-images-no-background/dog-beef-removebg-preview.png';
import dogChicken from '../../assets/seed-images/seed-images-no-background/dog-chicken-removebg-preview.png';
import dogEgg from '../../assets/seed-images/seed-images-no-background/dog-egg-removebg-preview.png';
import dogSensitive from '../../assets/seed-images/seed-images-no-background/dog-sensitive-removebg-preview.png';
import dogCod from '../../assets/seed-images/seed-images-no-background/dog-cod-removebg-preview.png';
import dogLamb from '../../assets/seed-images/seed-images-no-background/dog-lamb-removebg-preview.png';
import catCravings from '../../assets/seed-images/seed-images-no-background/cat-cravings-removebg-preview.png';
import clawsome from '../../assets/seed-images/seed-images-no-background/clawsome-removebg-preview.png';




const products = [
  {
    name: 'Salmon in the City',
    description:
      'Fit for a king! This is a delicious blend of wholesome ingredients including wild-caught salmon, brown rice, and our special blend of vitamins and minerals.',
    image: dogSalmon,
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
    image: catFish,
    price: 25.99,
    ingredients: ['Salmon', 'Cod', 'Egg', 'Fish Broth', 'Vitamin Blend'],
    isDogFood: false,
  },
  {
    name: 'Meat Madness',
    description: 'MMMMeaty! Have your cat salivating over this tantalzing mix of meats and eggs to give them all the energy and nutrition they need to keep playing all day long.',
    image: catMeat,
    price: 25.99,
    ingredients: ['Chicken', 'Beef', 'Chicken Broth', 'Liver', 'Vitamin Blend'],
    isDogFood: false
},
{
    name: 'Gobble-n-Go',
    description: 'Thanksgiving meal in a bowl! This yummy meal is perfect for a hungry pup who loves turkey and veggies. Green beans and squash provide lots of vitamins and antioxidants to support their bodies for growth and longevity.',
    image: dogTurkey,
    price: 25.99,
    ingredients: ['Turkey', 'Chicken Broth', 'Potato', 'Green Beans', 'Butternut Squash', 'Vitamin Blend'],
    isDogFood: true
},
{
    name: 'You Better Beef-lieve It',
    description: 'Calling all beefcakes! This food has all the important ingredients for your fur baby to thrive. A classic meal made from beef is a crown pleaser.',
    image: dogBeef,
    price: 27.99,
    ingredients: ['Beef', 'Bone broth', 'Corn', 'Carrots', 'Zucchini', 'Vitamin Blend'], 
    isDogFood: true
},
{
    name: 'Chunky Chicken',
    description: 'Keeping it classic! Our most basic and popular food offers all the nutrition your pet needs. Our chicken blend is loved by every pet who tried it.',
    image: dogChicken,
    price: 25.99,
    ingredients: ['Chicken', 'Carrots', 'Peas', 'Brown Rice', 'Vitamin Blend'],
    isDogFood: true
},
{
    name: 'Eggselent Blend',
    description: 'Breakfast any time of day! Eggs are a wonderful to provide healthy fats and protein for a shiny coat and healhy skin.',
    image: dogEgg,
    price: 27.99,
    ingredients: ['Eggs', 'Bacon','Bone Broth', 'Sweet Potato', 'Zucchini', 'Vitamin Blend'],
    isDogFood: true
},
{
    name: 'Sensitive Tummies',
    description: 'This is a special blend for our most sensitive furry friends. Sensitive tummies is a gentle blend of easy to tolerate ingredients which are good for when your pet is feeling under the weather or those with chronic digestive issues.',
    image: dogSensitive,
    price: 32.99,
    ingredients: ['White Rice', 'Vegetable Broth', 'Pumpkin', 'Sweet Potato', 'Chicken','Vitamin Blend'],
    isDogFood: true
},
{
    name: 'I Cod Believe It',
    description: 'It is ofFISHal, this food is tasty! For your pet who is a seafood fiend. No meat found in this blend, for any pets with meat or poultry allergies.',
    image: dogCod,
    price: 28.99,
    ingredients: ['Cod', 'Fish Broth', 'Peas', 'Potato','Vitamin Blend'],
    isDogFood: true
},
{
    name: 'Grand sLAMB',
    description: 'Nothing BAAAAAD here! If your pet is a lamb lover, they will clean their plate with this food. Veggies and brown rice round out a balanced meal perfect for even the choosiest pooch.',
    image: dogLamb,
    price: 27.99,
    ingredients: ['Lamb', 'Bone Broth', 'Peas', 'Carrot', 'Brown Rice', 'Vitamin Blend'],
    isDogFood: true
},
{
  name: 'Cat-astrophic Cravings',
  description: 'Your felines new favorite is here! Cat-astrophic Cravings delivers a delicious seafood experience that’s perfect for picky eaters. Packed with flavor and nutrients, this fishy feast is crafted for cats with a love for the ocean. Say goodbye to mealtime drama—this blend will have your kitty diving in for seconds!',
  image: catCravings,
  price: 25.99,
  ingredients: ['Cod', 'Anchovy Oil', 'Pumpkin', 'Spinach','Vitamin Blend'],
  isDogFood: false
},
{
  name: 'Claw-some Cuisine',
  description: 'Dive into deliciousness with Claw-some Cuisine! This purr-fectly crafted seafood blend is designed for your feline friend who loves all things aquatic. Packed with flavors and nutrients, this recipe ensures your kitty enjoys every bite while supporting their health and well-being. No poultry here—just pure fishy goodness for the discerning palate!',
  image: clawsome,
  price: 25.99,
  ingredients: ['Salmon', 'Fish Broth', 'Sweet Potato', 'Carrots', 'Blueberries','Vitamin Blend'],
  isDogFood: false
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

