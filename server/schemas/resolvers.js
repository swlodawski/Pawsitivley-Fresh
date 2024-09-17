//Importing Mongoose models 
const User = require('../models/User');
const Pet = require ('../models/Pet');
const Order = require('../models/Order');
const Product = require('../models/Product');

//Fetching data
const resolvers = {
  Query: {
    users: () => User.find(), //Fetching Users
    user: (parent, args) => User.findById(args.id), //Finding User by ID
    pets: () => Pet.find().populate('owner'), //Finding pets by their owners
    pet: (parent, args) => Pet.findById(args.id).populate('owner'), //Finding a pet by ID, with the owner
    foods: () => Food.find(), //Fetching foods
    food: (parent, args) => Food.findById(args.id), //Fetching food by ID
    orders: () => Order.find().populate('user').populate('products'), //Fetching orders with users and products populated
    order: (parent, args) => Order.findById(args.id).populate('user').populate('products'), //Fetching order by ID
    products: () => Product.find(), //Fetching all products
    product: (parent, args) => Product.findById(args.id), //Fetching a specific product by ID
  },

  Mutation: {
    //Adding a new user
    addUser: (parent, args) => {
      const user = new User(args);
      return user.save();
    },
    //Adding a new pet
    addPet: (parent, args) => {
      const pet = new Pet(args);
      return pet.save();
    },
    //Adding a new food item
    addFood: (parent, args) => {
      const food = new Food(args);
      return food.save();
    },
    //Adding a new order
    addOrder: (parent, args) => {
      const order = new Order({
        ...args,
        products: args.products, 
      });
      return order.save();
    },
    //Adding a new product
    addProduct: (parent, args) => {
      const product = new Product(args);
      return product.save();
    },

    //Updating and deleting data by ID
    updateUser: (parent, args) => User.findByIdAndUpdate(args.id, args, { new: true }), //Updating an existing user by ID
    updatePet: (parent, args) => Pet.findByIdAndUpdate(args.id, args, { new: true }), //Update an existing pet by ID
    updateFood: (parent, args) => Food.findByIdAndUpdate(args.id, args, { new: true }), //Updating food item by ID
    updateOrder: (parent, args) => Order.findByIdAndUpdate(args.id, args, { new: true }), //Updating order by ID
    updateProduct: (parent, args) => Product.findByIdAndUpdate(args.id, args, { new: true }), //Updating existing product by ID
    deleteUser: (parent, args) => User.findByIdAndRemove(args.id), //Delete user by ID
    deletePet: (parent, args) => Pet.findByIdAndRemove(args.id), //Delete pet by ID
    deleteFood: (parent, args) => Food.findByIdAndRemove(args.id), //Delete food by ID
    deleteOrder: (parent, args) => Order.findByIdAndRemove(args.id), //Delete order by ID
    deleteProduct: (parent, args) => Product.findByIdAndRemove(args.id), //Delete product by ID
  },
};

//Exporting resolvers
module.exports = resolvers;
