'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository');

exports.get = async(req, res, next) => {
  try {
    let data = await repository.get();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      //messagem: 'Falha ao processar requesição!',
      erro: error.message
    });
  };
};

exports.getBySlug = async(req, res, next) => {
  try {
    let data = await repository.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      erro: error.message
    });
  };
};

exports.getById = async(req, res, next) => {
  try {
    let data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      erro: error.message
    });
  };
};

exports.getByTag = async(req, res, next) => {
  try {
    let data = await repository.getByTag(req.params.tags);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      erro: error.message
    });
  }
};

exports.post = async(req, res, next) => {
  try {
    let data = await repository.create(req.body)
    res.status(201).send({
      msg: 'Produto cadastrado com sucesso',
      dados: data
    });
  } catch (error) {
    res.status(500).send({
      msg: 'Falha ao cadastrar produto',
      erro: error.message
    });
  };
};

exports.put = async(req, res, next) => {
  try {
    let data = await repository.update(req.params.id, req.body);
    res.status(200).send({
      msg: 'Produto atualizado com sucesso.',
      dados: data
    });
  } catch (error) {
    res.status(500).send({
      msg: 'Erro ao atualizar produto',
      erro: error.message
    });
  };
};

exports.delete = async(req, res, next) => {
  try {
    await repository.del(req.params.id);
    res.status(200).send({
      message: 'Produto excluido com sucesso.'
    });
  } catch (error) {
    res.status(400).send({
      mesg: 'Erro ao excluir produto',
      erro: error.message
    });
  };
};
