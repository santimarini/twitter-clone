const db = require(`../models/index`);
const fs = require('fs');

/**
 * Class Auth Controller
 */
class HomeController {
  /**
   * Page of Login
   * @param {*} req
   * @param {*} res
   */
  async goHome(req, res) {
    const authCss = {
      style: fs.readFileSync('./views/auth/auth.css', 'utf8')
    };
    const tweets = await db['Tweet'].findAll({
      include: [{model: db['User']}],
      order: [['createdAt', 'DESC']]
    });

    res.render("home",
      {
        title: 'Home',
        authCss: authCss,
        tweets: tweets
      });
  }

  async sendTweet(req, res) {
    await db['Tweet'].create({
      UserId: req.user.id,
      content: req.body.tweet,
      createdAt: Date()
    })

    res.redirect('home');
  }

}

module.exports = HomeController;