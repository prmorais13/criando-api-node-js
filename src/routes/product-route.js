'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/products-controller');
const authService = require('../services/auth-service');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/slug/:slug', controller.getBySlug);
router.get('/tags/:tags', controller.getByTag);
router.post('/', authService.authorize, controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;