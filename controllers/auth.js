const db = require(`../models/index`);

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
      await db['User'].findOne({where: {email: loginInfo.email, password: loginInfo.password}})
        .then(user => {
          if (user) {
            return res.render('home');
          } else {
            return res.render('auth/login');
          }
        })
    } else {
      res.render("auth/login");
    }
  }
}

module.exports = AuthController;