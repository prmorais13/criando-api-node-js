'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

//router.get('/', controller.get);
//router.get('/:id', controller.getById);
router.post('/', controller.post);
router.post('/auth', controller.authenticate);
//router.put('/:id', controller.put);
//router.delete('/:id', controller.delete);

module.exports = router;