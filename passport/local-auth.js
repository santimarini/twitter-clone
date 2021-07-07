const db = require(`../models/index`);
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const {Op} = require("sequelize");


passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await db['User'].findOne({
    where:
      {id: id}
  });
  return done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, email, password, done) => {
    const user = await db['User'].findOne({
      where: {
        [Op.or]: [{
          email: email
        },
          {
            username: req.body.username
          }]
      }
    })
    if (user) {
      done(null, false, req.flash('signUpError', 'El usuario o nombre de usuario ingresados ya están registrados.'))
    }
    const newUser = await db['User'].create({
      fullName: req.body.fullName,
      username: req.body.username,
      email: email,
      password: password
    });
    done(null, newUser);
  }))


passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await db['User'].findOne({
    where: {
      [Op.or]: [{
        email: email
      },
        {
          username: email
        }]
    }
  })
  console.log(user);

  if (!user) {
    return done(null, false, req.flash('loginMessage', 'Invalid user or password.'))
  }

  done(null, user);
}));
