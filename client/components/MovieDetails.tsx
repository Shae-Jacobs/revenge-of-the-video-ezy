import { useParams } from 'react-router-dom'
import { useMovieById } from '../hooks/useMovieById'
import useReviews from '../hooks/useReviews'

function MovieDetails() {
  const { id } = useParams()
  const movie = useMovieById(String(id))
  const review = useReviews()
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
            src=""
            alt={`Poster for ${movie.data.title}`}
            className="movie-poster"
          />
        </div>
        <div>
          <h2>Review 1</h2>
          <p>
            Big old review text.Big old review textBig old review textBig old
            review textBig old review textBig old review textBig old review
            textBig old review text
          </p>
          <h2>Review 2</h2>
          <p>
            Big old review text.Big old review textBig old review textBig old
            review textBig old review textBig old review textBig old review
            textBig old review text
          </p>
          <h2>Review 3</h2>
          <p>
            Big old review text.Big old review textBig old review textBig old
            review textBig old review textBig old review textBig old review
            textBig old review text
          </p>
        </div>
      </div>
    </>
  )
}

export default MovieDetails
