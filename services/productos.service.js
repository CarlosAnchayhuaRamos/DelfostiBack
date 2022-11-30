//const fetch = require('node-fetch');
//const sequelize = require('../libs/sequelize');

class ProductosService{

  constructor(){

  }

  async findProducto(id) {

    //const select ="SELECT * from personas where id = " + id + ";";

    let data = {
      name: "carlos " + id
    };

    console.log(data);
    //console.log(select);
    // try{
    //   [[data]] = await sequelize.query(select);
    // }
    // catch{
    //   data = {
    //     message: 'ocurrio un error con la base de datos'
    //   }
    // }
    return data;
  }

  async updateProducto(body) {

    //const select ="SELECT * from personas where id = " + id + ";";

    let data = {
      name: "carlos " + body.id + body.name + body.categoryname + body.brandname + body.status
    };

    console.log(data);
    //console.log(select);
    // try{
    //   [[data]] = await sequelize.query(select);
    // }
    // catch{
    //   data = {
    //     message: 'ocurrio un error con la base de datos'
    //   }
    // }
    return data;
  }

}

module.exports = ProductosService;
