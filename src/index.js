const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World Ignite!' })
})

app.listen(3333, () => {
  console.log('🚀Server started in port 3333!...')
})