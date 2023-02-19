import { getTrendingMovies } from 'components/Api/MovieApi';
import { useEffect, useState } from 'react';
import { FilmList, FilmListItem, HomeTitle } from './Home.styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => setTrendFilms(results))
      .catch(err => err);
  }, []);
  return (
    <main>
      <HomeTitle>Смотрите ТОП-фильмы этой недели</HomeTitle>
      <FilmList>
        {trendFilms.map(({ title, id, poster_path }) => {
          return (
            <FilmListItem key={id}>
              <Link to={`movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                  alt={title}
                />
              </Link>
            </FilmListItem>
          );
        })}
      </FilmList>
    </main>
  );
};
