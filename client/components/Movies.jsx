import React from 'react'
import { Link } from 'react-router-dom'

function Movies ({ movies }) {
  return (
    <div>
      { movies.map(item => (
        <Link key={item.id} to={`/movie/${item.id}`}>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
            <h2>{item.original_title}</h2>
          </div>
        </Link>
      )
      )}
    </div>
  )
}
export default Movies
