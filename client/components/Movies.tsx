import { Movie } from '../../models/movies.ts'
import useMovies from '../hooks/useMovies.ts'
import { Link } from 'react-router-dom'

function Movies() {
  const movies = useMovies()

  if (movies.isPending) {
    return <p>Loading...</p>
  }

  if (movies.isError) {
    return <p>An error occurred loading movies...</p>
  }

  return (
    <>
      <h2>Movies</h2>
      <div className="movie-container">
        {movies.data.map((movie: Movie) => (
          <>
            <Link to={`/movies/${movie.id}`}>
              <div key={movie.id} className="movie-tile">
                <h2>{`${movie.title} (${movie.year})`}</h2>
                <p>{`Genre: ${movie.genre}`}</p>
                {/* TODO - Replace placeholder image with url from database */}
                <img
                  src={`${movie.posterUrl}`}
                  alt={`Box office poster for ${movie.title}`}
                ></img>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  )
}

export default Movies
