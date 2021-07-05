const db = require(`../models/index`);
const fs = require('fs');

/**
 * Class Auth Controller
 */
class AuthController {
  /**
   * Page of Login
   * @param {*} req
   * @param {*} res
   */
  async login(req, res) {
    if (req.method === 'POST') {
      const loginInfo = {
        email: req.body.email,
        password: req.body.password
      }
      const user = await db['User'].findOne({
        where: {email: loginInfo.email, password: loginInfo.password}
      });
      if (user) {
        res.render('home')
      } else {
        res.render('auth/login')
      }
    } else {
      const authCss = {
        style: fs.readFileSync('./views/auth/auth.css', 'utf8')
      };

      res.render("auth/login",
        {
          title: 'Login',
          authCss: authCss
        });
    }
  }


  async register(req, res) {
    const authCss = {
      style: fs.readFileSync('./views/auth/auth.css', 'utf8')
    };

    res.render('auth/register', {
      title: 'Register on Twitter',
      authCss: authCss
    });
  }
}

module.exports = AuthController;