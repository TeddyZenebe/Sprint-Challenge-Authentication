const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  const secret = 'hard coded secret...hummm not true'
  if(token) { jwt.verify(token, secret, (err,decodedToken)=>{
    if(err){
        res.status(401).json({ you: 'shall not pass!' })}else {
        req.decodedToken =decodedToken
        next()
    }
    })}else {
    res.status(400).json({message: 'not authorized'})
    }
}
