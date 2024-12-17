const express = require("express")
const {createOrder} = require('../controller/ordercontroller')
const router = express.Router()

router.post('/',createOrder)

module.exports = router;