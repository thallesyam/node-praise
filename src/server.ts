import 'reflect-metadata'
import express from 'express'

import './database'

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

// 1h 03min 28seg
