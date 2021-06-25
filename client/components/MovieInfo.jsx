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
      <h2 className="font-helvetica font-bold text-center text-6xl py-8">{movie.title}</h2>
      <div className="grid grid-cols-2">
        <div className="m-auto">
          <img className="h-96" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        </div>
        <div className="font-helvetica m-auto pr-36">
          <p>{movie.overview}</p>
          <p><strong>Homepage:</strong> {movie.homepage}</p>
          <p><strong>Date Released:</strong> {movie.release_date}</p>
          <p><strong>Rating</strong> (/10): {movie.vote_average}</p>
          <p><strong>Genres:</strong></p>
        {movie.genres?.map(gen => (
          <p key={gen.id}><strong></strong>{gen.name}</p>
        ))}
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
