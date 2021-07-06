const express = require("express");
const passport = require("passport");
const bodyParser = require('body-parser');

const router = express.Router();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
/**
 * Routing for Auth
 */
const HomeController = require("../controllers/home");
const controller = new HomeController();
router.get("/", (req, res) => controller.goHome(req, res));
router.post("/", urlencodedParser, (req, res) => controller.sendTweet(req, res));

module.exports = router;