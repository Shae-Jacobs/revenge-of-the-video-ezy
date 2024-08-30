import { Router } from 'express'
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from '../db/index.ts'

const router = Router()

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await getAllMovies()
    res.json(movies)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve movies' })
  }
})

// Get a single movie by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const movie = await getMovieById(Number(id))
    if (movie) {
      res.json(movie)
    } else {
      res.status(404).json({ error: 'Movie not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve movie' })
  }
})

// Create a new movie
router.post('/', async (req, res) => {
  const { title, year, genre } = req.body
  try {
    const movie = await createMovie(title, year, genre)
    res.status(201).json(movie)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create movie' })
  }
})

// Update a movie by ID (PATCH)
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { title, year, genre } = req.body
  try {
    const movie = await updateMovie(Number(id), { title, year, genre })
    res.json(movie)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update movie' })
  }
})

// Delete a movie by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await deleteMovie(Number(id))
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete movie' })
  }
})

export default router
