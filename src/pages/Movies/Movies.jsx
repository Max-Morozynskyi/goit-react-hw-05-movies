import { getMovieByQuery } from 'components/Api/MovieApi';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Pagination } from '../../components/Pagination/Pagination';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  Container,
  MovieTitle,
  MoviesFormTitle,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SubmitLabel,
} from './Movies.styled';
import { FilmList, FilmListItem } from 'pages/Home/Home.styled';
import { Preloader } from 'components/Preloader/Preloader';
import imgPoster from '../../img/img_404.jpg';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedData, setSearchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleNameChange = evt => {
    setSearchValue(evt.currentTarget.value);
  };

  const handlePage = evt => {
    setCurrentPage(evt.selected + 1);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: searchValue });
    setSearchValue('');
    setCurrentPage(1);
  };

  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';

    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);
    getMovieByQuery(searchQuery, currentPage)
      .then(data => {
        setSearchedData(data);
        setCurrentPage(data.page);
      })
      .catch(err => console.log(err))
      .finally(setIsLoading(false));
  }, [searchParams, currentPage]);

  return (
    <Container>
      <MoviesFormTitle>Enter the movie title:</MoviesFormTitle>

      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          name="searchValue"
          type="text"
          autoComplete="off"
          value={searchValue}
          onChange={handleNameChange}
          autoFocus
          placeholder="Search movies"
        />
        <SearchFormBtn type="submit">
          <ImSearch size="20" color="#616157" />
          <SubmitLabel>Search</SubmitLabel>
        </SearchFormBtn>
      </SearchForm>
      {isLoading && <Preloader />}
      {searchedData.results?.length === 0 && (
        <div>{`Nothing found on your request "${searchParams.get(
          'query'
        )}". Try to search something else!`}</div>
      )}
      {searchedData.length !== 0 && searchedData.results.length !== 0 && (
        <div>
          <FilmList>
            {searchedData.results.map(({ title, id, poster_path }) => {
              return (
                <FilmListItem key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w400${poster_path}`
                          : imgPoster
                      }
                      alt={title}
                    />
                    <MovieTitle>{title}</MovieTitle>
                  </Link>
                </FilmListItem>
              );
            })}
          </FilmList>
          <Pagination
            pages={searchedData.total_pages}
            changePage={handlePage}
          />
        </div>
      )}
    </Container>
  );
};

export default Movies;
