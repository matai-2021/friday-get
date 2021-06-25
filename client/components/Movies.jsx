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
    <div>
      { movies.map(item => (
        <div key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
          <h2>{item.original_title}</h2>
        </div>
      )
      )}
    </div>
  )
}

export default Movies

// Backup reference for HTML
{ /* <div>
<img src="https://image.tmdb.org/t/p/w500/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg"></img>
<h2>Luca</h2>
</div> */ }
