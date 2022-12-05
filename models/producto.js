const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productoSchema = new Schema({
    name: String,
    category: {
        name: String,
        slug: String
    },
    brand: {
        name: String,
        slug: String
    },
    slug: String,
    status: String
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;