const server = require('../../app').callback()
const request = require('supertest')

// afterEach(() => {
//   server.callback().close()
// })

test('查询所有用户', async () => {
  const response = await request(server)
    .get('/api/1/user')
  expect(response.status).toBe(200)
})

// test('创建用户', async () => {
//   const response = await request(server)
//     .post('/api/1/user')
//     .send({
//       username: 'test123',
//       password: '123456'
//     })
// })
