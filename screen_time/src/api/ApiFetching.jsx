const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmMwNTNhYjcwYjljMWQyZmQ0YTE1MjJhOWJlNmU3ZiIsInN1YiI6IjY0ZjY1Mzc3YWM0MTYxMDEyMDcwM2RhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AwwzUE805MXP0R2Ya4QsQDjaqCQ4NMhOh5bmVNy5YkI'
  }
};



// export function getTopRatedMovies() {
//   return fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       return data.results;
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

export function getTopRated(type) {
  return fetch(`https://api.themoviedb.org/3/${type}/top_rated?language=en-US&page=1`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data.results;
    })
    .catch(err => {
      console.error(err);
    });
}
