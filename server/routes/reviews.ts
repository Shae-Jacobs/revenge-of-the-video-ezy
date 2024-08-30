import { Router } from 'express'
import {
  getAllReviews,
  getReviewByMovieId,
  createReview,
  updateReview,
  deleteReview,
} from '../db/index.ts'

const router = Router()

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await getAllReviews()
    res.json(reviews)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve reviews' })
  }
})

// Get a single review by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const review = await getReviewByMovieId(Number(id))
    if (review) {
      res.json(review)
    } else {
      res.status(404).json({ error: 'Review not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve review' })
  }
})

// Create a new review
router.post('/', async (req, res) => {
  const { movieId: movie_id, reviewText: review_text, movieRating: movie_rating, reviewerName: reviewer_name } = req.body
  try {
    const review = await createReview(
      movie_id,
      review_text,
      movie_rating,
      reviewer_name,
    )
    res.status(201).json(review)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create review' })
  }
})

// Update a review by ID (PATCH)
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { movie_id, review_text, movie_rating, reviewer_name } = req.body
  try {
    const review = await updateReview(Number(id), {
      movie_id,
      review_text,
      movie_rating,
      reviewer_name,
    })
    res.json(review)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update review' })
  }
})

// Delete a review by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await deleteReview(Number(id))
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete review' })
  }
})

export default router
