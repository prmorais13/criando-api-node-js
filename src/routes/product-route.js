'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/products-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/slug/:slug', controller.getBySlug);
router.get('/tags/:tags', controller.getByTag);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;