import { Link, useParams } from 'react-router-dom'
import { useMovieById } from '../hooks/useMovieById'
import useReviews from '../hooks/useReviews'

function MovieDetails() {
  const { id } = useParams()
  const movie = useMovieById(String(id))
  const review = useReviews(String(id))
  if (movie.isPending || review.isPending) {
    return <p>Loading...</p>
  }

  if (movie.isError || review.isError) {
    return <p>An error occurred loading movies...</p>
  }

  return (
    <>
      <div className="two-columns">
        <div>
          <h2>{`${movie.data.title} (${movie.data.year})`}</h2>
          <p>{`${movie.data.genre}`}</p>
          <img
            src={`${movie.data.posterUrl}`}
            alt={`Poster for ${movie.data.title}`}
            className="movie-poster"
          />
        </div>
        <div>
          {review.data.map((review) => (
            <>
              <div key={review.id}>
                <h2>{`Reviewed By: ${review.reviewerName}`}</h2>
                <h3>{`Rating: ${review.movieRating}/5`}</h3>
                <p>{`Review: ${review.reviewText}`}</p>
              </div>
            </>
          ))}
          {
            !review.data[0] && <p>No reviews yet</p>
          }
          <Link to={`/movies/${id}/review`}><button>Add review</button></Link>
        </div>
      </div>
    </>
  )
}

export default MovieDetails
