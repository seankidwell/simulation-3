module.exports = {

  register: (req, res) => {
    const db = req.app.get("db");
    const {username, password} = req.body;
    db.create_user([username, password]).then(user => {
      req.session.userid = user[0].id
      res.status(200).send(user)
    })
  },
  login: (req, res) => {
    const db = req.app.get("db");
    const {username, password} = req.body;
    db.get_user([username, password]).then(user => {
      req.session.userid = user[0].id
      res.status(200).send(user)
    })
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('http://localhost:3000/#/')
  }
}