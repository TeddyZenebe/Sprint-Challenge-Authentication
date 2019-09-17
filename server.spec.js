const request = require('supertest'); 
const bcrypt = require('bcryptjs');
const Userdb = require('./database/users-model')
const server = require('./api/server.js'); 

describe('server.js', () => {
  describe('Post /api/auth/register ', () => {
       const req = {username:'teddy1', password:'123'}
       req.password = bcrypt.hashSync(req.password, 6)
    xit('should return an OK status code 200', async () => {
       request(server).post('/api/auth/register')
          Userdb.add(req)
      .then(res=>{
           
           expect(res.body.status).toBe(200);
      });
    })

    xit('should return the correct object', async () => {
      request(server).post('/api/auth/register')
        Userdb.add(req)
    .then(res=>{
          
          expect(res.type).toBe('application/json');
    })
     
    })

  })

  describe('Post /api/auth/login ', () => {
    const req = {username:'teddy1', password:'123'}
    req.password = bcrypt.hashSync(req.password, 6)
 it('should return an OK status code 200', async () => {
    request(server).post('/api/auth/login')
    await Userdb.findBy({ username: 'teddy1' })
    .first()
    .then(user=>{
      if (user && bcrypt.compareSync(req.password, user.password)) {
        expect(res.body.status).toBe(200);
      }
        
   });
 })
 
 it('should return the correct object', async () => {
   request(server).post('/api/auth/login')
   await Userdb.findBy({ username: 'teddy1' })
    .first()
    .then(user=>{
      if (user && bcrypt.compareSync(req.password, user.password)) {
        expect(res.type).toBe('application/json');
      }
       
 })
  
 })

})

})