'use strict'

const repository = require('../repositories/customer-repository');

exports.post = async(req, res, next) => {
  try {
    let data = await repository.create(req.body)
    res.status(201).send({
      msg: 'Cliente cadastrado com sucesso',
      dados: data
    });
  } catch (error) {
    res.status(500).send({
      msg: 'Falha ao cadastrar cliente',
      erro: error.message
    });
  };
};