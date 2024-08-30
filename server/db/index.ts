import connection from './connection.ts'

// Movies functions
export const getAllMovies = async () => {
  return connection('movies').select()
}

export const getMovieById = async (id: number) => {
  return connection('movies').where({ id }).first()
}

export const createMovie = async (
  title: string,
  year: number,
  genre: string,
) => {
  const [id] = await connection('movies').insert({ title, year, genre })
  return { id, title, year, genre }
}

export const updateMovie = async (
  id: number,
  updates: { title?: string; year?: number; genre?: string },
) => {
  // Perform the update and return the updated record
  await connection('movies').where({ id }).update(updates)
  return { id, ...updates }
}

export const deleteMovie = async (id: number) => {
  // Perform the delete and return a success message
  await connection('movies').where({ id }).del()
  return { id }
}

// Reviews functions
export const getAllReviews = async () => {
  return connection('reviews').select('*')
}

export const getReviewByMovieId = async (movie_id: number) => {
  return connection('reviews')
    .join('movies', 'reviews.movie_id', 'movies.id')
    .select(
      'reviews.id as id',
      'reviews.movie_id as movieId',
      'reviews.review_text as reviewText',
      'reviews.movie_rating as movieRating',
      'reviews.reviewer_name as reviewerName',
    )
    .where({ movie_id })
}

export const createReview = async (
  movie_id: number,
  review_text: string,
  movie_rating: number,
  reviewer_name: string,
) => {
  const [id] = await connection('reviews').insert({
    movie_id,
    review_text,
    movie_rating,
    reviewer_name,
  })
  return { id, movie_id, review_text, movie_rating, reviewer_name }
}

export const updateReview = async (
  id: number,
  updates: {
    movie_id?: number
    review_text?: string
    movie_rating?: number
    reviewer_name?: string
  },
) => {
  // Perform the update and return the updated record
  await connection('reviews').where({ id }).update(updates)
  return { id, ...updates }
}

export const deleteReview = async (id: number) => {
  // Perform the delete and return a success message
  await connection('reviews').where({ id }).del()
  return { id }
}
