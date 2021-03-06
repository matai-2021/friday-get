import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { getMovies } from '../api.js'

import Movies from './Movies'
import MovieInfo from './MovieInfo'

function App () {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getMovies()
      .then(res => {
        setMovies(res.results)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <div>
        <Route exact path ="/" render={() => <Movies movies={ movies }/>}/>
        <Route exact path='/movie/:id' render={() => <MovieInfo movies={ movies }/>}/>

      </div>
    </>
  )
}

export default App
