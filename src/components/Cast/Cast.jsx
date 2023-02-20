import { getMovieCredits } from 'components/Api/MovieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(result =>
      setCastInfo(result.cast.slice(0, 15))
    );
    return setCastInfo([]);
  }, [movieId]);

  return (
    <div>
      <ul>
        {castInfo.map(({ character, name, profile_path, id }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              <h5>{name}</h5>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
