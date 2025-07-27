const router = require('express').Router();
const paymentCtrl = require('../controller/paymentCtrl');
const auth=require('../middleware/auth')

router.post('/payment', auth, paymentCtrl.createPayment);

module.exports = router;
