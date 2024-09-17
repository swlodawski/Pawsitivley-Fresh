const mongoose = require('mongoose');
const db = require('../config/connection'); // Adjust the path as needed

// Importing models
const User = require('../models/User');
const Pet = require('../models/Pet');
const Food = require('../models/Food');
const Order = require('../models/Order');
const Product = require('../models/Product');

const cleanDB = async () => {
  try {
    // Connect to the database
    await db;

    // Drop all collections
    await Promise.all([
      User.deleteMany({}), //Deleting documents in the user collection
      Pet.deleteMany({}), //deleting documents in the pet collection
      Food.deleteMany({}), //Deleting documents in the Food collection
      Order.deleteMany({}), //Deleting documents in the Order collection
      Product.deleteMany({}), //Deleting all documents in the Product collection
    ]);

    console.log('Database cleaned!');
    process.exit(0);
  } catch (err) {
    console.error('Error cleaning database:', err);
    process.exit(1); 
  }
};

cleanDB();
