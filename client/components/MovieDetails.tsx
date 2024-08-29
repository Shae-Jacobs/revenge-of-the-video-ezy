import { useParams } from "react-router-dom"
import { useMovieById } from "../hooks/useMovieById"

function MovieDetails() {

  const { id } = useParams()
  const { data, isPending, isError } = useMovieById(String(id))

  if(isPending){
    return <p>Loading...</p>
  }

  if(isError){
    return <p>An error occurred loading movies...</p>
  }

  return (
    <>
    <h2>Movie Details</h2>
    <div className='two-columns'>
      <div>
        <h2>Title: movie title (1930)</h2>
        <p>Genre: sadfka</p>
        <img src="" alt="Poster for XXX"/>
      </div>
      <div>
        <h2>Review 1</h2>
        <p>Big old review text.Big old review textBig old review textBig old review textBig old review textBig old review textBig old review textBig old review text</p>
        <h2>Review 2</h2>
        <p>Big old review text.Big old review textBig old review textBig old review textBig old review textBig old review textBig old review textBig old review text</p>
        <h2>Review 3</h2>
        <p>Big old review text.Big old review textBig old review textBig old review textBig old review textBig old review textBig old review textBig old review text</p>
      </div>
    </div>
    </>
  )
}

export default MovieDetails