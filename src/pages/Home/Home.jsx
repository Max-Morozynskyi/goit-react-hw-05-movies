import { getTrendingMovies } from 'components/Api/MovieApi';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => setTrendFilms(data.results))
      .catch(err => err);
  }, []);
  console.log(trendFilms);
  return (
    <main>
      <h2>Смотрите ТОП-фильмы этой недели</h2>
      <ul>
        {trendFilms.map(({ title, id, poster_path }) => {
          return (
            <li key={id}>
              {/* <Link to={`movies/${id}`}> */}
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
              {/* <p>{title}</p> */}
              {/* </Link> */}
            </li>
          );
        })}
      </ul>
    </main>
  );
};
