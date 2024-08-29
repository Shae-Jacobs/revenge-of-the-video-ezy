import express from 'express'
import * as Path from 'node:path'

import movieRoutes from '../server/routes/movies'
import reviewRoutes from '../server/routes/reviews'

const server = express()

server.use(express.json())

// API routes
server.use('/api/v1/movies', movieRoutes)
server.use('/api/v1/reviews', reviewRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
