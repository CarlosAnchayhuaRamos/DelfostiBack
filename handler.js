'use strict';

const ProductosService = require('./services/productos.service');
const querystring = require('querystring');

const productosService = new ProductosService();

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.obtenerProducto = async (event) => {
  const data = await productosService.findProducto(event.pathParameters.id);
  return {
    statusCode: 200,
    body: JSON.stringify(
      data,
      null,
      2
    ),
  };
};

module.exports.actualizarProducto = async (event) => {
  const body = querystring.parse(event["body"])
  const data = await productosService.updateProducto(body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      data,
      null,
      2
    ),
  };
};