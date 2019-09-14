const router = require('express').Router();
const restricted = require('../auth/authenticate-middleware.js')
const Userdb = require('../database/users-model')

router.get('/search', restricted, (req, res)=>{
    Userdb.find()
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json(error);
      })
})

module.exports = router