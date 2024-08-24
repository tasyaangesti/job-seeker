class UserController {
  static async login(req, res) {
    try {
        res.send('test')
    } catch (error) {
        console.log(error);
        
    }
  }
}

module.exports = UserController;