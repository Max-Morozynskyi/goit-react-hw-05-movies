import { getMovieReviews } from 'components/Api/MovieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [rewiewsInfo, setRewiewsInfo] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(result => setRewiewsInfo(result.results));
    return setRewiewsInfo([]);
  }, [movieId]);

  return (
    <div>
      <ul>
        {rewiewsInfo.map(({ author, content, created_at, id }) => {
          return (
            <li key={id}>
              <h5>Author: {author}</h5>
              <span>
                {created_at.slice(0, 16).split('T').reverse().join(' ')}
              </span>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
