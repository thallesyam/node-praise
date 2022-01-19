import express from 'express'

const app = express()

app.get('/test', (request, response) => {
  return response.send('Olá Nlw')
})

app.post('/test-post', (request, response) => {
  return response.send('Nlw método POST')
})

app.listen(3333, () => {
  console.log('Server is Running 🔥')
})
