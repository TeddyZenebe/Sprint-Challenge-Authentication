const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Userdb = require('../database/users-model.js')

router.post('/register', (req, res) => {
  const user = req.body
  user.password = bcrypt.hashSync(user.password, 6)
  Userdb.add(user)
  .then(added=>{
      const token = generateToken(user)
      const data = {...added, token}
      res.status(200).json(data);
  })
  .catch(error=>{
      res.status(500).json(error)
  })
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  Userdb.findBy({ username })
  .first()
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user); 
      res.status(200).json({message:`Welcome to this site Mr/Mss ${username}`, token});
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

function generateToken(user) {
  const payload = {
    subject: user.id, 
    username: user.username,
  };

const secret = 'hard coded secret...hummm not true'

  const options = {
    expiresIn: '1d', 
  };

  return jwt.sign(payload, secret, options); 
}

module.exports = router;
