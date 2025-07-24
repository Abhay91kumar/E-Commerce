const productCtrl = require('../controller/productCtrl');
const router = require('express').Router();

router.route('/product')
    .get(productCtrl.getProduct)
    .post(productCtrl.createProduct)

router.route('/product/:id')
    .delete(productCtrl.deleteProduct)
    .put(productCtrl.updateProduct)

module.exports = router;