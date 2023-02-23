import { getMovieById } from 'components/Api/MovieApi';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import {
  Additionals,
  GoBackBtn,
  MovieCard,
  MovieStats,
} from './MovieDetails.styled';
import { Container } from 'pages/Movies/Movies.styled';

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
    <Container>
      <GoBackBtn to={backLinkHref}>
        <BsArrowLeft /> Go Back
      </GoBackBtn>
      <MovieCard>
        <div style={{ minWidth: '500px' }}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/9556d16312333.5691dd2255721.jpg'
            }
            alt={title + ' poster'}
            width="500px"
          />
        </div>
        <div>
          <MovieStats>
            <h3>{title}</h3>
            <p style={{ fontStyle: 'italic' }}>{tagline}</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            <h5>Genres</h5>
            <p>{genresListFunc()}</p>
            <h4>Additional information</h4>
          </MovieStats>
          <div>
            <Additionals to={'cast'}>Cast</Additionals>
            <Additionals to={'reviews'}>Reviews</Additionals>
            <Additionals to={''}>Hide All</Additionals>
          </div>
          <Outlet />
        </div>
      </MovieCard>
    </Container>
  );
};
