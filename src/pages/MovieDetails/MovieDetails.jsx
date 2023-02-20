import { getMovieById } from 'components/Api/MovieApi';
import { useState, useEffect } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

// add Preloader!

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [currentMovieDetails, setCurrentMovieDetails] = useState({});
  const { title, genres, overview, poster_path, tagline } = currentMovieDetails;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId).then(result => setCurrentMovieDetails(result));
    return setCurrentMovieDetails({});
  }, [movieId]);

  const genresListFunc = () => {
    if (genres !== undefined) {
      const genresList = genres.map(genre => genre.name).join(' ');
      return genresList;
    }
  };

  return (
    <main>
      <Link to={backLinkHref}>
        <BsArrowLeft /> Go Back
      </Link>
      <section>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title + ' poster'}
        />
        <div>
          <h3>{title}</h3>
          <p>{tagline}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h5>Genres</h5>
          <p>{genresListFunc()}</p>
        </div>
      </section>
      <section>
        <h4>Additional information</h4>
        <Link to={'cast'}>Cast</Link>
        <Link to={'reviews'}>Reviews</Link>
        <Link to={''}>Hide All</Link>
      </section>
      <Outlet />
    </main>
  );
};
