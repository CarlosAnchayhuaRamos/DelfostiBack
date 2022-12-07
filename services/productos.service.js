//const fetch = require('node-fetch');
//const sequelize = require('../libs/sequelize');
//const {connectToDatabase} = require('mongodb');
const mongoose = require('mongoose');
const producto = require("../models/producto");
const buscar = require("../models/buscar");

const { config } = require('./../config/config');

const user = config.dbUser;
const password = config.dbPassword;
const dbname = config.dbName;
const uri = `mongodb+srv://${user}:${password}@delfosticarlosanchayhua.2uy6njc.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(() => console.log('Base de datos conectada'))
.then(e => console.log(e))

class ProductosService{

  constructor(){

  }

  async findProducto(nombre) {
    let data;

    try{
      data = await producto.find({ name: nombre});
    }
    catch(error){
      console.log(error);
    }
    
    return data;
  }

  async updateProducto(body) {
    let data;
    try{
      data = await producto.updateOne({name: body.name}, {$set: {status: body.status}});
    }
    catch{
      data = {
        message: 'ocurrio un error con la actualización en base de datos'
      }
    }
    return data;
  };

  async createProducto(body) {
    let data;

    console.log(data);
    try{
      await producto.insertMany(
        {name: body.name, 
          category: {name: body.categoryname, slug: body.categoryslug}, 
          brand: {name: body.brandname, slug: body.brandslug}, 
          slug: body.productslug,
          status: body.status});
    }
    catch{
      data = {
        message: 'createProducto - ocurrio un error con la base de datos'
      }
    }
    return data;
  };

  async deleteProducto(body) {
    let data;
    try{
      data = await producto.deleteMany({name: body.name});
    }
    catch{
      data = {
        message: 'ocurrio un error con la base de datos al intentar borrar'
      }
    }
    return data;
  };

  async busqueda(fraccionpalabra) {
    let data;

    try{
      data = await buscar.find({fraccion: fraccionpalabra});
    }
    catch(error){
      console.log(error);
    }
    
    return data;
  }

}

module.exports = ProductosService;
