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
    const authCss = {
      style: fs.readFileSync('./views/style.css', 'utf8')
    };
    res.render("auth/login",
      {
        title: 'Login',
        authCss: authCss
      });
  }

  async register(req, res) {
    const authCss = {
      style: fs.readFileSync('./views/style.css', 'utf8')
    };

    res.render('auth/register', {
      title: 'Register on Twitter',
      authCss: authCss
    });
  }
}

module.exports = AuthController;