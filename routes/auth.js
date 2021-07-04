const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
/**
 * Routing for Auth
 */
const AuthController = require("../controllers/auth");
const controller = new AuthController();

router.get("/login", (req, res) => controller.login(req, res));
router.post("/login", urlencodedParser, (req, res) => controller.login(req, res));

module.exports = router;