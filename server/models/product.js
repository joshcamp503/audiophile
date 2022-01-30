const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  slug: {
    type: String, 
    required: true
  },
  name: {
    type: String, 
    required: true
  },
  image: {
    type: Object, 
    required: true
  },
  category: {
    type: String, 
    required: true
  },
  categoryImage: {
    type: Object, 
    required: true
  },
  new: {
    type: Boolean, 
    required: true
  },
  price: {
    type: Number, 
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  features: {
    type: String, 
    required: true
  },
  includes: {
    type: Array, 
    required: true
  },
  gallery: {
    type: Object, 
    required: true
  },
  others: {
    type: Array, 
    required: true
  }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)
module.exports = Product