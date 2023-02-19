import { getMovieCredits } from 'components/Api/MovieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(result => setCastInfo(result.cast));
    return setCastInfo({});
  }, [movieId]);

  return (
    <button
      onClick={() => {
        console.log(castInfo);
      }}
    >
      show info
    </button>
  );
};
