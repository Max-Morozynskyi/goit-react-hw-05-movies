import axios from 'axios';

const API_KEY = '321ca123fc0a63a77ea7b403d8c1a88c';
const selectedLanguage = () => {
  const value = window.localStorage.getItem('language');
  return value ? JSON.parse(value) : 'en-US';
};

export const getTrendingMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  return res.data;
};

export const getMovieByQuery = async (query, page) => {
  const searchQuery = query.trim();
  const lang = selectedLanguage();
  // const res = await axios.get(
  //   `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  // );
  const res = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: API_KEY,
      query: searchQuery,
      language: lang,
      page: page,
      include_adult: false,
    },
  });
  return res.data;
};

export const getMovieById = async movie_id => {
  const lang = selectedLanguage();

  // const res = await axios.get(
  //   `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  // );
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    {
      params: {
        api_key: API_KEY,
        language: lang,
      },
    }
  );
  return res.data;
};

export const getMovieReviews = async movie_id => {
  const lang = selectedLanguage();

  // const res = await axios.get(
  //   `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  // );
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    {
      params: {
        api_key: API_KEY,
        language: lang,
        page: 1,
      },
    }
  );
  return res.data;
};

export const getMovieCredits = async movie_id => {
  const lang = selectedLanguage();

  // const res = await axios.get(
  //   `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  // );
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    {
      params: {
        api_key: API_KEY,
        language: lang,
      },
    }
  );
  return res.data;
};
