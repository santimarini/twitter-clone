const express = require("express");
const passport = require("passport");
const bodyParser = require('body-parser');

const router = express.Router();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
/**
 * Routing for Auth
 */
const AuthController = require("../controllers/auth");
const controller = new AuthController();

router.get("/login", (req, res) => controller.login(req, res));
router.post("/login", urlencodedParser, (req, res) => controller.login(req, res));

router.get("/register", urlencodedParser, (req, res) => controller.register(req, res));
router.post("/register", urlencodedParser, passport.authenticate('local-signup',  {
  successRedirect: 'login',
  failureRedirect: 'register',
  passReqToCallback: true
}));


module.exports = router;