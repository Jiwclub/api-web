var express = require("express");
var router = express.Router();
var doscgController = require("../controllers/scg.controllers");

var index = doscgController;

router.get("/", index.getDoscgController);

module.exports = router;
