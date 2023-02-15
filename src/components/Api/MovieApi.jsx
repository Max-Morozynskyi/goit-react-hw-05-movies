import axios from 'axios';

const API_KEY = '321ca123fc0a63a77ea7b403d8c1a88c';

export const getTrendingMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  return res;
};

export const getMovieByQuary = async query => {
  const searchQuery = query.trim();
  // const res = await axios.get(
  //   `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  // );
  const res = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: API_KEY,
      query: searchQuery,
      language: 'en-US',
      page: 1,
      include_adult: false,
    },
  });
  return res;
};

export const getMovieById = async movie_id => {
  // const res = await axios.get(
  //   `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  // );
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    }
  );
  return res;
};

export const getMovieReviews = async movie_id => {
  // const res = await axios.get(
  //   `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  // );
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    }
  );
  return res;
};

export const getMovieCredits = async movie_id => {
  // const res = await axios.get(
  //   `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  // );
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    }
  );
  return res;
};
