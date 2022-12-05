const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const buscarSchema = new Schema({
    fraccion: String,
    name: [String],
    slug: [String],
    category: [String],
    brand: [String]
});

const Buscar = mongoose.model('Buscar', buscarSchema);

module.exports = Buscar;