'use strict'
//Gera números aleatórios
const uuidv4 = require('uuid/v4');
const repository = require('../repositories/order-repository');

exports.get = async(req, res, next) => {
  try {
    let data = await repository.get();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      erro: error.message
    });
  };
};

exports.post = async(req, res, next) => {
  try {
    let data = await repository.create({
      customer: req.body.customer,
      number: uuidv4(),
      items: req.body.items
    });

    res.status(201).send({
      msg: 'Pedido cadastrada com sucesso',
      dados: data
    });
  } catch (error) {
    res.status(500).send({
      msg: 'Falha ao cadastrar Pedido',
      erro: error.message
    });
  };
};