import { getTrendingMovies } from 'components/Api/MovieApi';
import { useEffect, useState } from 'react';
import { FilmList, FilmListItem, HomeTitle } from './Home.styled';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => setTrendFilms(results))
      .catch(err => err);
  }, []);
  return (
    <main>
      <HomeTitle>TOP-movies of this week</HomeTitle>
      <FilmList>
        {trendFilms.map(({ title, id, poster_path }) => {
          return (
            <FilmListItem key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
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

export default Home;
