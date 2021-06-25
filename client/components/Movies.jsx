import React from 'react'
import { Link } from 'react-router-dom'

function Movies ({ movies }) {
  return (
    <>
      <h1 className="font-helvetica font-bold text-center text-6xl py-8">These are Movies</h1>
      <div className="grid grid-cols-4">
        { movies.map(item => (
          <div className="m-auto" key={item.id}>
            <Link key={item.id} to={`/movie/${item.id}`}>
              <img className="h-96 rounded-md m-auto shadow-md" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
            </Link>
            <h2 className="font-helvetica text-center pt-2 pb-8 mx-16">{item.original_title}</h2>
          </div>
        )
        )}
      </div>
    </>
  )
}
export default Movies
