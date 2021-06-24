import request from 'superagent'

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;

// const serverURL = 'http://localhost:3000/api/v1'

// // *** EXAMPLE ***
// export function getWelcome () {
//   return request
//     .get(`${serverURL}/welcome`)
//     .then(response => response.body)
// }
