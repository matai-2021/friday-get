import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovie } from '../api.js'

function MovieInfo () {
  const [movie, setMovie] = useState([])
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    getMovie(id)
      .then(res => {
        console.log(res)
        setMovie(res)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  console.log(movie.genres)

  return (
    <div>
      <h2>{movie.title}</h2>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        <p>{movie.overview}</p>
      </div>
      <div>
        <h2>More Info</h2>
        <p><strong>Homepage:</strong> {movie.homepage}</p>
        <p><strong>ate Released:</strong> {movie.release_date}</p>
        <p><strong>Rating</strong> (/10): {movie.vote_average}</p>
      </div>
    </div>
  )
}

export default MovieInfo
