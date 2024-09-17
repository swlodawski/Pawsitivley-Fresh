const mongoose = require('mongoose');
const db = require('../config/connection');
const User = require('../models/User');
const Pet = require('../models/Pet');
const Food = require('../models/Food');
const Order = require('../models/Order');
const Product = require('../models/Product');

const cleanDB = async () => {
  try {
    // Connecting to db
    await db;

    // List of collection names to drop
    const collections = [
      'users',    // Collection for User model
      'pets',     // Collection for Pet model
      'foods',    // Collection for Food model
      'orders',   // Collection for Order model
      'products'  // Collection for Product model
    ];

    // Drop each collection if it exists
    for (const collection of collections) {
      const collectionExists = await mongoose.connection.db.listCollections({ name: collection }).toArray();
      if (collectionExists.length) {
        await mongoose.connection.db.dropCollection(collection);
        console.log(`Dropped collection: ${collection}`);
      }
    }

    console.log('Database cleaned!');
    process.exit(0); // Exit the process after cleaning
  } catch (err) {
    console.error('Error cleaning database:', err);
    process.exit(1); // Exit with an error code
  }
};

cleanDB(); 
