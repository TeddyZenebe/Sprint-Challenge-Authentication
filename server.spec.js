const request = require('supertest'); 

const server = require('./api/server.js'); 

describe('server.js', () => {
  describe('Post /api/auth/register ', () => {
    it('should return an OK status code 200', async () => {
      
      const response = await request(server).post('/api/auth/register');

      expect(response.status).toBe(200);

    })


  })
})