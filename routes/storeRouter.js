const express = require("express");
const router = express.Router();

const { createStore,getStore } = require("../controller/storecontroller");
const tokenCheck = require("../midleware/tokencheck");

router.post("/", tokenCheck(), createStore);
router.get("/", tokenCheck(), getStore);

module.exports = router;
