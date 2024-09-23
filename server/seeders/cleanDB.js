const mongoose = require('mongoose');
const dbConnection = require('../config/connection');
const User = require('../models/User');
const Pet = require('../models/Pet');
const Order = require('../models/Order');
const Product = require('../models/Product');

const cleanDB = async () => {
  try {
    // Ensure the database connection is established
    await new Promise((resolve, reject) => {
      if (mongoose.connection.readyState === 1) {
        // Connection is already open
        resolve();
      } else {
        mongoose.connection.on('error', (err) => {
          console.error('MongoDB connection error:', err);
          reject(err);
        });
        mongoose.connection.once('open', () => {
          console.log('MongoDB connected');
          resolve();
        });
      }
    });

    // Now mongoose.connection.db should be available
    const db = mongoose.connection.db;

    // List of collection names to drop
    const collections = [
      'users',    // Collection for User model
      'pets',     // Collection for Pet model
      'orders',   // Collection for Order model
      'products', // Collection for Product model
    ];

    // Drop each collection if it exists
    for (const collection of collections) {
      const collectionExists = await db
        .listCollections({ name: collection })
        .toArray();
      if (collectionExists.length) {
        await db.dropCollection(collection);
        console.log(`Dropped collection: ${collection}`);
      }
    }

    console.log('Database cleaned!');
    // Remove process.exit here, allow seeding to continue
  } catch (err) {
    console.error('Error cleaning database:', err);
    process.exit(1); // Exit with an error code
  }
};

module.exports = cleanDB;
