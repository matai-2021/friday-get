import request from 'superagent'

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=344b87e11ccb758bd47804d241ca67f5&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=344b87e11ccb758bd47804d241ca67f5&query='
// const serverURL = 'http://localhost:3000/api/v1'

// // *** EXAMPLE ***
export function getMovies () {
  return request
    .get(API_URL)
    .then(response => response.body)
}
