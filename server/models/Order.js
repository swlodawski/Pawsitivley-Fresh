const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;