const express = require("express");
const passport = require("passport");
const bodyParser = require('body-parser');

const router = express.Router();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({extended: false})
/**
 * Routing for Auth
 */
const AuthController = require("../controllers/auth");
const controller = new AuthController();

router.get("/login", (req, res, next) => {
    if (!req.isAuthenticated()) return next();
    res.redirect('/home');
  },
  (req, res) => controller.login(req, res));

router.post("/login", urlencodedParser, passport.authenticate('local-login', {
  successRedirect: '/home',
  failureRedirect: 'login',
  passReqToCallback: true
}));

router.get("/register", urlencodedParser, (req, res, next) => {
  if (!req.isAuthenticated()) return next();
  res.redirect('/home');
}, (res, req) => controller.register(req, res));

router.post("/register", urlencodedParser, passport.authenticate('local-signup', {
  successRedirect: '/home',
  failureRedirect: 'register',
  passReqToCallback: true
}));


module.exports = router;