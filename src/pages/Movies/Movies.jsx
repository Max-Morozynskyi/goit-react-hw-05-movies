import { getMovieByQuery } from 'components/Api/MovieApi';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Pagination } from '../../components/Pagination/Pagination';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

//сделать навигацию, проверка на 404 запроса. 404 изображения, стилизовать

export const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedData, setSearchedData] = useState([]);
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
    getMovieByQuery(searchQuery, currentPage)
      .then(data => {
        setSearchedData(data);
        setCurrentPage(data.page);
      })
      .catch(err => err);
  }, [searchParams, currentPage]);

  return (
    <main>
      <h2>Введите название фильма:</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="searchValue"
          type="text"
          autoComplete="off"
          value={searchValue}
          onChange={handleNameChange}
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <ImSearch size="20" color="blue" />
          <span>Search</span>
        </button>
      </form>
      {searchedData.length !== 0 && (
        <div>
          <ul>
            {searchedData.results.map(({ title, id, poster_path }) => {
              return (
                <li key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title}
                    />
                    <p>{title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Pagination
            pages={searchedData.total_pages}
            changePage={handlePage}
          />
        </div>
      )}
    </main>
  );
};
