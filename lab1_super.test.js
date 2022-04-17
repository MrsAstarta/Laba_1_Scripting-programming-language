const app = require('./lab1.js');
const supertest = require('supertest');
const request = supertest(app);
it('має бути Hello Word', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello Word');
    return 0;
});
