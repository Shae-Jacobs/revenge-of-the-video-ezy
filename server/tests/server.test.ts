import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'
import server from '../server.ts'
import connection from '../db/connection'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

/*
Expecting Seed data to include exactly five movies.
Expecting the following data for movie ID = 2
*/

const exampleMovie = {
  id: 2,
  title: 'Mad Max',
  year: 1979,
  posterUrl: "/images/MadMax.jpg",
  genre: 'Action/Sci-Fi',
}

// GET all movies from server endpoint: /api/v1/movies/
describe('Getting all movies', async () => {
  it('should return data for all of the movies', async () => {
    const response = await request(server).get('/api/v1/movies')

    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(16)
    expect(response.body[1]).toStrictEqual(exampleMovie)
  })
})

// GET a movie by id from server endpoint /api/v1/movies/:id
describe('Getting a movie by ID', async () => {
  it('should return the correct movie', async () => {
    const response = await request(server).get('/api/v1/movies/2')
    expect(response.status).toBe(200)
    expect(response.body).toStrictEqual(exampleMovie)
  })

  it('should return 404 if an invalid movie ID is provided', async () => {
    const response = await request(server).get('/api/v1/movies/200')
    expect(response.status).toBe(404)
  })
})
