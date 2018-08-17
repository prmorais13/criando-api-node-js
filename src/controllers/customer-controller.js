'use strict'

const repository = require('../repositories/customer-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');
const emailService = require('../services/email-service');

exports.post = async(req, res, next) => {
  try {
    let data = await repository.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY)
    });

    emailService.send(req.body.email, 'Bem vindo ao NodeStore', global.EMAIL_TMPL.replace('{0}', req.body.name));

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

exports.authenticate = async(req, res, next) => {
  try {
    let customer = await repository.authenticate({
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY)
    });

    if (!customer) {
      res.status(404).send({
        msg: 'Usuário e/ou senha inválido!'
      })
      return
    }
    
    const token = await authService.generateToken({
      email: customer.email,
      name: customer.name
    });

    res.status(201).send({
      token: token,
      dados: {
        email: customer.email,
        name: customer.name
      }
    });
  } catch (error) {
    res.status(500).send({
      msg: 'Falha ao cadastrar cliente',
      erro: error.message
    });
  };
};