// Importing Mongoose models for interacting with the db
const User = require('../models/User');
const Pet = require('../models/Pet');
const Order = require('../models/Order');
const Product = require('../models/Product');

const resolvers = {
  Query: {
    //Fetch all users
    users: async () => {
      return User.find(); // Returns a list of all users from the db
    },

    //Fetch a single user by ID
    user: async (parent, { id }) => {
      return User.findById(id); // Finds a user by their unique ID
    },

    // Fetch all pets
    pets: async () => {
      return Pet.find().populate('owner'); // Returns all pets and populates the 'owner' field
    },

    //Fetch a pet by ID
    pet: async (parent, { id }) => {
      return Pet.findById(id).populate('owner'); // Finds a pet by ID and populates the 'owner' field
    },

    // Fetch all foods
    foods: async () => {
      return Food.find(); // Returns all food items from the db
    },

    //Fetch a food item by ID
    food: async (parent, { id }) => {
      return Food.findById(id); // Finds a food item by ID
    },

    // Fetch all orders
    orders: async () => {
      return Order.find().populate('user').populate('products'); // Returns all orders with populated user and products fields
    },

    // Fetch an order by ID
    order: async (parent, { id }) => {
      return Order.findById(id).populate('user').populate('products'); // Finds an order by ID and populates user and products fields
    },

    //Fetch all products
    products: async () => {
      return Product.find(); // Returns all products from the db
    },

    // Fetch a product by ID
    product: async (parent, { id }) => {
      return Product.findById(id); // Finds a product by ID
    },
  },

  Mutation: {
    // Add a new user
    addUser: async (parent, { name, email, password }) => {
      const user = new User({ name, email, password }); // Creates a new user with name,email,and password
      return user.save(); // Saves the new user to the db
    },

    // Add a new pet
    addPet: async (parent, { name, owner }) => {
      const pet = new Pet({ name, owner }); // Creates a new pet instance with provided details
      return pet.save(); // Saves the new pet to the db
    },

    // Add a new food item
    addFood: async (parent, { name, type }) => {
      const food = new Food({ name, type }); // Creates a new food instance with provided details
      return food.save(); // Saves the new food item to the db
    },

    // Resolver to add a new order
    addOrder: async (parent, { user, products }) => {
      const order = new Order({ user, products }); // Creates a new order instance with provided details
      return order.save(); // Saves the new order to the db
    },

    // Add a new product
    addProduct: async (parent, { name, price }) => {
      const product = new Product({ name, price }); // Creates a new product instance with provided details
      return product.save(); // Saves the new product to the db
    },

    // Update an existing user by ID
    updateUser: async (parent, { id, name, email, password }) => {
      return User.findByIdAndUpdate(
        id, // ID of the user to update
        { name, email, password }, // New details to update
        { new: true, runValidators: true } // Return the updated document and validate the update
      );
    },

    // Update an existing pet by ID
    updatePet: async (parent, { id, name, owner }) => {
      return Pet.findByIdAndUpdate(
        id, // ID of the pet to update
        { name, owner }, // New details to update
        { new: true, runValidators: true } // Return the updated document and validate the update
      );
    },

    // Update an existing food item by ID
    updateFood: async (parent, { id, name, type }) => {
      return Food.findByIdAndUpdate(
        id, // ID of the food item to update
        { name, type }, // New details to update
        { new: true, runValidators: true } // Options: return the updated document and validate the update
      );
    },

    // Update an existing order by ID
    updateOrder: async (parent, { id, user, products }) => {
      return Order.findByIdAndUpdate(
        id, // ID of the order to update
        { user, products }, // New details to update
        { new: true, runValidators: true } // Options: return the updated document and validate the update
      );
    },

    // Update an existing product by ID
    updateProduct: async (parent, { id, name, price }) => {
      return Product.findByIdAndUpdate(
        id, // ID of the product to update
        { name, price }, // New details to update
        { new: true, runValidators: true } // Options: return the updated document and validate the update
      );
    },

    // Delete a user by ID
    deleteUser: async (parent, { id }) => {
      return User.findByIdAndDelete(id); // Deletes the user with the specified ID
    },

    // Delete a pet by ID
    deletePet: async (parent, { id }) => {
      return Pet.findByIdAndDelete(id); // Deletes the pet with the specified ID
    },

    // Delete a food item by ID
    deleteFood: async (parent, { id }) => {
      return Food.findByIdAndDelete(id); // Deletes the food item with the specified ID
    },

    // Delete an order by ID
    deleteOrder: async (parent, { id }) => {
      return Order.findByIdAndDelete(id); // Deletes the order with the specified ID
    },

    // Delete a product by ID
    deleteProduct: async (parent, { id }) => {
      return Product.findByIdAndDelete(id); // Deletes the product with the specified ID
    },
  },
};

//Exporting resolvers to import in application
module.exports = resolvers;

