const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProducts);
router.get('/products', adminController.getProducts);
router.get('/edit-product/:productId', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProducts);

module.exports = router;
