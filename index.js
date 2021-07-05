/*********************************************************************************************************************************************
 * *************************************************************************
 * *************************************************************************
 *  Configuration of Frameworks
 * *************************************************************************
 * *************************************************************************
 ******************************************************************************************************************************************/

const express = require("express");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const app = express();
require('./passport/local-auth');

const port = 3000;
app.use(express.static(__dirname + "/public")); // all statics files in /public
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
/* Passport configuration */

app.use(session({
  secret: 'mosTsecretkEy123',
  resave: false,
  saveUninitialized: false
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) =>{
  app.locals.signUpError = req.flash('signUpError');
  next();
})


/**
 * Routing
 */
const auth = require("./routes/auth");
app.use("/auth", auth);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});