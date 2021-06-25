import React, { useState, useEffect } from 'react'
import { getMovies } from '../api.js'

function Movies () {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getMovies()
      .then(res => {
        console.log(res)
        setMovies(res.results)
        // console.log(res.results)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <div className="grid grid-cols-4">
      { movies.map(item => (
        <div className="m-auto" key={item.id}>
          <img className="h-96 rounded-md m-auto shadow-md" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
          <h2 className="font-helvetica text-center pt-2 pb-8 mx-16">{item.original_title}</h2>
        </div>
      )
      )}
    </div>
  )
}

export default Movies

// // Backup reference for HTML
// { /* <div>
// <img src="https://image.tmdb.org/t/p/w500/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg"></img>
// <h2>Luca</h2>
// </div> */ }
