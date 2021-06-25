import React from 'react'
import { Link } from 'react-router-dom'

function Movies ({ movies }) {
  return (
    <div className="grid grid-cols-4">
      { movies.map(item => (
    
      <Link key={item.id} to={`/movie/${item.id}`}>
        <div className="m-auto" key={item.id}>
          <img className="h-96 rounded-md m-auto shadow-md" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
          <h2 className="font-helvetica text-center pt-2 pb-8 mx-16">{item.original_title}</h2>
        </div>
        </Link>

      )
      )}
    </div>
  )
}
export default Movies
