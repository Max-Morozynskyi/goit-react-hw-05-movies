import { getMovieById } from 'components/Api/MovieApi';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import {
  Additionals,
  GoBackBtn,
  MovieCard,
  MovieStats,
} from './MovieDetails.styled';
import { Container } from 'pages/Movies/Movies.styled';
import { Preloader } from 'components/Preloader/Preloader';
import imgPoster from '../../img/img_404.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [currentMovieDetails, setCurrentMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { title, genres, overview, poster_path, tagline } = currentMovieDetails;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(movieId)
      .then(result => setCurrentMovieDetails(result))
      .catch(err => {
        console.log(err);
        navigate('../mamkin/programmer', { replace: true });
      })
      .finally(setIsLoading(false));
    return setCurrentMovieDetails({});
  }, [movieId, navigate]);

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
      {isLoading && <Preloader />}
      {!isLoading && (
        <MovieCard>
          <div style={{ minWidth: '500px' }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : imgPoster
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
              <Additionals to="cast" state={{ from: backLinkHref }}>
                Cast
              </Additionals>
              <Additionals to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Additionals>
              <Additionals to="" state={{ from: backLinkHref }}>
                Hide All
              </Additionals>
            </div>
            <Outlet />
          </div>
        </MovieCard>
      )}
    </Container>
  );
};

export default MovieDetails;
