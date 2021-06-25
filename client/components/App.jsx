import React from 'react'
import { Route } from 'react-router-dom'

import Movies from './Movies'
import MovieInfo from './MovieInfo'

function App () {
  // useEffect(() => {
  //   getWelcome()
  //     .then(res => {
  //       setWelcomeStatement(res.statement)
  //       return null
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

  return (
    <>
      <h1>Movies</h1>
      <div>
        <Route exact path ="/" component={ Movies }/>
        <Route exact path='/movie/info' component={ MovieInfo }></Route>
      </div>
    </>
  )
}

export default App
