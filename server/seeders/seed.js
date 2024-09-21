const db = require('../config/connection');
const { User, Pet, Product } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('Product', 'products');
    await cleanDB('Pet', 'pets');
    await cleanDB('User','users');

const products = await Product.insertMany([
    {
        name: 'Salmon in the City',
        description: 'Fit for a king! This is a delicious blend of wholesome ingredients including wild caught salmon, brown rice and our special blend of vitamins and minerals. Carrots and Sweet potato provide lots of vitamin A to support eye and skin health.',
        image: './seed-images/dog-salmon',
        price: 29.99,
        ingredients: ['Salmon', 'Sweet potato', 'Butternut Squash', 'Brown Rice', 'Fish Broth', 'Vitamin Blend'],
        isDogFood: true
    },
    {
        name: 'Fish Frenzy',
        description: 'Your pet will flip! This blend is great for fish loving felines looking for a tasty meal with lots of protein. Give it a try for your furry friend and watch them chow down.',
        image: './seed-images/cat-fish',
        price: 25.99,
        ingredients: ['Salmon', 'Cod', 'Egg', 'Fish Broth', 'Vitamin Blend'],
        isDogFood: false
    },
    {
        name: 'Meat Madness',
        description: 'MMMMeaty! Have your cat salivating over this tantalzing mix of meats and eggs to give them all the energy and nutrition they need to keep playing all day long.',
        image: './seed-images/cat-meat',
        price: 25.99,
        ingredients: ['Chicken', 'Beef', 'Chicken Broth', 'Liver', 'Vitamin Blend'],
        isDogFood: false
    },
    {
        name: 'Gobble-n-Go',
        description: 'Thanksgiving meal in a bowl! This yummy meal is perfect for a hungry pup who loves turkey and veggies. Green beans and squash provide lots of vitamins and antioxidants to support their bodies for growth and longevity.',
        image: './seed-images/dog-turkey',
        price: 25.99,
        ingredients: ['Turkey', 'Chicken Broth', 'Potato', 'Green Beans', 'Butternut Squash', 'Vitamin Blend'],
        isDogFood: true
    },
    {
        name: 'You Better Beef-lieve It',
        description: 'Calling all beefcakes! This food has all the important ingredients for your fur baby to thrive. A classic meal made from beef is a crown pleaser.',
        image: './seed-images/dog-beef',
        price: 27.99,
        ingredients: ['Beef', 'Bone broth', 'Corn', 'Carrots', 'Zucchini', 'Vitamin Blend'], 
        isDogFood: true
    },
    {
        name: 'Chunky Chicken',
        description: 'Keeping it classic! Our most basic and popular food offers all the nutrition your pet needs. Our chicken blend is loved by every pet who tried it.',
        image: './seed-images/dog-chicken',
        price: 25.99,
        ingredients: ['Chicken', 'Carrots', 'Peas', 'Brown Rice', 'Vitamin Blend'],
        isDogFood: true
    },
    {
        name: 'Eggselent Blend',
        description: 'Breakfast any time of day! Eggs are a wonderful to provide healthy fats and protein for a shiny coat and healhy skin.',
        image: './seed-images/dog-egg',
        price: 27.99,
        ingredients: ['Eggs', 'Bacon','Bone Broth', 'Sweet Potato', 'Zucchini', 'Vitamin Blend'],
        isDogFood: true
    },
    {
        name: 'Sensitive Tummies',
        description: 'This is a special blend for our most sensitive furry friends. Sensitive tummies is a gentle blend of easy to tolerate ingredients which are good for when your pet is feeling under the weather or those with chronic digestive issues.',
        image: './seed-images/dog-sensitive',
        price: 32.99,
        ingredients: ['White Rice', 'Vegetable Broth', 'Pumpkin', 'Sweet Potato', 'Chicken','Vitamin Blend'],
        isDogFood: true
    },
    {
        name: 'I Cod Believe It',
        description: 'It is ofFISHal, this food is tasty! For your pet who is a seafood fiend. No meat found in this blend, for any pets with meat or poultry allergies.',
        image: './seed-images/dog-cod',
        price: 28.99,
        ingredients: ['Cod', 'Fish Broth', 'Peas', 'Potato','Vitamin Blend'],
        isDogFood: true
    },
    {
        name: 'Grand sLAMB',
        description: 'Nothing BAAAAAD here! If your pet is a lamb lover, they will clean their plate with this food. Veggies and brown rice round out a balanced meal perfect for even the choosiest pooch.',
        image: './seed-images/dog-lamb',
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
      }


]);

console.log('Products successfully seeded!', products);

const pets = await Pet.insertMany([
    {
        animal: 'Dog',
        name: 'Auggie',
        size: 'Large',
        allergies: ['Turkey', 'Chicken']
    },

    {
        animal: 'Cat',
        name: 'Oliver',
        size: 'Small',
        allergies: ['Soy']
    },

    {
        animal: 'Dog',
        name: 'Lucy',
        size: 'Medium',
        allergies: ['None']
    },
]);

console.log("Pets successfuly seeded!", pets);

await User.create({
    username: 'petlover24',
    password: 'furbaby123',
    email: 'petlover24@gmail.com',
    pets: [
        {
            animal: 'Dog',
            name: 'Auggie',
            size: 'Large',
            allergies: ['Turkey', 'Chicken']
        }
    ]

});

console.log("User successfully seeded!");

console.log("All data inserted");

process.exit();

    
});