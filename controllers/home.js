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
    const tweets = [
      {
        fullName: 'Santiago Marini',
        username: 'santmarini',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.',
        createdAt: Date()
      },
      {
        fullName: 'user3 anon',
        username: 'uu33jj',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
        createdAt: Date()
      },
      {
        fullName: 'Juan Carlos',
        username: 'juancarlos5',
        content: 'Lorem ipsu',
        createdAt: Date()
      },
    ]
    res.render("home",
      {
        title: 'Home',
        authCss: authCss,
        tweets: tweets
      });
  }


  async sendTweet(req, res) {
    const authCss = {
      style: fs.readFileSync('./views/auth/auth.css', 'utf8')
    };
    const tweets = [
      {
        fullName: 'Santiago Marini',
        username: 'sanrini',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.',
        createdAt: Date()
      },
      {
        fullName: 'user3 anon',
        username: 'uu33jj',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
        createdAt: Date()
      },
      {
        fullName: 'Juan Carlos',
        username: 'juancarlos5',
        content: 'Lorem ipsu',
        createdAt: Date()
      },
    ]
    res.render("home",
      {
        title: 'Home',
        authCss: authCss,
        tweets: tweets
      });

  }

}

module.exports = HomeController;